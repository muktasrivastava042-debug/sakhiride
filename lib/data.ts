export interface VehicleFleet {
  id: string;
  name: string;
  category: string;
  tagline: string;
  baseFare: number;
  ratePerKm: number;
  capacity: string;
  etaMins: number;
  badge: string;
  idealFor: string;
  amenities: string[];
}

export interface DriverProfile {
  id: string;
  name: string;
  age: number;
  rating: number;
  totalRides: number;
  experienceYears: number;
  vehicleModel: string;
  vehicleNumber: string;
  vehicleType: string;
  languages: string[];
  badges: string[];
  policeClearanceDate: string;
  aadhaarVerified: boolean;
  avatarSeed: string;
  bio: string;
  recentReview: {
    author: string;
    text: string;
    rating: number;
    date: string;
  };
}

export interface RideBooking {
  id: string;
  pickup: string;
  destination: string;
  rideType: string;
  fare: number;
  distanceKm: number;
  status: 'arriving' | 'in_transit' | 'scheduled' | 'completed' | 'cancelled';
  otp: string;
  driver?: DriverProfile;
  scheduledTime?: string;
  bookedAt: string;
  paymentMethod: 'UPI' | 'Card' | 'Sakhi Wallet' | 'Cash on Arrival';
  emergencyContactsNotified: boolean;
}

export const VEHICLE_FLEET: VehicleFleet[] = [
  {
    id: 'sakhi-city',
    name: 'Sakhi City',
    category: 'Clean EV / Compact Hatchback',
    tagline: 'Zippy, quiet, and eco-friendly for everyday city commutes.',
    baseFare: 55,
    ratePerKm: 14,
    capacity: '3 Passengers',
    etaMins: 3,
    badge: 'Popular Choice',
    idealFor: 'Daily office commute, college runs, errands',
    amenities: ['100% Female Driver', 'Live GPS Tracking', 'AC Cabin', 'In-Car Sanitizer & Water'],
  },
  {
    id: 'sakhi-comfort',
    name: 'Sakhi Comfort',
    category: 'Spacious Electric Sedan',
    tagline: 'Extra legroom, generous boot space, and luggage assistance.',
    baseFare: 90,
    ratePerKm: 18,
    capacity: '4 Passengers + 2 Bags',
    etaMins: 5,
    badge: 'Airport & Outstation',
    idealFor: 'Airport transfers, family trips, luggage travel',
    amenities: ['Luggage Lift Support', 'Phone Charger (Type-C & iOS)', 'Spacious Boot', 'Dual Dashcam Guard'],
  },
  {
    id: 'sakhi-shakti',
    name: 'Sakhi Shakti Auto',
    category: 'Electric Smart Auto',
    tagline: 'Affordable, breezy short hops with verified women auto captains.',
    baseFare: 35,
    ratePerKm: 10,
    capacity: '3 Passengers',
    etaMins: 2,
    badge: 'Most Affordable',
    idealFor: 'Metro station links, market visits, neighborhood hops',
    amenities: ['Zero Emission EV', 'Meter-Linked Fare', 'Fast Pickup', 'Safety Shield Screen'],
  },
  {
    id: 'sakhi-guardian',
    name: 'Sakhi Night Guardian',
    category: 'Certified Late-Night Escort',
    tagline: 'Specialized night safety pilot with self-defense certification and audio monitoring.',
    baseFare: 120,
    ratePerKm: 22,
    capacity: '4 Passengers',
    etaMins: 6,
    badge: 'Maximum Security (8PM - 6AM)',
    idealFor: 'Late night shifts, flight arrivals, midnight travel',
    amenities: ['Self-Defense Trained Pilot', 'Direct 112 Police Sync', 'Two-Way Audio Guard', 'Doorstep Escort to Gate'],
  },
];

