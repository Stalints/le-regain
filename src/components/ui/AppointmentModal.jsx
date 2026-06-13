'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Activity,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  User,
  X,
} from 'lucide-react';
import { BRAND_GREY, BRAND_TEAL } from '@/config/branding';
import { hairAndSkinClinicServices, locations, pmrClinicServices } from '@/data/clinicContent';

const clinicTracks = [
  {
    id: 'pmr',
    label: 'PMR Clinic',
    description: 'Pain management, sports medicine, physiotherapy and rehabilitation.',
    icon: Activity,
    serviceOptions: pmrClinicServices,
  },
  {
    id: 'skin',
    label: 'Hair & Skin Clinic',
    description: 'Dermatology, trichology, medical facials and aesthetic lasers.',
    icon: Sparkles,
    serviceOptions: hairAndSkinClinicServices,
  },
];

const locationOptions = [
  {
    id: 'primaryHub',
    label: 'Vyttila Hub',
    address: locations.primaryHub.address,
  },
  {
    id: 'edappallyPhysiotherapyCentre',
    label: 'Edappally Physiotherapy Centre',
    address: locations.edappallyPhysiotherapyCentre.address,
  },
];

const initialFormState = {
  track: 'pmr',
  service: pmrClinicServices[0]?.id || '',
  location: 'primaryHub',
  name: '',
  phone: '',
  email: '',
  preferredDate: '',
  preferredTime: '',
  message: '',
};

