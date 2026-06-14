import { BRAND_GREY, BRAND_TEAL } from '@/config/branding';

export const clinicIdentity = {
  name: 'Le Regain',
  fullName: 'Le Regain Integrated Healthcare & Aesthetics',
  tagline: 'Integrated Healthcare & Aesthetics',
  theme: {
    primary: BRAND_TEAL,
    neutral: BRAND_GREY,
  },
  divisions: ['SKIN', 'PMR'],
};

export const locations = {
  primaryHub: {
    label: 'Le Regain Integrated Healthcare & Aesthetics',
    type: 'primary-hub',
    address: 'Sid’s Arcade, Vyttila, Kochi, Kerala',
    locality: 'Vyttila',
    city: 'Kochi',
    state: 'Kerala',
    country: 'India',
    services: ['SKIN', 'PMR', 'Hair', 'Aesthetics', 'Rehabilitation'],
    routeSlug: 'vyttila',
    isPrimary: true,
  },
  edappallyPhysiotherapyCentre: {
    label: 'Le Regain Physiotherapy Centre in Edappally',
    type: 'physiotherapy-centre',
    address: 'Edappally, Kochi, Kerala',
    locality: 'Edappally',
    city: 'Kochi',
    state: 'Kerala',
    country: 'India',
    services: ['PMR', 'Physiotherapy', 'Rehabilitation'],
    routeSlug: 'edappally-physiotherapy-centre',
    isPrimary: false,
    mentions: [
      'Le Regain Physiotherapy Centre in Edappally',
      'Edappally physiotherapy centre',
      'Le Regain Edappally',
    ],
    routing: {
      canonicalPath: '/locations/edappally-physiotherapy-centre',
      aliases: ['/edappally', '/physiotherapy-centre-edappally'],
      showInLocationSwitcher: true,
      showInFooter: true,
      relatedDivision: 'PMR',
    },
  },
};

export const team = [
  {
    id: 'dr-joshy-joseph-a',
    name: 'Dr. Joshy Joseph A.',
    division: 'SKIN',
    role: 'Consultant Dermatologist, Trichologist & Aesthetic Medicine Specialist',
    credentials: ['MBBS', 'MD Dermatology'],
    focusAreas: [
      'Clinical dermatology',
      'Acne and acne scar management',
      'Pigmentation disorders',
      'Aesthetic dermatology',
      'Laser-based skin procedures',
      'Hair and scalp disorders',
    ],
  },
  {
    id: 'dr-shahna-mubarak-m',
    name: 'Dr. Shahna Mubarak M.',
    division: 'SKIN',
    role: 'Consultant Dermatologist & Cosmetology Physician',
    credentials: ['MBBS', 'MD Dermatology'],
    focusAreas: [
      'Medical facials',
      'Chemical peels',
      'Hyperpigmentation treatment',
      'Anti-ageing skin care',
      'Dermatosurgery support',
      'Preventive skin health',
    ],
  },
  {
    id: 'dr-minnu-jayesh',
    name: 'Dr. Minnu Jayesh',
    division: 'SKIN',
    role: 'Dermatology, Hair Restoration & Aesthetic Laser Physician',
    credentials: ['MBBS', 'Dermatology and Aesthetic Medicine Training'],
    focusAreas: [
      'Trichology',
      'Hair fall evaluation',
      'Scalp health',
      'Laser hair reduction',
      'Acne care',
      'Skin rejuvenation protocols',
    ],
  },
  {
    id: 'pmr-consultant',
    name: 'PMR Specialist',
    division: 'PMR',
    role: 'Consultant Physiatrist, Interventional Pain & Rehabilitation Medicine',
    credentials: ['MBBS', 'MD Physical Medicine & Rehabilitation'],
    focusAreas: [
      'Interventional pain management',
      'Musculoskeletal rehabilitation',
      'Neurorehabilitation',
      'Sports injury recovery',
      'Ultrasound-guided regenerative procedures',
      'Multidisciplinary rehabilitation planning',
    ],
  },
];

