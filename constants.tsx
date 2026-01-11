
import { SiloCategory, BlogPost, ProductPick, ExpertProfile, CarBrand } from './types';

export const AUTHORITY_BRANDS = [
  { name: 'MotorTrend', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Motor_Trend_logo.svg', description: 'Industry benchmark for automotive testing.' },
  { name: 'CarAndDriver', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Car_and_Driver_logo.svg', description: 'Technical excellence in vehicle evaluation.' },
  { name: 'AutoBlog', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Autoblog_logo.svg', description: 'Real-time automotive news and reviews.' },
  { name: 'RoadAndTrack', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Road_%26_Track_logo.svg', description: 'The soul of performance driving.' }
];

export const CATEGORY_EXPERTS: Record<string, ExpertProfile> = {
  'car-care': {
    name: 'Marcus Thorne', role: 'Master Concours Consultant', bio: 'Expert in surface chemistry and detailing protocols.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400', specialties: ['Nanotechnology', 'Paint Correction']
  },
  'tools-equipment': {
    name: 'Elena Vance', role: 'Systems Analyst', bio: 'Industrial engineer specializing in torque and diagnostic logic.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400', specialties: ['Calibration', 'Metallurgy']
  },
  'wheels-tires': {
    name: 'Julian Rossi', role: 'Tire Dynamics Lead', bio: 'Former Pirelli engineer specializing in compound performance.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400', specialties: ['Load Indexing', 'Thermal Degradation']
  },
  'ev': {
    name: 'Sarah Chen', role: 'Powertrain Engineer', bio: 'Specialist in lithium-ion thermal management and high-voltage systems.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400', specialties: ['Battery Chemistry', 'Charging Protocols']
  }
};

export const USA_CAR_BRANDS: CarBrand[] = [
  { 
    id: 'ford', name: 'Ford', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg', origin: 'Dearborn, MI', founded: '1903', focus: 'Mainstream, Trucks, EVs',
    website: 'https://www.ford.com', partsUrl: 'https://parts.ford.com', history: 'Henry Ford revolutionized manufacturing with the assembly line.',
    reliabilityScore: 8.2, currentModels: ['F-150', 'Mustang', 'Explorer', 'Mach-E', 'Bronco', 'Ranger', 'Maverick', 'Escape', 'Expedition'],
    warrantyInfo: '3yr/36k basic, 5yr/60k powertrain.', partsNote: 'Motorcraft OEM parts are widely available through massive dealer network.'
  },
  { 
    id: 'chevrolet', name: 'Chevrolet', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Chevrolet-logo.png', origin: 'Detroit, MI', founded: '1911', focus: 'Mainstream, Performance, Trucks',
    website: 'https://www.chevrolet.com', partsUrl: 'https://www.gmparts.com/chevrolet', history: 'Founded by Louis Chevrolet and William C. Durant.',
    reliabilityScore: 8.0, currentModels: ['Silverado', 'Corvette', 'Tahoe', 'Equinox EV', 'Blazer EV', 'Trax', 'Colorado', 'Malibu'],
    warrantyInfo: '3yr/36k bumper-to-bumper.', partsNote: 'ACDelco is the primary parts supplier with excellent availability.'
  },
  { 
    id: 'toyota', name: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Toyota.svg', origin: 'Aichi, Japan', founded: '1937', focus: 'Reliability, Hybrids',
    website: 'https://www.toyota.com', partsUrl: 'https://parts.toyota.com', history: 'The pioneer of Lean Manufacturing and the Prius hybrid.',
    reliabilityScore: 9.4, currentModels: ['Camry', 'RAV4', 'Tacoma', 'Tundra', 'Prius', 'Highlander', 'Corolla', 'Grand Highlander', '4Runner', 'Land Cruiser'],
    warrantyInfo: '3yr/36k basic, 10yr hybrid battery.', partsNote: 'OEM parts retain value; massive aftermarket support for off-road models.'
  },
  { 
    id: 'honda', name: 'Honda', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg', origin: 'Tokyo, Japan', founded: '1948', focus: 'Engineering, Efficiency',
    website: 'https://www.honda.com', partsUrl: 'https://www.hondapartsonline.net', history: 'Soichiro Honda started with motorcycles before dominating small cars.',
    reliabilityScore: 9.1, currentModels: ['Civic', 'Accord', 'CR-V', 'Pilot', 'Odyssey', 'Ridgeline', 'Passport', 'Prologue'],
    warrantyInfo: '3yr/36k basic.', partsNote: 'Standardized parts across generations make maintenance straightforward.'
  },
  { 
    id: 'tesla', name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg', origin: 'Austin, TX', founded: '2003', focus: 'EV, Autonomy',
    website: 'https://www.tesla.com', partsUrl: 'https://shop.tesla.com', history: 'Elon Musk-led company that made EVs globally desirable.',
    reliabilityScore: 7.5, currentModels: ['Model S', 'Model 3', 'Model X', 'Model Y', 'Cybertruck'],
    warrantyInfo: '4yr/50k basic, 8yr battery.', partsNote: 'Proprietary parts; repairs often restricted to Tesla Service Centers.'
  },
  { 
    id: 'bmw', name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg', origin: 'Munich, Germany', founded: '1916', focus: 'Luxury Performance',
    website: 'https://www.bmwusa.com', partsUrl: 'https://www.shopbmwusa.com', history: 'Bayerische Motoren Werke focused on driver-centric "Ultimate Driving Machines".',
    reliabilityScore: 8.5, currentModels: ['3 Series', '5 Series', '7 Series', 'X3', 'X5', 'X7', 'M3', 'M5', 'i4', 'iX', 'Z4'],
    warrantyInfo: '4yr/50k basic, 3yr free maintenance.', partsNote: 'Requires specific synthetic oils and specialized diagnostic tools.'
  },
  { 
    id: 'mercedes', name: 'Mercedes-Benz', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Benz_Logo_2010.svg', origin: 'Stuttgart, Germany', founded: '1926', focus: 'Luxury, Tech',
    website: 'https://www.mbusa.com', partsUrl: 'https://www.mbusa.com/parts', history: 'Karl Benz built the first internal combustion car in 1886.',
    reliabilityScore: 8.3, currentModels: ['C-Class', 'E-Class', 'S-Class', 'GLE', 'GLS', 'G-Wagon', 'EQS', 'EQE', 'SL', 'GT'],
    warrantyInfo: '4yr/50k basic.', partsNote: 'Complex electronics; OEM sensors recommended over aftermarket substitutes.'
  }
];

export const SILO_CATEGORIES: SiloCategory[] = [
  { 
    id: 'car-care', title: 'Car Care', emoji: '🧼', color: 'cyan', 
    heroImage: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1600', 
    items: ['Detailing Soap', 'Ceramic Wax', 'Wheel Cleaner', 'Interior Cleaners'], 
    ctaText: 'Shop Products', link: '#car-care' 
  },
  { 
    id: 'tools-equipment', title: 'Tools & Equipment', emoji: '🛠️', color: 'indigo', 
    heroImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1600', 
    items: ['OBD2 Scanners', 'Jump Starters', 'Impact Wrenches', 'Socket Sets & Wrenches'], 
    ctaText: 'Explore Tools', link: '#tools' 
  },
  { 
    id: 'wheels-tires', title: 'Wheels & Tires', emoji: '🛞', color: 'orange', 
    heroImage: 'https://images.unsplash.com/photo-1549438313-059902636a0d?auto=format&fit=crop&q=80&w=1600', 
    items: ['Performance Tires', 'Snow & Winter Tires', 'Off-Road Wheels', 'Tire Repair Tools & Patches'], 
    ctaText: 'View Guide', link: '#wheels' 
  },
  { 
    id: 'ev', title: 'EV (Electric Vehicles)', emoji: '⚡', color: 'emerald', 
    heroImage: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1600', 
    items: ['Level 1 & 2 EV Chargers', 'Home Battery Systems', 'Portable Charging Cables', 'EV Adapters'], 
    ctaText: 'Go Electric', link: '#ev' 
  },
  { 
    id: 'insurance', title: 'Insurance & Finance', emoji: '📑', color: 'blue', 
    heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1600', 
    items: ['Auto Insurance Quotes', 'Loan Refinancing', 'Warranty Extension Plans', 'GAP Insurance'], 
    ctaText: 'Save Money', link: '#insurance' 
  },
  { 
    id: 'rental', title: 'Rental & Shared', emoji: '🚗', color: 'violet', 
    heroImage: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=1600', 
    items: ['Luxury Car Rentals', 'Monthly Subscriptions', 'P2P Car Sharing', 'Fleet Management'], 
    ctaText: 'Book Now', link: '#rental' 
  },
  { 
    id: 'safety', title: 'Safety & Security', emoji: '🛡️', color: 'rose', 
    heroImage: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1600', 
    items: ['Dash Cams', 'Anti-Theft Systems', 'Car Seats', 'Emergency Roadside Kits'], 
    ctaText: 'Stay Safe', link: '#safety' 
  },
  { 
    id: 'maintenance', title: 'Maintenance & Repair', emoji: '🔧', color: 'slate', 
    heroImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1600', 
    items: ['Oil Filters', 'Brake Pads', 'Spark Plugs', 'Windshield Wipers'], 
    ctaText: 'DIY Fixes', link: '#maintenance' 
  },
  { 
    id: 'accessories', title: 'Accessories & Tech', emoji: '🕹️', color: 'amber', 
    heroImage: 'https://images.unsplash.com/photo-1511994298241-608e28f14f66?auto=format&fit=crop&q=80&w=1600', 
    items: ['Phone Mounts', 'Bluetooth Adapters', 'Organizers', 'Floor Mats'], 
    ctaText: 'Upgrade Ride', link: '#accessories' 
  }
];

export const BLOG_POSTS: BlogPost[] = [
  { title: "Synthetic Sheer Stability", image: "https://images.unsplash.com/photo-1635834839843-267950f14d9b?auto=format&fit=crop&q=80&w=800", date: "May 2025", category: "Maintenance & Repair", subcategory: "Oil Filters", excerpt: "Molecular analysis of high-performance oil viscosities and filtration efficiency." },
  { title: "Microfiber Mastery: Detail Science", image: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=800", date: "April 2025", category: "Car Care", subcategory: "Detailing Soap", excerpt: "How to maintain a concours-level finish without inducing swirl marks using advanced chemistry." },
  { title: "OBD2 Protocols Explored", image: "https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?auto=format&fit=crop&q=80&w=800", date: "March 2025", category: "Tools & Equipment", subcategory: "OBD2 Scanners", excerpt: "Decrypting CAN bus signals for high-level vehicle diagnostics and tuning." },
  { title: "EV Charging Efficiency Benchmarks", image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800", date: "Feb 2025", category: "EV (Electric Vehicles)", subcategory: "Level 1 & 2 EV Chargers", excerpt: "Comparing thermal loss across the top home charging units." },
  { title: "The Physics of Winter Grip", image: "https://images.unsplash.com/photo-1549438313-059902636a0d?auto=format&fit=crop&q=80&w=800", date: "Jan 2025", category: "Wheels & Tires", subcategory: "Snow & Winter Tires", excerpt: "Why rubber compound temperature thresholds matter more than tread depth." }
];

export const TOP_PICKS: ProductPick[] = [
  { title: "Chemical Guys Arsenal", image: "https://m.media-amazon.com/images/I/91M-v-DkFBL._AC_SL1500_.jpg", rating: 4.8, price: "$159.99", category: "Detailing Soap" },
  { title: "Autel MaxiCOM MK808Z", image: "https://m.media-amazon.com/images/I/71Yv8h+R6QL._AC_SL1500_.jpg", rating: 4.9, price: "$389.00", category: "OBD2 Scanners" },
  { title: "JuiceBox 40 Smart Charger", image: "https://m.media-amazon.com/images/I/71C7N-MscyL._AC_SL1500_.jpg", rating: 4.7, price: "$599.00", category: "Level 1 & 2 EV Chargers" }
];

export const TOOLS_LIST = [
  { id: 'vin-decoder', name: "VIN Decoder", desc: "Technical chassis history", icon: "📌", category: "Calculators" },
  { id: 'fuel-efficiency', name: "Fuel Efficiency", desc: "Real-world MPG tracker", icon: "⛽", category: "Calculators" },
  { id: 'loan-estimator', name: "Loan Estimator", desc: "Premium finance logic", icon: "💰", category: "Calculators" }
];