export default function AppointmentModal({ isOpen, onClose }) {
  const [form, setForm] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [createdAppointment, setCreatedAppointment] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [slotError, setSlotError] = useState('');

  const selectedTrack = useMemo(
    () => clinicTracks.find((track) => track.id === form.track) || clinicTracks[0],
    [form.track],
  );

  const selectedLocation = useMemo(
    () => locationOptions.find((location) => location.id === form.location) || locationOptions[0],
    [form.location],
  );

  useEffect(() => {
    let isMounted = true;

    async function loadSlots() {
      if (!form.preferredDate) {
        setAvailableSlots([]);
        setSlotError('');
        setForm((current) => ({
          ...current,
          preferredTime: '',
        }));
        return;
      }

      try {
        setIsLoadingSlots(true);
        setSlotError('');
        setForm((current) => ({
          ...current,
          preferredTime: '',
        }));

        const params = new URLSearchParams({
          date: form.preferredDate,
          branch: selectedLocation.label,
          clinicType: selectedTrack.label,
        });

        const response = await fetch(`/api/appointments/slots?${params.toString()}`, {
          cache: 'no-store',
        });
        const payload = await response.json();

        if (!response.ok || !payload.success) {
          throw new Error(payload.error || 'Unable to load available slots.');
        }

        if (isMounted) {
          setAvailableSlots(payload.slots || []);
        }
      } catch (error) {
        if (isMounted) {
          setAvailableSlots([]);
          setSlotError(error.message || 'Unable to load available slots.');
        }
      } finally {
        if (isMounted) {
          setIsLoadingSlots(false);
        }
      }
    }

    loadSlots();

    return () => {
      isMounted = false;
    };
  }, [form.preferredDate, form.location, form.track, selectedLocation.label, selectedTrack.label]);

  if (!isOpen) {
    return null;
  }

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
    setSubmitError('');
  };

  const handleTrackChange = (track) => {
    setForm((current) => ({
      ...current,
      track: track.id,
      service: track.serviceOptions[0]?.id || '',
      location:
        track.id === 'skin' && current.location === 'edappallyPhysiotherapyCentre'
          ? 'primaryHub'
          : current.location,
    }));
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setSubmitError('');
    setCreatedAppointment(null);
    setForm(initialFormState);
    onClose?.();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          clinicType: selectedTrack.label,
          branch: selectedLocation.label,
          date: `${form.preferredDate}T${form.preferredTime}:00+05:30`,
        }),
      });

      const payload = await response.json();

      if (!response.ok || !payload.success) {
        throw new Error(payload.error || 'Unable to submit appointment request.');
      }

      setCreatedAppointment(payload.appointment);
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(error.message || 'Unable to submit appointment request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-slate-950/55 px-4 py-4 backdrop-blur-sm sm:items-center sm:py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-modal-title"
    >
      <div className="relative max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: BRAND_GREY }}
            >
              Appointment Request
            </p>
            <h2 id="appointment-modal-title" className="mt-1 text-xl font-semibold text-slate-950">
              Book a visit at Le Regain
            </h2>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-all duration-300 hover:bg-slate-50"
            aria-label="Close appointment form"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[calc(92vh-5rem)] overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
          {isSubmitted ? (
            <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
              <span
                className="flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: 'rgba(104, 166, 158, 0.14)', color: BRAND_TEAL }}
                aria-hidden="true"
              >
                <CheckCircle2 size={34} strokeWidth={2.1} />
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-slate-950">
                Request received
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                Thank you, {form.name}. The Le Regain team will contact you at {form.phone} to
                confirm your {selectedTrack.label} appointment at {selectedLocation.label}.
              </p>
              {createdAppointment?.id && (
                <p className="mt-3 rounded-full bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-500">
                  Reference: {createdAppointment.id}
                </p>
              )}
              <button
                type="button"
                onClick={handleClose}
                className="mt-7 inline-flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                style={{ backgroundColor: BRAND_TEAL }}
              >
                Done
                <ChevronRight size={17} aria-hidden="true" />
              </button>
            </div>
          ) : (
            <form className="grid gap-6" onSubmit={handleSubmit}>
              <section>
                <label className="text-sm font-semibold text-slate-950">
                  Preferred clinic track
                </label>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {clinicTracks.map((track) => {
                    const Icon = track.icon;
                    const isActive = form.track === track.id;

                    return (
                      <button
                        key={track.id}
                        type="button"
                        onClick={() => handleTrackChange(track)}
                        className="rounded-2xl border p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                        style={{
                          borderColor: isActive ? BRAND_TEAL : '#e2e8f0',
                          backgroundColor: isActive ? 'rgba(104, 166, 158, 0.1)' : '#ffffff',
                        }}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className="flex h-10 w-10 items-center justify-center rounded-full"
                            style={{
                              backgroundColor: isActive ? BRAND_TEAL : '#f1f5f9',
                              color: isActive ? '#ffffff' : BRAND_GREY,
                            }}
                            aria-hidden="true"
                          >
                            <Icon size={19} />
                          </span>
                          <span className="font-semibold text-slate-950">{track.label}</span>
                        </span>
                        <span className="mt-3 block text-sm leading-6 text-slate-600">
                          {track.description}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-slate-950">
                  Service interest
                  <select
                    value={form.service}
                    onChange={(event) => updateField('service', event.target.value)}
                    className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 outline-none transition-all duration-300 focus:border-transparent focus:ring-2"
                    style={{ '--tw-ring-color': BRAND_TEAL }}
                  >
                    {selectedTrack.serviceOptions.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2 text-sm font-semibold text-slate-950">
                  Preferred branch
                  <select
                    value={form.location}
                    onChange={(event) => updateField('location', event.target.value)}
                    className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 outline-none transition-all duration-300 focus:border-transparent focus:ring-2"
                    style={{ '--tw-ring-color': BRAND_TEAL }}
                  >
                    {locationOptions.map((location) => (
                      <option
                        key={location.id}
                        value={location.id}
                        disabled={form.track === 'skin' && location.id === 'edappallyPhysiotherapyCentre'}
                      >
                        {location.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={19}
                    className="mt-0.5 shrink-0"
                    style={{ color: BRAND_TEAL }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      {selectedLocation.label}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {selectedLocation.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-slate-950">
                  Full name
                  <span className="relative">
                    <User
                      size={17}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(event) => updateField('name', event.target.value)}
                      className="h-12 w-full rounded-2xl border border-slate-200 pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition-all duration-300 focus:border-transparent focus:ring-2"
                      style={{ '--tw-ring-color': BRAND_TEAL }}
                      autoComplete="name"
                    />
                  </span>
                </label>

                <label className="grid gap-2 text-sm font-semibold text-slate-950">
                  Phone number
                  <span className="relative">
                    <Phone
                      size={17}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(event) => updateField('phone', event.target.value)}
                      className="h-12 w-full rounded-2xl border border-slate-200 pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition-all duration-300 focus:border-transparent focus:ring-2"
                      style={{ '--tw-ring-color': BRAND_TEAL }}
                      autoComplete="tel"
                    />
                  </span>
                </label>

                <label className="grid gap-2 text-sm font-semibold text-slate-950">
                  Email
                  <span className="relative">
                    <Mail
                      size={17}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(event) => updateField('email', event.target.value)}
                      className="h-12 w-full rounded-2xl border border-slate-200 pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition-all duration-300 focus:border-transparent focus:ring-2"
                      style={{ '--tw-ring-color': BRAND_TEAL }}
                      autoComplete="email"
                    />
                  </span>
                </label>

                <label className="grid gap-2 text-sm font-semibold text-slate-950">
                  Preferred date
                  <span className="relative">
                    <Calendar
                      size={17}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />
                    <input
                      required
                      type="date"
                      value={form.preferredDate}
                      onChange={(event) => updateField('preferredDate', event.target.value)}
                      className="h-12 w-full rounded-2xl border border-slate-200 pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition-all duration-300 focus:border-transparent focus:ring-2"
                      style={{ '--tw-ring-color': BRAND_TEAL }}
                    />
                  </span>
                </label>
              </div>

              {form.preferredDate && (
                <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-950">Available slots</p>
                      <p className="mt-1 text-sm text-slate-600">Choose a specific appointment time.</p>
                    </div>
                    {isLoadingSlots && (
                      <span
                        className="text-xs font-semibold uppercase tracking-[0.14em]"
                        style={{ color: BRAND_GREY }}
                      >
                        Loading
                      </span>
                    )}
                  </div>

                  {slotError && (
                    <p className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                      {slotError}
                    </p>
                  )}

                  {!isLoadingSlots && !slotError && availableSlots.length === 0 && (
                    <p className="mt-4 rounded-xl border border-amber-100 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">
                      No slot available for this date and branch.
                    </p>
                  )}

                  {availableSlots.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {availableSlots.map((slot) => {
                        const isSelected = form.preferredTime === slot;

                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => updateField('preferredTime', slot)}
                            className="h-11 rounded-full border px-4 text-sm font-semibold transition-all duration-300"
                            style={{
                              borderColor: isSelected ? BRAND_TEAL : '#e2e8f0',
                              backgroundColor: isSelected ? BRAND_TEAL : '#ffffff',
                              color: isSelected ? '#ffffff' : '#334155',
                            }}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </section>
              )}

              <label className="grid gap-2 text-sm font-semibold text-slate-950">
                Notes for the clinic
                <textarea
                  value={form.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  rows={4}
                  className="resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 outline-none transition-all duration-300 focus:border-transparent focus:ring-2"
                  style={{ '--tw-ring-color': BRAND_TEAL }}
                />
              </label>

              {submitError && (
                <p className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {submitError}
                </p>
              )}

              <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 px-6 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !form.preferredTime}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
                  style={{ backgroundColor: BRAND_TEAL }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  <ChevronRight size={17} aria-hidden="true" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