export const hairAndSkinClinicServices = [
  {
    id: 'clinical-dermatology',
    title: 'Clinical Dermatology',
    division: 'SKIN',
    summary:
      'Expert management of chronic acne, acne scar revision, and hyperpigmentation correction.',
    treatments: [
      'Chronic acne management',
      'Acne scar revision',
      'Hyperpigmentation correction',
    ],
  },
  {
    id: 'advanced-medical-facials',
    title: 'Advanced Medical Facials',
    division: 'SKIN',
    summary:
      'Deep-cleansing HydraFacials, medical-grade chemical peels, and signature Cryo Facials for skin rejuvenation.',
    treatments: [
      'HydraFacials',
      'Medical-grade chemical peels',
      "Kerala's first signature Cryo Facial",
    ],
  },
  {
    id: 'trichology',
    title: 'Trichology & Hair Restoration',
    division: 'SKIN',
    summary:
      'Evidence-based hair loss treatments, specialized scalp care, and PRP therapy to counter hair thinning and stimulate growth.',
    treatments: [
      'Hair loss treatments',
      'Specialized scalp care',
      'PRP (Platelet-Rich Plasma) therapy',
    ],
  },
  {
    id: 'aesthetic-lasers',
    title: 'Laser & Anti-Aging Solutions',
    division: 'SKIN',
    summary:
      'Precision Laser Hair Removal (LHR) for all skin types, skin tightening, and skin-brightening glutathione therapies.',
    treatments: [
      'Laser Hair Removal (LHR)',
      'Skin tightening',
      'Skin-brightening glutathione therapies',
    ],
  },
];

export const rehabilitationTracks = [
  {
    id: 'neurorehabilitation',
    title: 'Neurorehabilitation',
    focus: 'Stroke, spinal cord injury, traumatic brain injury, Parkinsonism and neurological recovery.',
  },
  {
    id: 'orthopaedic-rehabilitation',
    title: 'Orthopaedic Rehabilitation',
    focus: 'Fracture recovery, joint pain, posture correction and post-immobilisation strengthening.',
  },
  {
    id: 'sports-injury-rehabilitation',
    title: 'Sports Injury Rehabilitation',
    focus: 'Return-to-sport planning, mobility restoration, strength progression and injury prevention.',
  },
  {
    id: 'post-operative-rehabilitation',
    title: 'Post-Operative Rehabilitation',
    focus: 'Recovery after joint replacement, ligament repair, spine surgery and soft-tissue procedures.',
  },
  {
    id: 'spine-rehabilitation',
    title: 'Spine Rehabilitation',
    focus: 'Neck pain, back pain, disc-related symptoms, ergonomic correction and core stability.',
  },
  {
    id: 'pain-rehabilitation',
    title: 'Pain Rehabilitation',
    focus: 'Chronic pain, myofascial pain, arthritis-related pain and functional restoration.',
  },
  {
    id: 'pediatric-rehabilitation',
    title: 'Pediatric Rehabilitation',
    focus: 'Developmental delay, cerebral palsy, gait training, balance and age-appropriate function.',
  },
  {
    id: 'geriatric-rehabilitation',
    title: 'Geriatric Rehabilitation',
    focus: 'Fall prevention, mobility confidence, strength preservation and independence in daily activity.',
  },
  {
    id: 'cardiopulmonary-rehabilitation',
    title: 'Cardiopulmonary Rehabilitation',
    focus: 'Breathing retraining, endurance building, post-hospital recovery and monitored conditioning.',
  },
  {
    id: 'womens-health-rehabilitation',
    title: "Women's Health Rehabilitation",
    focus: 'Pelvic floor care, antenatal and postnatal recovery, posture and pain management.',
  },
  {
    id: 'occupational-therapy',
    title: 'Occupational Therapy',
    focus: 'Daily living skills, hand function, adaptive strategies, sensory integration and independence.',
  },
  {
    id: 'speech-and-swallow-therapy',
    title: 'Speech & Swallow Therapy',
    focus: 'Speech clarity, language recovery, swallowing support and communication rehabilitation.',
  },
  {
    id: 'hand-rehabilitation',
    title: 'Hand Rehabilitation',
    focus: 'Hand injuries, tendon recovery, stiffness, grip strength and fine motor function.',
  },
  {
    id: 'vestibular-and-balance-rehabilitation',
    title: 'Vestibular & Balance Rehabilitation',
    focus: 'Vertigo, balance deficits, dizziness-related movement avoidance and gait confidence.',
  },
  {
    id: 'amputee-and-prosthetic-rehabilitation',
    title: 'Amputee & Prosthetic Rehabilitation',
    focus: 'Pre-prosthetic conditioning, gait training, prosthetic adaptation and functional mobility.',
  },
  {
    id: 'workplace-and-ergonomic-rehabilitation',
    title: 'Workplace & Ergonomic Rehabilitation',
    focus: 'Desk-related pain, repetitive strain, posture retraining and return-to-work conditioning.',
  },
];