export const VERIFIED_DRIVERS: DriverProfile[] = [
  {
    id: 'drv-01',
    name: 'Sunita Devi',
    age: 38,
    rating: 4.98,
    totalRides: 3420,
    experienceYears: 6,
    vehicleModel: 'Tata Tigor EV (White)',
    vehicleNumber: 'DL 01 AB 4421',
    vehicleType: 'Sakhi Comfort',
    languages: ['Hindi', 'English', 'Punjabi'],
    badges: ['Top Rated Pilot', 'First Responder Certified', 'Aadhaar Verified', 'Airport Specialist'],
    policeClearanceDate: 'Verified Nov 2025',
    aadhaarVerified: true,
    avatarSeed: 'sunita',
    bio: 'Proud mother of two and independent driver partner since 2019. Safety and punctuality are my religion. Always glad to assist women travelers with heavy bags!',
    recentReview: {
      author: 'Priya K., Designer',
      text: 'Sunita ji was so warm, professional, and drove so calmly during heavy peak-hour traffic. Felt 100% at peace!',
      rating: 5,
      date: 'Yesterday at 8:40 PM',
    },
  },
  {
    id: 'drv-02',
    name: 'Pooja Sharma',
    age: 31,
    rating: 4.99,
    totalRides: 2850,
    experienceYears: 4,
    vehicleModel: 'Tata Tiago EV (Teal)',
    vehicleNumber: 'HR 26 DQ 7890',
    vehicleType: 'Sakhi Night Guardian',
    languages: ['Hindi', 'English'],
    badges: ['Self-Defense Master', 'Night Guardian Veteran', 'Police Cleared', 'Zero Accident Record'],
    policeClearanceDate: 'Verified Dec 2025',
    aadhaarVerified: true,
    avatarSeed: 'pooja',
    bio: 'Black belt in Taekwondo and professional night-shift mobility captain. My car is a safe sanctuary for any sister traveling after dark in NCR.',
    recentReview: {
      author: 'Dr. Meenakshi S., Resident Surgeon',
      text: 'As a doctor returning at 2 AM from AIIMS, having Pooja wait outside until I entered my building gate was priceless. Sakhi is a blessing.',
      rating: 5,
      date: '2 days ago',
    },
  },
  {
    id: 'drv-03',
    name: 'Kavita Negi',
    age: 29,
    rating: 4.96,
    totalRides: 1940,
    experienceYears: 3,
    vehicleModel: 'Mahindra Treo Electric Auto (Green)',
    vehicleNumber: 'DL 1R TA 9102',
    vehicleType: 'Sakhi Shakti Auto',
    languages: ['Hindi', 'Garhwali', 'Basic English'],
    badges: ['Eco Champion', 'Punctuality Queen', 'Student Favorite'],
    policeClearanceDate: 'Verified Jan 2026',
    aadhaarVerified: true,
    avatarSeed: 'kavita',
    bio: 'Electric auto captain connecting North Campus colleges with metro lines. Clean cabin, smooth driving, zero surge pricing!',
    recentReview: {
      author: 'Sneha Roy, DU Student',
      text: 'Super punctual! Kavita did not ask for cash extras or cancel like ordinary autos. Polite and very safe.',
      rating: 5,
      date: '3 days ago',
    },
  },
  {
    id: 'drv-04',
    name: 'Ananya Sen',
    age: 35,
    rating: 4.97,
    totalRides: 2310,
    experienceYears: 5,
    vehicleModel: 'Hyundai Aura (Silver)',
    vehicleNumber: 'UP 16 BX 6533',
    vehicleType: 'Sakhi Comfort',
    languages: ['Bengali', 'Hindi', 'English'],
    badges: ['Corporate Commute Lead', 'Child-Friendly Pilot', 'Aadhaar Verified'],
    policeClearanceDate: 'Verified Oct 2025',
    aadhaarVerified: true,
    avatarSeed: 'ananya',
    bio: 'Former school administrative coordinator turned full-time entrepreneur cab driver. I prioritize silent rides or friendly conversation as per rider preference.',
    recentReview: {
      author: 'Ritika M., Marketing Director',
      text: 'Pristine car condition, calm driving, and polite communication. Booking Ananya every morning for my Noida to Gurgaon commute.',
      rating: 5,
      date: '4 days ago',
    },
  },
];

export const INITIAL_RIDES: RideBooking[] = [
  {
    id: 'SKH-8821',
    pickup: 'Cyber City Hub, Tower B, Phase 2, Gurugram',
    destination: 'South Extension II, Block E, New Delhi',
    rideType: 'Sakhi Comfort',
    fare: 485,
    distanceKm: 21.4,
    status: 'arriving',
    otp: '4821',
    driver: VERIFIED_DRIVERS[0],
    bookedAt: 'Today at 7:15 PM',
    paymentMethod: 'UPI',
    emergencyContactsNotified: true,
  },
  {
    id: 'SKH-8794',
    pickup: 'Terminal 3, Domestic Arrivals, IGI Airport',
    destination: 'Noida Sector 62, Expressway',
    rideType: 'Sakhi Night Guardian',
    fare: 890,
    distanceKm: 38.2,
    status: 'scheduled',
    otp: '9103',
    driver: VERIFIED_DRIVERS[1],
    scheduledTime: 'Tomorrow at 11:30 PM',
    bookedAt: 'Today at 2:20 PM',
    paymentMethod: 'Sakhi Wallet',
    emergencyContactsNotified: true,
  },
  {
    id: 'SKH-8650',
    pickup: 'Vishwavidyalaya Metro Station, Gate 3',
    destination: 'Kamla Nagar Market, Delhi',
    rideType: 'Sakhi Shakti Auto',
    fare: 75,
    distanceKm: 3.8,
    status: 'completed',
    otp: '3319',
    driver: VERIFIED_DRIVERS[2],
    bookedAt: 'Yesterday at 3:45 PM',
    paymentMethod: 'UPI',
    emergencyContactsNotified: false,
  },
];

export const POPULAR_LOCATIONS = [
  'Indira Gandhi International Airport (T3)',
  'DLF Cyber City, Phase 2, Gurugram',
  'South Extension Market, New Delhi',
  'Connaught Place, Inner Circle',
  'Noida Sector 62, Expressway',
  'Saket District Centre & Select Citywalk',
  'Hauz Khas Social / Village Entry',
  'Vishwavidyalaya DU North Campus',
  'Aerocity Hospitality District',
  'Nehru Place Metro Station',
];
