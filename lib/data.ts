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
  locationArea: string;
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

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  content: string[];
  highlightQuote: string;
}

export interface HelplineContact {
  name: string;
  number: string;
  description: string;
  available: string;
  badge: string;
  isPriority?: boolean;
}

export const POPULAR_LOCATIONS = [
  'Lal Bahadur Shastri Airport (Babatpur)',
  'Varanasi Cantt Railway Station (Junction)',
  'Dashashwamedh Ghat (Main Ganga Aarti)',
  'Assi Ghat (Subah-e-Banaras)',
  'Kashi Vishwanath Temple (Godowlia Gate)',
  'Banaras Hindu University (BHU - Lanka Gate)',
  'Sir Sunderlal Hospital (IMS-BHU)',
  'Sarnath Buddhist Stupa & Heritage Complex',
  'Sigra Stadium & Shopping Boulevard',
  'Namo Ghat (Khidkiya Ghat)',
  'Banaras Railway Station (Manduadih)',
  'Durgakund Temple & Anandbagh',
  'Mahmoorganj / Rathyatra Chauraha',
  'Chowk & Thatheri Bazar (Silk Market)',
];

export const VEHICLE_FLEET: VehicleFleet[] = [
  {
    id: 'sakhi-ganga-auto',
    name: 'Sakhi Ganga E-Auto',
    category: 'Electric Smart Green Auto',
    tagline: 'Custom-tuned for Varanasi’s narrow ghat lanes, Godowlia, and temple corridors.',
    baseFare: 30,
    ratePerKm: 10,
    capacity: '3 Passengers',
    etaMins: 2,
    badge: 'Best for Ghats & Darshan',
    idealFor: 'Ghat hops, Vishwanath corridor, local bazaar visits',
    amenities: ['Zero Emission EV', 'Transparent Meter Fare', 'Luggage Net', 'Emergency Panic Switch'],
  },
  {
    id: 'sakhi-kashi-city',
    name: 'Sakhi Kashi City EV',
    category: 'Clean Electric Hatchback (Tiago EV)',
    tagline: 'Silent, AC comfort for daily BHU students, office workers, and city travel.',
    baseFare: 50,
    ratePerKm: 13,
    capacity: '4 Passengers',
    etaMins: 3,
    badge: 'Popular for Daily Commute',
    idealFor: 'BHU Lanka runs, Sigra, Mahmoorganj, and Cantt Station',
    amenities: ['Chilled AC Cabin', '100% Female Driver', 'Live GPS Tracking', 'Sanitizer & Water'],
  },
  {
    id: 'sakhi-sangam-sedan',
    name: 'Sakhi Sangam Comfort',
    category: 'Spacious Electric Sedan (Tigor EV)',
    tagline: 'Extra legroom and large trunk for Babatpur Airport and long family pilgrimages.',
    baseFare: 80,
    ratePerKm: 16,
    capacity: '4 Passengers + 3 Bags',
    etaMins: 5,
    badge: 'Airport & Pilgrim Families',
    idealFor: 'Babatpur Airport to Ghats, Sarnath day tours, luggage transfers',
    amenities: ['Luggage Lift Support', 'Phone Chargers', 'Spacious Trunk', 'Dual Dashcam Guard'],
  },
  {
    id: 'sakhi-night-suraksha',
    name: 'Sakhi Night Suraksha',
    category: 'Certified Late-Night Escort Pilot',
    tagline: 'Specialized night safety pilot with self-defense certification and UP 1090/112 sync.',
    baseFare: 110,
    ratePerKm: 20,
    capacity: '4 Passengers',
    etaMins: 6,
    badge: 'Active 8 PM – 6 AM',
    idealFor: 'Midnight Cantt train arrivals, late airport flights, night hospital shifts',
    amenities: ['Self-Defense Trained Pilot', 'Direct UP 1090 Sync', 'Audio Check-in', 'Doorstep Gate Escort'],
  },
];

