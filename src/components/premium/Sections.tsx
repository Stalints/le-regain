'use client';

import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Linkedin, Mail, Quote, Star, ZoomIn } from 'lucide-react';
import { useState } from 'react';
import {
  BRAND_TEAL,
  blogPosts,
  departments,
  gallery,
  rehabPrograms,
  strengths,
  team,
  technologies,
  testimonials,
} from '@/data/premiumSite';

type SectionsProps = {
  onBook: () => void;
};

export function StrengthsSection() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#68a69e] sm:text-sm">
            Why Choose Le Regain
          </p>
          <h2 className="mb-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Elevating Standards in{' '}
            <span className="bg-gradient-to-r from-[#68a69e] to-[#4a8079] bg-clip-text text-transparent">
              Healthcare & Aesthetics
            </span>
          </h2>
          <p className="text-base leading-7 text-gray-600 sm:text-lg">
            We integrate medical expertise with refined hospitality and technology-led care for calm, confident outcomes.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group rounded-3xl border border-gray-100 bg-gray-50 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl sm:p-10"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 rotate-3 items-center justify-center rounded-2xl bg-gradient-to-br from-[#68a69e] to-[#4a8079] text-white shadow-lg transition-transform group-hover:rotate-0">
                  <Icon size={38} />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm leading-7 text-gray-600 sm:text-base">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-gray-50 py-16 sm:py-24">
      <div className="absolute right-0 top-0 h-[46rem] w-[46rem] translate-x-1/3 -translate-y-1/2 rounded-full bg-[#68a69e]/5 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#68a69e] sm:text-sm">
              Our Departments
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Comprehensive Care Centers
            </h2>
          </div>
          <a href="#pmr" className="hidden items-center font-bold text-[#68a69e] transition-colors hover:text-gray-900 md:flex">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {departments.map((department) => {
            const Icon = department.icon;
            return (
              <article
                id={department.id}
                key={department.id}
                className="group relative min-h-[420px] overflow-hidden rounded-[2rem] sm:min-h-[500px] sm:rounded-3xl"
              >
                <div className="absolute inset-0 z-10 bg-gray-900/50 transition-colors duration-500 group-hover:bg-gray-900/30 sm:bg-gray-900/40" />
                <img
                  src={department.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md">
                    <Icon size={30} />
                  </div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/80">{department.kicker}</p>
                  <h3 className="mb-4 text-3xl font-bold text-white sm:text-4xl">{department.title}</h3>
                  <p className="mb-6 max-w-md text-sm leading-7 text-gray-200 sm:text-lg">{department.description}</p>
                  <span
                    className="inline-flex w-max items-center rounded-full px-6 py-3 text-sm font-bold text-white transition-colors group-hover:bg-white sm:text-base"
                    style={{ backgroundColor: department.color }}
                  >
                    Explore Department
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-10 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm sm:mt-12 sm:p-10">
          <div className="mx-auto mb-7 max-w-2xl text-center">
            <h3 className="mb-3 text-2xl font-bold text-gray-900 sm:text-3xl">Rehabilitation Programs</h3>
            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              Specialized rehabilitation paths are organized with consistent spacing and clear scanning.
            </p>
          </div>
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2 sm:gap-3">
            {rehabPrograms.map((program) => (
              <span
                key={program}
                className="rounded-full border border-gray-100 bg-white px-4 py-2 text-center text-xs font-semibold text-gray-700 shadow-sm transition-colors hover:bg-[#68a69e] hover:text-white sm:px-5 sm:py-3 sm:text-sm"
              >
                {program}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#68a69e] sm:text-sm">
            Le Regain Experts
          </p>
          <h2 className="mb-5 text-4xl font-bold text-gray-900 sm:text-5xl">Meet Our Team</h2>
          <p className="text-base leading-7 text-gray-600 sm:text-lg">
            Dedicated professionals committed to recovery, health, and aesthetic confidence.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {team.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-[#68a69e]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a href="#" className="flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-white text-[#68a69e] transition-all duration-300 group-hover:translate-y-0 hover:bg-[#68a69e] hover:text-white">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-white text-[#68a69e] transition-all delay-75 duration-300 group-hover:translate-y-0 hover:bg-[#68a69e] hover:text-white">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
              <div className="p-8 text-center">
                <span className="mb-4 inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#68a69e]">
                  {member.category}
                </span>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">{member.name}</h3>
                <p className="mb-4 font-semibold text-[#68a69e]">{member.role}</p>
                <p className="text-sm leading-7 text-gray-600">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechnologySection() {
  return (
    <section id="technology" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#68a69e] sm:text-sm">Innovation</p>
        <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">Advanced Technologies</h2>
        <p className="mx-auto mb-12 max-w-3xl text-base font-light leading-8 text-gray-600 sm:mb-16 sm:text-xl">
          Modern medical and aesthetic technology, organized into calm, scannable, premium cards.
        </p>
        <div className="grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <article key={tech.title} className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl lg:p-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-[#68a69e] transition-colors group-hover:bg-[#68a69e] group-hover:text-white">
                  <Icon size={30} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">{tech.title}</h3>
                <p className="text-sm leading-7 text-gray-600 sm:text-base">{tech.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#68a69e] sm:text-sm">Our Environment</p>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Clinic Gallery</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {gallery.map((image) => (
            <article key={image.title} className="group relative h-72 overflow-hidden rounded-[2rem] bg-white shadow-sm transition-all duration-500 hover:shadow-2xl sm:h-80 sm:rounded-3xl">
              <img src={image.image} alt={image.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/0 opacity-0 transition-all duration-300 group-hover:bg-gray-900/60 group-hover:opacity-100">
                <div className="mb-4 flex h-14 w-14 translate-y-4 items-center justify-center rounded-full bg-[#68a69e]/90 text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                  <ZoomIn size={24} />
                </div>
                <h3 className="translate-y-4 text-xl font-bold text-white transition-transform delay-100 duration-300 group-hover:translate-y-0">{image.title}</h3>
                <p className="mt-1 translate-y-4 text-sm font-semibold uppercase tracking-wider text-gray-300 transition-transform delay-150 duration-300 group-hover:translate-y-0">{image.category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsAndBlog() {
  const [current, setCurrent] = useState(0);
  const active = testimonials[current];

  return (
    <>
      <section className="overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#68a69e] sm:text-sm">Patient Stories</p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Hear from our Community</h2>
          </div>
          <div className="mx-auto max-w-5xl text-center">
            <Quote className="mx-auto mb-6 h-16 w-16 text-gray-100" />
            <p className="mx-auto mb-8 max-w-4xl font-serif text-xl italic leading-relaxed text-gray-700 sm:text-2xl md:text-3xl">
              "{active.text}"
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <img src={active.image} alt={active.name} className="h-16 w-16 rounded-full border-4 border-gray-50 object-cover shadow-md" />
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-bold text-gray-900">{active.name}</h3>
                <p className="text-sm font-medium text-[#68a69e]">{active.role}</p>
                <div className="mt-1 flex justify-center text-yellow-400 sm:justify-start">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={() => setCurrent((value) => (value - 1 + testimonials.length) % testimonials.length)}
                className="rounded-full bg-gray-50 p-3 text-gray-600 shadow-sm transition-colors hover:bg-[#68a69e] hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setCurrent(index)}
                    className={`h-2.5 rounded-full transition-all ${index === current ? 'w-8 bg-[#68a69e]' : 'w-2.5 bg-gray-300'}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setCurrent((value) => (value + 1) % testimonials.length)}
                className="rounded-full bg-gray-50 p-3 text-gray-600 shadow-sm transition-colors hover:bg-[#68a69e] hover:text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#68a69e] sm:text-sm">Our Blog</p>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Latest Insights & News</h2>
            </div>
            <a href="#blog" className="text-sm font-bold text-[#68a69e] hover:underline sm:text-base">View All Articles</a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {blogPosts.map((post) => (
              <article key={post.title} className="group flex flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl">
                <div className="relative h-56 shrink-0 overflow-hidden">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#68a69e] backdrop-blur-sm">{post.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="mb-2 flex items-center text-xs font-medium text-gray-400 sm:text-sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    {post.date}
                  </p>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-[#68a69e] sm:text-2xl">{post.title}</h3>
                  <p className="mb-5 flex-1 text-sm leading-7 text-gray-600 sm:text-base">{post.excerpt}</p>
                  <span className="flex items-center text-sm font-bold text-[#68a69e] sm:text-base">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function CtaSection({ onBook }: SectionsProps) {
  return (
    <section className="relative overflow-hidden bg-[#1a2b29] py-20 sm:py-24">
      <div className="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1920" alt="" className="h-full w-full object-cover mix-blend-overlay" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">Ready to Start Your Wellness Journey?</h2>
        <p className="mb-10 text-base font-light leading-7 text-gray-300 sm:text-lg md:text-xl">
          Whether you need advanced rehabilitation or expert aesthetic care, our multidisciplinary team is here for you.
        </p>
        <button
          type="button"
          onClick={onBook}
          className="w-full rounded-full bg-[#68a69e] px-10 py-5 text-base font-bold text-white shadow-[0_0_20px_rgba(104,166,158,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(104,166,158,0.6)] sm:w-auto sm:text-lg"
        >
          Book an Appointment Today
        </button>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-5 text-4xl font-bold text-gray-900 sm:text-5xl">Get in Touch</h2>
          <p className="text-base leading-7 text-gray-600 sm:text-lg">
            Have a question or want to schedule a visit? Our team is ready to assist you.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] sm:rounded-3xl sm:p-10 lg:col-span-3">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <input className="rounded-xl border border-gray-200 bg-gray-50 p-4 outline-none focus:ring-2 focus:ring-[#68a69e]" placeholder="First Name" />
                <input className="rounded-xl border border-gray-200 bg-gray-50 p-4 outline-none focus:ring-2 focus:ring-[#68a69e]" placeholder="Last Name" />
              </div>
              <input className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 outline-none focus:ring-2 focus:ring-[#68a69e]" placeholder="Email Address" />
              <textarea className="min-h-36 w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-4 outline-none focus:ring-2 focus:ring-[#68a69e]" placeholder="How can we help you today?" />
              <button type="button" className="rounded-xl bg-[#68a69e] px-8 py-4 font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-[2rem] border border-gray-100 bg-gray-50 p-6 sm:rounded-3xl sm:p-10">
              <h3 className="mb-8 text-2xl font-bold text-gray-900">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#68a69e] shadow-sm">
                    <Mail size={22} />
                  </span>
                  <div>
                    <strong className="mb-1 block text-gray-900">Email Address</strong>
                    <span className="text-gray-600">info@leregain.com</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#68a69e] shadow-sm">
                    <Calendar size={22} />
                  </span>
                  <div>
                    <strong className="mb-1 block text-gray-900">Clinic Hours</strong>
                    <span className="text-gray-600">Mon-Sat: 9AM - 8PM</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="h-64 overflow-hidden rounded-[2rem] bg-gray-200 sm:rounded-3xl">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
