export interface BrandProduct {
  slug: string;
  name: string;
  model: string;
  category: string;
  subcategory: string;
  description: string;
  image?: string;
  features: string[];
  specifications?: Record<string, string>;
}

export interface BrandProductCategory {
  slug: string;
  name: string;
  description: string;
  tools: BrandProduct[];
}

export const chicagoPneumaticCategories: BrandProductCategory[] = [
  {
    slug: "impact-wrenches",
    name: "Impact Wrenches",
    description: "High-performance pneumatic and cordless impact wrenches for automotive, industrial and heavy-duty applications.",
    tools: [
      {
        slug: "cp7748-2",
        name: "1/2\" Heavy-Duty Impact Wrench",
        model: "CP7748-2",
        category: "Pneumatic Tools",
        subcategory: "Impact Wrenches",
        description: "1/2\" drive heavy-duty composite impact wrench with extreme torque and durability for demanding applications.",
        image: "/images/chicago-pneumatic/cp7748.png",
        features: [
          "1/2\" square drive",
          "Composite housing for durability",
          "Twin hammer mechanism",
          "Forward/reverse toggle",
          "Ergonomic rubber grip",
          "Built-in air regulator",
        ],
        specifications: {
          "Drive Size": "1/2 inch",
          "Max Torque": "770 Nm",
          "Free Speed": "8,000 RPM",
          "Air Consumption": "255 L/min",
          "Weight": "1.9 kg",
        },
      },
      {
        slug: "cp797-6",
        name: "1\" Pneumatic Impact Wrench",
        model: "CP797-6",
        category: "Pneumatic Tools",
        subcategory: "Impact Wrenches",
        description: "1\" drive heavy-duty impact wrench designed for truck tire service and heavy equipment maintenance.",
        image: "https://cdn11.bigcommerce.com/s-13fb4/images/stencil/500x659/products/2541/273199/T019139__48864.1764142975.jpg?c=2",
        features: [
          "1\" square drive",
          "Rocking dog clutch",
          "High torque output",
          "Steel housing for durability",
          "Side handle included",
          "Twin hammer mechanism",
        ],
        specifications: {
          "Drive Size": "1 inch",
          "Max Torque": "2,700 Nm",
          "Free Speed": "4,500 RPM",
          "Air Consumption": "850 L/min",
          "Weight": "8.8 kg",
        },
      },
      {
        slug: "cp86-series",
        name: "Cordless Torque Wrench",
        model: "CP86 Series",
        category: "Cordless Tools",
        subcategory: "Battery Torque Wrenches",
        description: "Battery-powered torque wrenches for heavy vehicle maintenance with digital torque control.",
        image: "https://cdn11.bigcommerce.com/s-13fb4/images/stencil/500x659/products/150951/273074/6151570090__11891.1763985648.jpg?c=2",
        features: [
          "Battery operated cordless design",
          "Digital torque display",
          "Programmable torque settings",
          "Bluetooth connectivity",
          "Data logging capability",
          "Rechargeable battery",
        ],
        specifications: {
          "Torque Range": "50-1,000 Nm",
          "Accuracy": "±3%",
          "Battery": "18V Li-ion",
          "Weight": "3.5 kg",
        },
      },
    ],
  },
  {
    slug: "grinders",
    name: "Grinders",
    description: "Pneumatic and cordless grinders for material removal, surface preparation and finishing applications.",
    tools: [
      {
        slug: "cp3650-series",
        name: "Industrial Angle Grinder",
        model: "CP3650 Series",
        category: "Pneumatic Tools",
        subcategory: "Grinders",
        description: "Robust industrial angle grinder for heavy-duty grinding, cutting and surface preparation.",
        image: "https://cdn11.bigcommerce.com/s-13fb4/images/stencil/500x659/products/68850/272671/CP3450-12AB5_TOOL__04290.1762849341.jpg?c=2",
        features: [
          "Composite housing",
          "Safety throttle lever",
          "Spindle lock",
          "Side handle included",
          "Anti-vibration design",
          "Multiple disc sizes available",
        ],
        specifications: {
          "Disc Diameter": "100-180 mm",
          "Free Speed": "12,000 RPM",
          "Motor Power": "1.4 HP",
          "Air Consumption": "570 L/min",
          "Weight": "2.1 kg",
        },
      },
      {
        slug: "cp872",
        name: "Air Die Grinder",
        model: "CP872",
        category: "Pneumatic Tools",
        subcategory: "Die Grinders",
        description: "Compact air die grinder for precision grinding, deburring and finishing work.",
        image: "https://cdn11.bigcommerce.com/s-13fb4/images/stencil/500x659/products/133361/211722/211722__09016.1709418739.jpg?c=2",
        features: [
          "1/4\" collet capacity",
          "Compact design",
          "Variable speed control",
          "Ergonomic grip",
          "Rear exhaust",
          "Lightweight construction",
        ],
        specifications: {
          "Collet Size": "1/4 inch (6mm)",
          "Free Speed": "22,500 RPM",
          "Motor Power": "0.5 HP",
          "Air Consumption": "280 L/min",
          "Weight": "0.7 kg",
        },
      },
    ],
  },
  {
    slug: "drills",
    name: "Drills",
    description: "Pneumatic drills for drilling operations in industrial and manufacturing environments.",
    tools: [
      {
        slug: "cp1117-series",
        name: "Industrial Pistol Drill",
        model: "CP1117 Series",
        category: "Pneumatic Tools",
        subcategory: "Drills",
        description: "Heavy-duty pistol grip drill for industrial drilling applications in metal and other materials.",
        image: "https://cdn11.bigcommerce.com/s-13fb4/images/stencil/500x659/products/68874/236459/cq5dam.web.950.950__15482.1763452261.jpg?c=2",
        features: [
          "1/2\" chuck capacity",
          "Variable speed trigger",
          "Reversible operation",
          "Lock-on button",
          "Ergonomic pistol grip",
          "All-metal gear construction",
        ],
        specifications: {
          "Chuck Size": "1/2 inch (13mm)",
          "Free Speed": "800 RPM",
          "Drilling Capacity": "13mm steel",
          "Air Consumption": "480 L/min",
          "Weight": "1.8 kg",
        },
      },
    ],
  },
  {
    slug: "sanders",
    name: "Sanders & Polishers",
    description: "Pneumatic sanders and polishers for surface finishing, paint preparation and material removal.",
    tools: [
      {
        slug: "cp3850-series",
        name: "Random Orbital Sander",
        model: "CP3850 Series",
        category: "Pneumatic Tools",
        subcategory: "Sanders",
        description: "Professional random orbital sander for automotive body work and surface finishing.",
        image: "https://cdn11.bigcommerce.com/s-13fb4/images/stencil/500x659/products/132832/236795/cq5dam.web.950.950__46739.1636641879.jpg?c=2",
        features: [
          "5-inch pad diameter",
          "Variable speed control",
          "Built-in dust extraction",
          "Low vibration design",
          "Ergonomic palm grip",
          "Paddle trigger",
        ],
        specifications: {
          "Pad Diameter": "5 inch (125mm)",
          "Orbit Diameter": "5mm",
          "Free Speed": "12,000 RPM",
          "Air Consumption": "170 L/min",
          "Weight": "0.9 kg",
        },
      },
    ],
  },
  {
    slug: "percussive",
    name: "Percussive Tools",
    description: "Chipping hammers, needle scalers and impact tools for demolition and surface preparation.",
    tools: [
      {
        slug: "cp9955",
        name: "Chipping Hammer",
        model: "CP9955",
        category: "Pneumatic Tools",
        subcategory: "Percussive Tools",
        description: "Heavy-duty chipping hammer for weld removal, surface preparation and light demolition.",
        image: "https://cdn11.bigcommerce.com/s-13fb4/images/stencil/500x659/products/165219/271954/CP_4123_b__29877.1761373533.jpg?c=2",
        features: [
          "Bulb-type handle",
          "Built-in blow-out trigger",
          "Durable mechanism",
          "Shock-absorbing handle",
          "Carbide chisel included",
          "Compact design",
        ],
        specifications: {
          "Chisel Shank": "10 x 30mm",
          "Blow Energy": "3.5 J",
          "Blow Rate": "2,200 BPM",
          "Air Consumption": "340 L/min",
          "Weight": "1.6 kg",
        },
      },
    ],
  },
];

export const chicagoPneumaticBrandInfo = {
  name: "Chicago Pneumatic",
  tagline: "Powerful Pneumatic Performance",
  description:
    "Chicago Pneumatic has been a global leader in industrial tools since 1901, offering over 500 products including impact wrenches, grinders, drills, sanders and specialty tools for automotive, industrial and construction applications.",
  founded: "1901",
  headquarters: "Buffalo Grove, Illinois, USA",
  website: "https://tools.cp.com",
  logo: "https://www.thanviagencies.in/wp-content/uploads/2021/10/b2.png",
  specialties: ["Pneumatic Tools", "Impact Wrenches", "Industrial Grinders", "Cordless Tools"],
  stats: [
    { label: "Years Established", value: "125+" },
    { label: "Product Range", value: "500+" },
    { label: "Global Presence", value: "80+" },
    { label: "Industries Served", value: "10+" },
  ],
};

export function getChicagoPneumaticCategoryBySlug(slug: string): BrandProductCategory | undefined {
  return chicagoPneumaticCategories.find((c) => c.slug === slug);
}