export const VERIFIED_DRIVERS: DriverProfile[] = [
  {
    id: 'drv-vns-01',
    name: 'Shanti Devi',
    age: 36,
    rating: 4.99,
    totalRides: 3820,
    experienceYears: 6,
    vehicleModel: 'Mahindra Treo Electric Auto (Varanasi Green)',
    vehicleNumber: 'UP 65 BT 1088',
    vehicleType: 'Sakhi Ganga E-Auto',
    locationArea: 'Assi Ghat & Lanka Base',
    languages: ['Hindi', 'Bhojpuri', 'Basic English'],
    badges: ['Assi Ghat Veteran', 'Self-Defense Certified', 'UP Police Verified', 'Subah-e-Banaras Guide'],
    policeClearanceDate: 'Verified Dec 2025 (Chowk Police Thana)',
    aadhaarVerified: true,
    avatarSeed: 'shanti',
    bio: 'Born and raised in Assi, Varanasi. Mother of two daughters studying at BHU. Driving with pride since 2019, ensuring female pilgrims and university students reach their destinations with absolute safety and respect.',
    recentReview: {
      author: 'Ananya Roy, Solo Traveler from Kolkata',
      text: 'Shanti ji picked me up at 4:30 AM for Subah-e-Banaras at Assi Ghat. As a solo traveler in Varanasi, having a fearless, warm local sister driving me made my spiritual trip unforgettable!',
      rating: 5,
      date: 'Yesterday at 6:15 AM',
    },
  },
  {
    id: 'drv-vns-02',
    name: 'Rekha Yadav',
    age: 32,
    rating: 4.98,
    totalRides: 2640,
    experienceYears: 5,
    vehicleModel: 'Tata Tigor EV (Pearl White)',
    vehicleNumber: 'UP 65 AB 4492',
    vehicleType: 'Sakhi Sangam Comfort',
    locationArea: 'Cantt Station & Babatpur Airport Express',
    languages: ['Hindi', 'English'],
    badges: ['Airport Gold Pilot', 'First Responder Certified', 'Aadhaar Verified', 'Zero Cancellation Record'],
    policeClearanceDate: 'Verified Jan 2026 (Sigra Police Station)',
    aadhaarVerified: true,
    avatarSeed: 'rekha',
    bio: 'Former school teacher turned full-time mobility captain. Specialize in Babatpur Airport transfers and family darshan trips across Kashi Vishwanath and Sarnath.',
    recentReview: {
      author: 'Dr. Sunanda Misra, IMS-BHU Surgeon',
      text: 'I rely on Rekha for late night calls to Sir Sunderlal Hospital. Her driving is calm, vehicle is pristine, and she knows every shortcut in Varanasi to bypass Cantt traffic.',
      rating: 5,
      date: '2 days ago',
    },
  },
  {
    id: 'drv-vns-03',
    name: 'Aarti Tripathi',
    age: 29,
    rating: 4.97,
    totalRides: 1910,
    experienceYears: 4,
    vehicleModel: 'Tata Tiago EV (Teal Blue)',
    vehicleNumber: 'UP 65 DQ 7820',
    vehicleType: 'Sakhi Kashi City EV',
    locationArea: 'Lanka, BHU Campus & Ravindrapuri',
    languages: ['Hindi', 'English'],
    badges: ['Student Favorite', 'Night Suraksha Lead', 'Taekwondo Brown Belt'],
    policeClearanceDate: 'Verified Nov 2025 (Bhelupur Police Station)',
    aadhaarVerified: true,
    avatarSeed: 'aarti',
    bio: 'BHU alumna committed to women safety in Kashi. Stationed right outside Lanka Gate, offering quick, dignified rides for women students, researchers, and tourists.',
    recentReview: {
      author: 'Kavita Tiwari, PhD Scholar, BHU',
      text: 'Having Aarti wait at Lanka Gate after late-night library hours is the biggest peace of mind any female student in Varanasi could ask for.',
      rating: 5,
      date: '3 days ago',
    },
  },
  {
    id: 'drv-vns-04',
    name: 'Meena Patel',
    age: 39,
    rating: 4.96,
    totalRides: 2150,
    experienceYears: 5,
    vehicleModel: 'Piaggio Ape E-City (Ganga Electric)',
    vehicleNumber: 'UP 65 TE 3341',
    vehicleType: 'Sakhi Ganga E-Auto',
    locationArea: 'Godowlia, Dashashwamedh & Chowk',
    languages: ['Hindi', 'Bhojpuri'],
    badges: ['Temple Corridor Specialist', 'Aadhaar Verified', 'Clean Cabin Champion'],
    policeClearanceDate: 'Verified Oct 2025 (Dashashwamedh Thana)',
    aadhaarVerified: true,
    avatarSeed: 'meena',
    bio: 'Navigating the sacred alleys of Kashi with a smile. Expert in navigating traffic around Godowlia, Maidagin, and the Ganga ghats so women can reach temple aarti punctually.',
    recentReview: {
      author: 'Usha Sharma, Pilgrim from Jaipur',
      text: 'Meena ji helped my elderly mother board the e-auto gently and dropped us right at the Vishwanath temple gate with immense devotion and care.',
      rating: 5,
      date: '4 days ago',
    },
  },
];

