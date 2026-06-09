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
      'Diagnosis-led dermatology care for common and complex skin concerns with medical treatment plans and procedural support.',
    treatments: [
      'Acne evaluation and medical acne care',
      'Acne scar revision planning',
      'Hyperpigmentation management',
      'Melasma and uneven tone treatment',
      'Sensitive skin and barrier repair',
      'Rashes, allergies, eczema and psoriasis care',
      'Mole, wart and skin tag assessment',
      'Dermatosurgery support',
    ],
  },
  {
    id: 'advanced-medical-facials',
    title: 'Advanced Medical Facials',
    division: 'SKIN',
    summary:
      'Dermatologist-guided facial treatments designed for skin health, glow, hydration, resurfacing and recovery.',
    treatments: [
      'HydraFacials',
      'Chemical peels',
      "Kerala's first signature Cryo Facial",
      'Brightening and glow protocols',
      'Oil-control facials',
      'Anti-ageing medical facials',
      'Barrier-restoring facials',
      'Event-ready skin preparation',
    ],
  },
  {
    id: 'trichology',
    title: 'Trichology',
    division: 'SKIN',
    summary:
      'Medical hair and scalp care focused on diagnosing the cause of hair fall and improving long-term scalp health.',
    treatments: [
      'Hair fall evaluation',
      'Dandruff and scalp inflammation care',
      'Pattern hair loss management',
      'Hair density support plans',
      'Scalp health assessment',
      'Medical hair growth protocols',
      'Post-illness hair fall management',
      'Hair and nutrition counselling',
    ],
  },
  {
    id: 'aesthetic-lasers',
    title: 'Aesthetic Lasers',
    division: 'SKIN',
    summary:
      'Evidence-led laser and device-based procedures for skin texture, tone, scars, rejuvenation and unwanted hair.',
    treatments: [
      'Laser hair reduction',
      'Acne scar laser protocols',
      'Pigmentation lasers',
      'Skin rejuvenation lasers',
      'Texture and pore refinement',
      'Tattoo and spot reduction support',
      'Vascular lesion care',
      'Doctor-supervised pre- and post-laser care',
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
      'Physiatrist-led diagnosis and procedure planning for pain conditions affecting function, mobility and quality of life.',
    treatments: [
      'Musculoskeletal pain assessment',
      'Spine pain evaluation',
      'Joint and soft-tissue pain management',
      'Ultrasound-guided injections',
      'Trigger point procedures',
      'Functional restoration plans',
    ],
  },
  {
    id: 'sports-medicine-orthopaedic-rehab',
    title: 'Sports Medicine & Orthopaedic Rehab',
    division: 'PMR',
    summary:
      'Structured recovery programs for sports injuries, orthopaedic conditions and post-operative rehabilitation.',
    treatments: [
      'Sports injury diagnosis and recovery planning',
      'Return-to-play progression',
      'Ligament and tendon rehabilitation',
      'Post-fracture rehabilitation',
      'Joint replacement rehabilitation',
      'Strength, balance and conditioning programs',
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
      'Goal-based physiotherapy programs combining manual therapy, exercise therapy, electrotherapy and functional training.',
    treatments: [
      'Manual therapy',
      'Therapeutic exercise',
      'Mobility and flexibility training',
      'Strength and balance training',
      'Posture and ergonomic correction',
      'Pain-relief modalities',
      'Gait and movement retraining',
    ],
    locations: ['primaryHub', 'edappallyPhysiotherapyCentre'],
  },
  {
    id: 'regenerative-medicine',
    title: 'Regenerative Medicine',
    division: 'PMR',
    summary:
      'Image-guided regenerative procedures for selected tendon, ligament, joint and soft-tissue conditions.',
    treatments: [
      'Ultrasound-guided PRP',
      'Tendon and ligament injury support',
      'Early joint degeneration support',
      'Soft-tissue healing protocols',
      'Procedure-linked rehabilitation planning',
      'Follow-up functional outcome tracking',
    ],
  },
  {
    id: 'specialized-rehabilitation',
    title: 'Specialized Rehabilitation',
    division: 'PMR',
    summary:
      'Multidisciplinary rehabilitation across neurological, paediatric, speech, occupational and functional recovery needs.',
    treatments: [
      'Neurorehabilitation',
      'Occupational therapy',
      'Speech therapy',
      'Pediatric rehab',
      'Geriatric rehab',
      'Vestibular and balance rehab',
      'Cardiopulmonary rehab',
      'Amputee and prosthetic rehab',
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
