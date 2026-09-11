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
    name: "Makita",
    tagline: "Professional Cordless Tools",
    description: "Reliable cordless tools built for demanding industrial, construction and maintenance applications.",
    slug: "makita",
    logo: "https://www.thanviagencies.in/wp-content/uploads/2021/10/b7.png",
    specialty: "Power Tools",
  },
  {
    name: "Chicago Pneumatic",
    tagline: "Powerful Pneumatic Performance",
    description: "Industrial pneumatic tools designed for productive, dependable and comfortable everyday use.",
    slug: "chicago-pneumatic",
    logo: "https://www.thanviagencies.in/wp-content/uploads/2021/10/b2.png",
    specialty: "Pneumatic Tools",
  },
  {
    name: "Endo Kogyo",
    tagline: "Spring Balance Solutions",
    description: "Industrial spring balancers and material-handling solutions for safer, more efficient workstations.",
    slug: "endo-kogyo",
    logo: "https://www.thanviagencies.in/wp-content/uploads/2021/10/b8.png",
    specialty: "Spring Balancers",
  },
  {
    name: "Tohnichi",
    tagline: "Precision Torque Control",
    description: "Trusted torque wrenches and tightening instruments for accurate, repeatable assembly work.",
    slug: "tohnichi",
    logo: "https://www.thanviagencies.in/wp-content/uploads/2021/10/b9.png",
    specialty: "Torque Wrenches",
  },
  {
    name: "Bosch",
    tagline: "Invented for Life",
    description: "Professional construction tools and power tool systems built for demanding industrial and jobsite applications.",
    slug: "bosch",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Crect fill='%23003DA5' width='200' height='60' rx='4'/%3E%3Ctext x='100' y='38' text-anchor='middle' fill='white' font-family='Arial,sans-serif' font-size='28' font-weight='bold'%3EBOSCH%3C/text%3E%3C/svg%3E",
    specialty: "Construction Tools",
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