export const INITIAL_RIDES: RideBooking[] = [
  {
    id: 'VNS-4491',
    pickup: 'Varanasi Cantt Railway Station, Exit Gate 1',
    destination: 'Assi Ghat, Near Ganga Seva Nidhi',
    rideType: 'Sakhi Ganga E-Auto',
    fare: 120,
    distanceKm: 7.2,
    status: 'arriving',
    otp: '5812',
    driver: VERIFIED_DRIVERS[0],
    bookedAt: 'Today at 7:10 PM',
    paymentMethod: 'UPI',
    emergencyContactsNotified: true,
  },
  {
    id: 'VNS-4208',
    pickup: 'Lal Bahadur Shastri Airport, Babatpur',
    destination: 'Kashi Vishwanath Temple, Godowlia Gate',
    rideType: 'Sakhi Sangam Comfort',
    fare: 680,
    distanceKm: 26.5,
    status: 'scheduled',
    otp: '8910',
    driver: VERIFIED_DRIVERS[1],
    scheduledTime: 'Tomorrow at 9:00 AM',
    bookedAt: 'Today at 3:30 PM',
    paymentMethod: 'Sakhi Wallet',
    emergencyContactsNotified: true,
  },
  {
    id: 'VNS-3980',
    pickup: 'Banaras Hindu University (BHU - Lanka Gate)',
    destination: 'Dashashwamedh Ghat (Evening Aarti)',
    rideType: 'Sakhi Kashi City EV',
    fare: 110,
    distanceKm: 5.4,
    status: 'completed',
    otp: '2214',
    driver: VERIFIED_DRIVERS[2],
    bookedAt: 'Yesterday at 5:40 PM',
    paymentMethod: 'UPI',
    emergencyContactsNotified: false,
  },
];

export const VARANASI_HELPLINES: HelplineContact[] = [
  {
    name: 'UP Women Power Line',
    number: '1090',
    description:
      'Dedicated 24/7 Uttar Pradesh toll-free helpline for women facing any harassment, eve-teasing, stalkers, or threats. Immediate police intervention with confidential counseling.',
    available: '24 Hours / 365 Days',
    badge: 'Toll-Free Priority',
    isPriority: true,
  },
  {
    name: 'UP Emergency Response (ERSS)',
    number: '112',
    description:
      'Universal UP Police emergency service with integrated dispatch for nearest Varanasi PCR vans, fire response, and highway mobile patrol units.',
    available: 'Under 8 min response in Varanasi',
    badge: 'Immediate PCR Van Dispatch',
    isPriority: true,
  },
  {
    name: 'National Women Helpline',
    number: '1091',
    description:
      'Central Government 24-hour distress line providing crisis intervention, legal assistance, and institutional support for women travelers across India.',
    available: '24/7 All-India',
    badge: 'Crisis Support',
  },
  {
    name: 'Varanasi Mahila Thana (Sigra / Chowk)',
    number: '0542-2508100',
    description:
      'Direct line to Varanasi Commissionerate Women Police Station for lodging complaints, assistance at tourist ghats, and dedicated female police officers.',
    available: 'Direct Varanasi Line',
    badge: 'Local Women Station',
  },
  {
    name: 'Kashi Pink Police Booth Helpline',
    number: '+91 94544 01645',
    description:
      'Specialized all-women police pink booths deployed at Assi Ghat, Dashashwamedh, Cantt Station, and BHU Lanka for on-spot immediate safety assistance.',
    available: '6:00 AM – 11:30 PM On-Site',
    badge: 'Pink Booth Network',
  },
  {
    name: 'National Cyber Crime Portal (Women Cell)',
    number: '1930',
    description:
      'Direct helpline to report online harassment, obscene calls, fake profiles, and cyber harassment against women.',
    available: '24/7 National Desk',
    badge: 'Cyber Safety',
  },
  {
    name: 'Sir Sunderlal Hospital (IMS-BHU) Trauma & Emergency',
    number: '0542-2307500',
    description:
      'Premier tertiary trauma and emergency care center in Varanasi, located on the BHU Campus, equipped for 24/7 emergency medical assistance.',
    available: '24/7 Trauma Care',
    badge: 'Medical Emergency',
  },
  {
    name: 'Childline Helpline',
    number: '1098',
    description: 'Emergency assistance for children traveling with mothers or unaccompanied minors in Varanasi.',
    available: '24/7 Toll-Free',
    badge: 'Child Welfare',
  },
];

