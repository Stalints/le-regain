'use client';

import { CheckCircle, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import { BRAND_TEAL } from '@/data/premiumSite';

type AppointmentModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/80 p-4 backdrop-blur-sm sm:p-6">
      <div className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={() => {
            setSent(false);
            onClose();
          }}
          className="absolute right-4 top-4 rounded-full bg-gray-50 p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-800"
          aria-label="Close appointment modal"
        >
          <X size={20} />
        </button>

        {sent ? (
          <div className="py-10 text-center">
            <CheckCircle className="mx-auto mb-6 h-20 w-20 text-[#68a69e]" />
            <h2 className="mb-3 text-3xl font-bold text-[#737976]">Request Sent!</h2>
            <p className="text-sm leading-6 text-gray-600">
              Our team will contact you shortly to confirm your appointment details.
            </p>
          </div>
        ) : (
          <form
            className="space-y-5 pt-2"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <div>
              <h2 className="mb-2 text-3xl font-bold text-[#737976]">Book Appointment</h2>
              <p className="text-sm text-gray-500">Take the first step towards better health and radiance.</p>
            </div>

            {[
              ['Clinic Branch', 'Select a branch...'],
              ['Full Name', 'Your name'],
              ['Phone Number', '+1 (555) 000-0000'],
              ['Email Address', 'you@example.com'],
            ].map(([label, placeholder]) => (
              <label key={label} className="block">
                <span className="mb-1.5 block text-sm font-semibold text-gray-700">{label}</span>
                <input
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[#68a69e]"
                  placeholder={placeholder}
                  type={label.includes('Email') ? 'email' : label.includes('Phone') ? 'tel' : 'text'}
                />
              </label>
            ))}

            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-gray-700">Preferred Service</span>
              <select className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-sm outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[#68a69e]">
                <option>Physical Medicine & Rehab</option>
                <option>Hair & Skin Clinic</option>
                <option>Beauty Consultation</option>
              </select>
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-xl px-6 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style={{ backgroundColor: BRAND_TEAL }}
            >
              Confirm Request
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