export const pmrClinicServices = [
  {
    id: 'interventional-pain-management',
    title: 'Interventional Pain Management',
    division: 'PMR',
    summary:
      'Target-specific, non-surgical relief for chronic back pain, sciatica, neck pain, and herniated discs.',
    treatments: [
      'Chronic back pain relief',
      'Sciatica management',
      'Neck pain treatment',
      'Herniated disc care',
    ],
  },
  {
    id: 'sports-medicine-orthopaedic-rehab',
    title: 'Sports Medicine & Orthopaedic Rehab',
    division: 'PMR',
    summary:
      'Specialized care for athletic injuries, ligament sprains, muscle strains, and post-surgical rehabilitation.',
    treatments: [
      'Athletic injury care',
      'Ligament sprain rehabilitation',
      'Muscle strain recovery',
      'Post-surgical rehabilitation',
    ],
    relatedTracks: [
      'orthopaedic-rehabilitation',
      'sports-injury-rehabilitation',
      'post-operative-rehabilitation',
      'spine-rehabilitation',
      'hand-rehabilitation',
    ],
  },
  {
    id: 'advanced-physiotherapy',
    title: 'Advanced Physiotherapy',
    division: 'PMR',
    summary:
      'Customized physical therapy regimens utilizing modern electrotherapy modalities, manual therapy, and therapeutic exercises.',
    treatments: [
      'Electrotherapy modalities',
      'Manual therapy',
      'Therapeutic exercises',
      'Customized rehab regimens',
    ],
    locations: ['primaryHub', 'edappallyPhysiotherapyCentre'],
  },
  {
    id: 'regenerative-medicine',
    title: 'Regenerative Medicine',
    division: 'PMR',
    summary:
      'Ultrasound-guided PRP injections for joint osteoarthritis and tendinopathies.',
    treatments: [
      'Ultrasound-guided PRP',
      'Joint osteoarthritis support',
      'Tendinopathy treatment',
    ],
  },
  {
    id: 'specialized-rehabilitation',
    title: 'Specialized Rehabilitation',
    division: 'PMR',
    summary:
      'Comprehensive neurorehabilitation for stroke recovery, alongside dedicated occupational therapy, speech therapy, and pediatric rehabilitation.',
    treatments: [
      'Neurorehabilitation for stroke recovery',
      'Occupational therapy',
      'Speech therapy',
      'Pediatric rehabilitation',
    ],
    tracks: rehabilitationTracks,
  },
];

export const clinicContent = {
  identity: clinicIdentity,
  locations,
  team,
  services: {
    hairAndSkinClinic: hairAndSkinClinicServices,
    pmrClinic: pmrClinicServices,
    rehabilitationTracks,
  },
};

export default clinicContent;