export const VARANASI_PINK_BOOTHS = [
  {
    location: 'Assi Ghat Pink Booth',
    landmark: 'Beside Subah-e-Banaras Stage & Ganga Seva Nidhi',
    officerInCharge: 'Sub-Inspector Sunita Singh',
    contact: '+91 94544 04388',
    services: 'First aid, safe waiting lounge for women, lost & found, emergency SOS relay',
  },
  {
    location: 'Dashashwamedh Ghat Pink Booth',
    landmark: 'Godowlia-Dashashwamedh Road near Chitaipur Police Picket',
    officerInCharge: 'Sub-Inspector Priyanka Maurya',
    contact: '+91 94544 04390',
    services: 'Ghat crowd safety monitoring, lost children recovery, emergency female escort',
  },
  {
    location: 'Varanasi Cantt Station Pink Booth',
    landmark: 'Platform 1 Main Exit near Tourist Information Bureau',
    officerInCharge: 'Inspector Shashi Kala',
    contact: '+91 94544 04395',
    services: 'Late-night train arrival assistance, prepaid safe transit facilitation',
  },
  {
    location: 'BHU Lanka Gate Pink Booth',
    landmark: 'Main Malaviya Gate, Opp. Ravidas Gate Police Chowki',
    officerInCharge: 'Sub-Inspector Anita Yadav',
    contact: '+91 94544 04399',
    services: 'Campus perimeter surveillance, student safe transit point, harassment deterrence',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-01',
    title: 'Solo Female Travel in Varanasi: Safe Night Ghat Visits, Ganga Aarti & Sakhi E-Rides',
    slug: 'solo-female-travel-varanasi-safety-guide',
    excerpt:
      'A comprehensive local guide for women traveling alone to Kashi: how to experience the magical evening aarti at Dashashwamedh, morning walks at Assi, and travel securely after dusk.',
    category: 'Travel & Spiritual Safety',
    readTime: '5 min read',
    date: 'March 2026',
    author: 'Priya Mukherjee',
    authorRole: 'Travel Journalist & Kashi Explorer',
    highlightQuote:
      'Varanasi at night is pure poetry, but having a verified woman driver waiting by the ghat entrance transformed my nervous apprehension into calm spiritual reverence.',
    content: [
      'Varanasi is one of the world’s oldest living cities, filled with intense devotion, labyrinthine alleys, and unforgettable spiritual energy. For decades, however, solo female travelers frequently reported anxiety after dark—especially while returning from the 7:00 PM Ganga Aarti at Dashashwamedh or Rajendra Prasad Ghat.',
      'The traditional rickshaw and taxi system often led to unwanted haggling, lack of GPS visibility, and uncomfortable interactions on quiet stretches of Cantt or Babatpur Road.',
      'With Sakhi Ride’s women-exclusive fleet, you can book an e-auto or electric hatchback right to Godowlia or Assi Ghat with fixed upfront pricing. Your driver is a local Banaras woman who knows every safe passage, respects your space, and has completed background clearance with Varanasi Police.',
      'Key safety tips for women in Varanasi: 1) Always verify your driver’s facial OTP before boarding; 2) Share your live tracking link directly with family; 3) Keep UP 1090 on speed dial; 4) Use Sakhi Ganga E-Autos for narrow lanes where standard cabs cannot enter.',
    ],
  },
  {
    id: 'blog-02',
    title: 'From Handloom Loom to the Steering Wheel: The Story of Shanti Devi',
    slug: 'shanti-devi-varanasi-driver-partner-story',
    excerpt:
      'How a 36-year-old mother from Assi Ghat broke social barriers to become Varanasi’s most beloved electric auto captain, financing her daughter’s higher education at BHU.',
    category: 'Empowerment Stories',
    readTime: '4 min read',
    date: 'February 2026',
    author: 'Radhika Sen',
    authorRole: 'Women Empowerment Chronicler',
    highlightQuote:
      'People in my neighborhood whispered when I first bought the green auto. Today, when they see college girls and elderly pilgrims chanting Har Har Mahadev in my cab, my family stands tall.',
    content: [
      'Shanti Devi grew up watching the rhythmic clatter of Banarasi silk handlooms in Madanpura. When her family faced economic headwinds during the pandemic, she knew relying on traditional home-based work would not be enough to fund her eldest daughter’s dream of studying Biotechnology at BHU.',
      'When Sakhi Ride launched in Varanasi, Shanti enrolled in the driver training and self-defense camp organized with the Varanasi Police Commissionerate. Despite initial skepticism from neighbors, she mastered electric vehicle driving within three weeks.',
      'Today, Shanti earns over ₹38,000 every month. She has completed over 3,800 safe rides with a flawless 4.99-star rating. Female university students, doctors at IMS-BHU, and foreign pilgrims specifically request her for sunrise tours of the ghats.',
      'Her story represents hundreds of women across Varanasi who are reclaiming financial autonomy while making public spaces safe for their sisters.',
    ],
  },
  {
    id: 'blog-03',
    title: 'BHU Female Scholars & Late-Night Lab Commutes: Zero Anxiety with Sakhi Night Suraksha',
    slug: 'bhu-female-scholars-night-safety-varanasi',
    excerpt:
      'How the collaboration between Banaras Hindu University student networks and Sakhi Ride is ensuring safe commutes between hostels, scientific labs, and Lanka.',
    category: 'Campus Mobility',
    readTime: '4 min read',
    date: 'January 2026',
    author: 'Sneha Pandey',
    authorRole: 'Research Scholar, BHU',
    highlightQuote:
      'As researchers, our experiments don’t finish at 6 PM. Having reliable, dignified female transit outside Lanka Gate has unlocked true academic freedom for us.',
    content: [
      'Banaras Hindu University (BHU) is home to thousands of brilliant women researchers, medical residents at Sir Sunderlal Hospital, and undergraduate students. Historically, female students working late hours in science labs faced significant mobility hurdles traveling back to private accommodation in Lanka, Ravindrapuri, or Durgakund.',
      'Sakhi Ride’s dedicated Night Suraksha fleet operates around Lanka Gate and the IMS campus from 8 PM to 6 AM with zero surge pricing.',
      'Drivers maintain continuous live GPS feeds integrated with the campus security chowki and local UP 112 patrols. Furthermore, the drivers wait until the student securely enters her hostel gate or apartment lobby before closing the trip.',
      'This initiative has witnessed a 94% approval rating among BHU female faculty and scholars, demonstrating that safety infrastructure directly supports women’s educational advancement.',
    ],
  },
  {
    id: 'blog-04',
    title: 'The Kashi Pink Police Booth Revolution: Working Hand-in-Hand with Sakhi Ride',
    slug: 'kashi-pink-booths-women-police-collaboration',
    excerpt:
      'An in-depth look at how Varanasi Commissionerate’s Pink Booths at Assi, Dashashwamedh, and Cantt coordinate with Sakhi’s live digital SOS telemetry.',
    category: 'Safety Architecture',
    readTime: '3 min read',
    date: 'December 2025',
    author: 'Editorial Desk',
    authorRole: 'Sakhi Safety Research Unit',
    highlightQuote:
      'When technology meets ground-level female police officers, the entire city transforms into an inviolable sanctuary.',
    content: [
      'The Varanasi Police Commissionerate established specialized all-women Pink Police Booths at key transit junctions: Assi Ghat, Dashashwamedh, Varanasi Cantt Railway Station, and BHU Lanka.',
      'Sakhi Ride’s digital application features direct software integration with these booths. If a passenger or driver initiates the in-ride emergency signal, the system transmits real-time telemetry to the nearest Pink Booth and the closest UP 112 response vehicle simultaneously.',
      'The booth officers are equipped with live monitors displaying active Sakhi trips across temple corridors. This dual layer of mobile civilian drivers and institutional female law enforcement creates a reliable deterrent against harassment.',
    ],
  },
];

