import {
  Activity,
  Award,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from 'lucide-react';

export const BRAND_TEAL = '#68a69e';
export const BRAND_GREY = '#737976';

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'team', label: 'Our Team' },
  { id: 'technology', label: 'Technologies' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
] as const;

export const heroSlides = [
  {
    id: 'welcome',
    eyebrow: 'Welcome to Excellence',
    title: 'Welcome to Le Regain',
    subtitle: 'Comprehensive care for your body, skin, and hair under one refined clinical roof.',
    button: 'Discover Our Services',
    image:
      'https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=1920',
  },
  {
    id: 'rehab',
    eyebrow: 'Advanced Rehabilitation',
    title: 'Advanced Rehabilitation',
    subtitle: 'Physical medicine, pain care, and therapy programs built around measurable recovery.',
    button: 'Explore PMR Clinic',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1920',
  },
  {
    id: 'aesthetic',
    eyebrow: 'Aesthetic Excellence',
    title: 'Aesthetic Excellence',
    subtitle: 'Clinical skin, hair, and beauty care with a calm premium treatment experience.',
    button: 'View Skin Clinic',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1920',
  },
];

export const strengths = [
  {
    title: 'Multidisciplinary Medical Panel',
    description: 'Direct access to senior medical consultants, dermatologists, and certified physical therapists in one location.',
    icon: ShieldCheck,
  },
  {
    title: 'Advanced Clinical Infrastructure',
    description: 'Equipped with cutting-edge medical lasers, cryogenic systems, and state-of-the-art physiotherapy equipment.',
    icon: Award,
  },
  {
    title: 'Bespoke Treatment Pathways',
    description: "Every treatment plan is systematically tailored to the patient's medical history, lifestyle, and recovery goals.",
    icon: Users,
  },
];

export const services = {
  pmr: [
    'PMR Clinic',
    'Sports Medicine',
    'Physical Therapy',
    'Occupational Therapy',
    'Speech & Language Therapy',
  ],
  skin: ['Skin Care Treatment', 'Hair Care Treatment', 'Beauty Consultation'],
};

export const departments = [
  {
    id: 'pmr',
    kicker: 'Le Regain PMR Clinic',
    title: 'Le Regain PMR Clinic',
    description: 'A multidisciplinary center for Physical Medicine and Rehabilitation, specializing in non-surgical interventional pain management, sports medicine, and comprehensive physical therapy.',
    icon: Activity,
    image:
      'https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80&w=1200',
    color: BRAND_TEAL,
    items: services.pmr,
  },
  {
    id: 'skin',
    kicker: 'Le Regain Hair & Skin Clinic',
    title: 'Le Regain Hair & Skin Clinic',
    description: 'Advanced clinical dermatology, trichology, and non-invasive medical aesthetics with FDA-approved technologies and Kerala\'s first Cryo Facial.',
    icon: Sparkles,
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1200',
    color: BRAND_GREY,
    items: services.skin,
  },
];

export const rehabPrograms = [
  'Orthopedics And Rheumatology',
  'Neuro Rehabilitation',
  'Cardiovascular & Pulmonary',
  'Pediatric/Child Development Clinic',
  'Sports Injury Rehabilitation',
  'Pain Clinic',
  'Geriatric Rehabilitation',
  'Hand Rehabilitation',
  "Women's Health Clinic",
  'Balance And Vertigo Clinic',
  'Ergonomics Clinic',
  'Home Care Services',
];

export const team = [
  {
    name: 'Dr. Sarah Jenkins',
    role: 'Chief Physiatrist',
    category: 'Rehabilitation',
    bio: 'Specializes in neuro-rehabilitation and non-invasive pain management.',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Lead Dermatologist',
    category: 'Aesthetics',
    bio: 'Expert in advanced laser therapies and aesthetic skin rejuvenation.',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Emily Rogers',
    role: 'Senior Physical Therapist',
    category: 'Rehabilitation',
    bio: 'Focuses on sports injuries and post-surgical orthopedic recovery.',
    image:
      'https://images.unsplash.com/photo-1594824436998-d58593aecf4a?auto=format&fit=crop&q=80&w=600',
  },
];

export const technologies = [
  {
    title: 'Robotic Rehabilitation',
    description:
      'Guided movement therapy for neuro-rehabilitation, strength rebuilding, and precise progression.',
    icon: Activity,
  },
  {
    title: 'Advanced Laser Therapy',
    description:
      'Modern dermatology systems for rejuvenation, pigmentation, scar care, and hair reduction.',
    icon: Sparkles,
  },
  {
    title: '3D Motion Analysis',
    description:
      'Movement assessment that helps identify gait, posture, and sports-performance constraints.',
    icon: HeartPulse,
  },
];

export const gallery = [
  {
    title: 'Modern Reception',
    category: 'Facility',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Physical Rehabilitation',
    category: 'Therapy',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Skin Consultation',
    category: 'Aesthetics',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Treatment Room',
    category: 'Facility',
    image:
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Advanced Physiotherapy',
    category: 'Therapy',
    image:
      'https://images.unsplash.com/photo-1594824436998-d58593aecf4a?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Laser Treatment',
    category: 'Aesthetics',
    image:
      'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1200',
  },
];

export const testimonials = [
  {
    name: 'John D.',
    role: 'PMR Patient',
    text: 'The physical therapy team helped me recover from knee surgery faster than expected. The plan was structured, modern, and deeply personal.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'Sarah M.',
    role: 'Aesthetics Client',
    text: 'The skin consultation was calm and precise. Every treatment felt premium while still being medically grounded.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
  },
  {
    name: 'Robert T.',
    role: 'Rehab Patient',
    text: 'After my stroke, the therapy team gave me confidence, independence, and a realistic path back into daily life.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
  },
];

export const blogPosts = [
  {
    title: 'Top 5 Exercises for Knee Pain',
    category: 'Rehabilitation',
    date: 'Oct 12, 2023',
    excerpt:
      'Simple, effective exercises to reduce chronic knee pain and improve supporting strength.',
    image:
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Understanding Your Skin Type',
    category: 'Skin Care',
    date: 'Oct 05, 2023',
    excerpt:
      'A practical guide to identifying oily, dry, combination, or sensitive skin needs.',
    image:
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'The Role of OT in Stroke Recovery',
    category: 'Therapy',
    date: 'Sep 28, 2023',
    excerpt:
      'How occupational therapy supports independence, confidence, and quality of life.',
    image:
      'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800',
  },
];

export const contactCards = [
  {
    title: 'Clinic Address',
    value: '123 Wellness Avenue, Health District, NY 10001',
    icon: Stethoscope,
  },
  {
    title: 'Phone Number',
    value: '+1 (555) 123-4567',
    icon: Activity,
  },
];
