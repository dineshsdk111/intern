export interface Brand {
  name: string;
  tagline: string;
  description: string;
  slug: string;
  logo: string;
  specialty: string;
}

export const brands: Brand[] = [
  {
    name: "APEX Tools",
    tagline: "Built to Last",
    description: "Our flagship brand of industrial-grade hand tools and precision instruments.",
    slug: "apex-tools",
    logo: "https://images.unsplash.com/photo-1530088528371-105e6f3b2336?w=200&q=80",
    specialty: "Hand Tools & Wrenches",
  },
  {
    name: "ProTorque",
    tagline: "Precision in Every Turn",
    description: "Specialist torque tools and calibrated tightening solutions.",
    slug: "protorque",
    logo: "https://images.unsplash.com/photo-1741827866663-6ad8ec20480c?w=200&q=80",
    specialty: "Torque Instruments",
  },
  {
    name: "HydroMax",
    tagline: "Hydraulic Excellence",
    description: "Complete hydraulic equipment range for demanding industrial applications.",
    slug: "hydromax",
    logo: "https://images.unsplash.com/photo-1610742805112-20134ceb40e8?w=200&q=80",
    specialty: "Hydraulic Systems",
  },
  {
    name: "AirForce Industrial",
    tagline: "Powered by Air",
    description: "Professional pneumatic tools and compressed air systems.",
    slug: "airforce",
    logo: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=200&q=80",
    specialty: "Pneumatic Equipment",
  },
  {
    name: "MechaPro",
    tagline: "Engineering Performance",
    description: "Heavy-duty mechanical tools and machinery components.",
    slug: "mechapro",
    logo: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=200&q=80",
    specialty: "Mechanical Tools",
  },
  {
    name: "PrecisionTech",
    tagline: "Measure with Confidence",
    description: "Advanced measuring instruments and calibration equipment.",
    slug: "precisiontech",
    logo: "https://images.unsplash.com/photo-1745571479548-7e8c708c4eb0?w=200&q=80",
    specialty: "Measuring Instruments",
  },
  {
    name: "PowerCore",
    tagline: "Maximum Power Output",
    description: "Cordless and electric power tools for professional applications.",
    slug: "powercore",
    logo: "https://images.unsplash.com/photo-1592054286113-649ba108e968?w=200&q=80",
    specialty: "Power Tools",
  },
  {
    name: "InduMeasure",
    tagline: "Industrial Accuracy",
    description: "Quality inspection and testing instruments for industrial use.",
    slug: "indumeasure",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&q=80",
    specialty: "Quality Testing",
  },
];

export const industries = [
  {
    name: "Automotive",
    description: "Production and vehicle maintenance solutions for automotive workshops and assembly lines.",
    slug: "automotive",
  },
  {
    name: "Manufacturing",
    description: "Tools and equipment for manufacturing facilities, production lines and factory operations.",
    slug: "manufacturing",
  },
  {
    name: "Construction",
    description: "Heavy-duty tools and equipment for construction sites and infrastructure projects.",
    slug: "construction",
  },
  {
    name: "Oil & Gas",
    description: "Industrial equipment for demanding environments in exploration, drilling and refining.",
    slug: "oil-gas",
  },
  {
    name: "Engineering",
    description: "Precision tools and engineering solutions for design, fabrication and assembly.",
    slug: "engineering",
  },
  {
    name: "Maintenance",
    description: "Reliable equipment for plant maintenance, facilities management and service teams.",
    slug: "maintenance",
  },
];