export const VARANASI_PILGRIMAGE_PACKAGES = [
  {
    title: 'Subah-e-Banaras Ghat Yatra',
    timing: '5:00 AM – 8:30 AM',
    route: 'Assi Ghat Sunrise & Classical Music · Ganga Aarti · Kashi Vishwanath Temple (Gate 4) · Dashashwamedh',
    fare: '₹349 (E-Auto) / ₹599 (City EV)',
    includes: 'Waiting time included, flower offering kit, female driver local guidance',
    tag: 'Most Popular',
  },
  {
    title: 'Babatpur Airport to Holy Ghats Express',
    timing: '24/7 on flight schedule',
    route: 'Lal Bahadur Shastri Airport -> Cantt -> Sigra -> Godowlia / Assi Ghat Hotels',
    fare: '₹680 (Comfort Sedan EV)',
    includes: 'Flight delay tracking, meet & greet with name placard, luggage assistance',
    tag: 'Zero Surge Fixed Fare',
  },
  {
    title: 'Sarnath Peace & Heritage Day Trail',
    timing: '4 Hour Excursion',
    route: 'Varanasi City -> Dhamek Stupa -> Archaeological Museum -> Mulagandha Kuti Vihar -> City Drop',
    fare: '₹750 (City EV) / ₹950 (Comfort Sedan)',
    includes: 'Round-trip transit, AC comfort throughout, designated pickup stops',
    tag: 'Cultural Heritage',
  },
];
