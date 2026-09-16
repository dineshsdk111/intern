import { BrandProduct, BrandProductCategory } from "./chicago-pneumatic";

export const boschCategories: BrandProductCategory[] = [
  {
    slug: "cordless-power-tools",
    name: "Cordless Power Tools",
    description:
      "Freedom to work, anywhere. Bosch 18V cordless system with more power, more runtime and more possibilities.",
    tools: [
      {
        slug: "gsb-18v-55",
        name: "18V Cordless Drill Driver",
        model: "GSB 18V-55",
        category: "Cordless Power Tools",
        subcategory: "Drill Drivers",
        description:
          "Compact 18V cordless drill driver with brushless motor for drilling and driving in wood, metal and masonry.",
        image: "/images/bosch/bosch-drill-driver.jpg",
        features: [
          "18V brushless motor",
          "20+1 torque settings",
          "Two-speed gearbox",
          "LED work light",
          "Bosch Flexible Power System",
          "Quick-change 13mm chuck",
        ],
        specifications: {
          "Max Torque": "55 Nm",
          "No-Load Speed": "0-600 / 0-1,900 RPM",
          "Chuck Capacity": "13mm",
          "Battery": "18V Li-ion",
          "Weight": "1.7 kg",
        },
      },
      {
        slug: "gdr-18v-50",
        name: "18V Cordless Impact Driver",
        model: "GDR 18V-50",
        category: "Cordless Power Tools",
        subcategory: "Impact Drivers",
        description:
          "Compact and powerful 18V impact driver for fast driving of screws and bolts in construction applications.",
        image: "/images/bosch/bosch-impact.jpg",
        features: [
          "18V brushless motor",
          "180 Nm max torque",
          "Variable speed trigger",
          "Quick-release hex chuck",
          "Compact design",
          "Bosch Flexible Power System",
        ],
        specifications: {
          "Max Torque": "180 Nm",
          "No-Load Speed": "0-3,400 RPM",
          "Impact Rate": "0-4,200 IPM",
          "Drive Size": "1/4 inch hex",
          "Weight": "1.5 kg",
        },
      },
      {
        slug: "ghs-18v-50",
        name: "18V Cordless Rotary Hammer",
        model: "GHS 18V-50",
        category: "Cordless Power Tools",
        subcategory: "Rotary Hammers",
        description:
          "Cordless rotary hammer with SDS plus system for drilling in concrete and masonry without the hassle of cords.",
        image: "/images/bosch/ghs-18v-50.png",
        features: [
          "SDS plus tool-free chuck",
          "3 modes: rotary hammer, rotation only, chisel only",
          "Anti-vibration handle",
          "Integrated depth gauge",
          "Bosch Brushless Motor",
          "KickBack Control",
        ],
        specifications: {
          "Max Drilling in Concrete": "22mm",
          "Impact Energy": "1.7 J",
          "No-Load Speed": "0-1,300 RPM",
          "Impact Rate": "0-5,600 BPM",
          "Weight": "2.5 kg",
        },
      },
      {
        slug: "gws-18v-50",
        name: "18V Cordless Angle Grinder",
        model: "GWS 18V-50",
        category: "Cordless Power Tools",
        subcategory: "Angle Grinders",
        description:
          "Cordless angle grinder with paddle switch for cutting, grinding and surface preparation on the jobsite.",
        image: "/images/bosch/gws-18v-50.png",
        features: [
          "115mm disc diameter",
          "Paddle switch design",
          "Restart protection",
          "Disc brake function",
          "Bosch Brushless Motor",
          "Anti-rotation protective guard",
        ],
        specifications: {
          "Disc Diameter": "115mm",
          "No-Load Speed": "9,000 RPM",
          "Spindle Thread": "M14",
          "Weight": "2.0 kg",
        },
      },
      {
        slug: "gks-18v-50",
        name: "18V Cordless Circular Saw",
        model: "GKS 18V-50",
        category: "Cordless Power Tools",
        subcategory: "Circular Saws",
        description:
          "Cordless circular saw for fast, accurate cuts in wood and sheet materials with corded-like performance.",
        image: "/images/bosch/gks-18v-50.png",
        features: [
          "165mm blade diameter",
          "56mm cutting depth at 90°",
          "0-56° bevel capacity",
          "Spindle lock for blade changes",
          "Integrated dust blower",
          "Bosch Flexible Power System",
        ],
        specifications: {
          "Blade Diameter": "165mm",
          "No-Load Speed": "5,000 RPM",
          "Max Cutting Depth (90°)": "56mm",
          "Max Cutting Depth (45°)": "40mm",
          "Weight": "3.0 kg",
        },
      },
      {
        slug: "combo-kit-18v",
        name: "18V Combo Kit",
        model: "GPK 18V-2",
        category: "Cordless Power Tools",
        subcategory: "Combo Kits",
        description:
          "2-piece 18V cordless combo kit with drill driver and impact driver for comprehensive drilling and fastening.",
        image: "/images/bosch/gpk-18v-2.png",
        features: [
          "Includes drill driver and impact driver",
          "2x 18V 2.0Ah batteries",
          "Fast charger included",
          "Bosch Flexible Power System",
          "Carrying case included",
          "Brushless motors",
        ],
        specifications: {
          "Battery": "18V 2.0Ah Li-ion (x2)",
          "Charger": "18V Fast Charger",
          "Drill Max Torque": "55 Nm",
          "Impact Max Torque": "180 Nm",
        },
      },
    ],
  },
  {
    slug: "rotary-demolition-tools",
    name: "Rotary & Demolition Tools",
    description:
      "Power, precision and performance. Professional rotary hammers and demolition tools for maximum productivity.",
    tools: [
      {
        slug: "gbh-2-28-f",
        name: "SDS Plus Rotary Hammer",
        model: "GBH 2-28 F",
        category: "Rotary & Demolition Tools",
        subcategory: "Rotary Hammers",
        description:
          "Professional SDS plus rotary hammer with 3-mode operation for drilling, chipping and rotary hammering in concrete.",
        image: "/images/bosch/gbh-2-28-f.png",
        features: [
          "SDS plus chuck system",
          "2.7 J impact energy",
          "3-mode operation",
          "Vario-Lock chisel positioning",
          "Anti-vibration handle",
          "Depth gauge included",
        ],
        specifications: {
          "Max Drilling in Concrete": "28mm",
          "Impact Energy": "2.7 J",
          "No-Load Speed": "0-900 RPM",
          "Impact Rate": "0-4,000 BPM",
          "Weight": "2.8 kg",
        },
      },
      {
        slug: "gbh-5-40-dce",
        name: "SDS Max Demolition Hammer",
        model: "GBH 5-40 DCE",
        category: "Rotary & Demolition Tools",
        subcategory: "Demolition Hammers",
        description:
          "Heavy-duty SDS max demolition hammer for breaking concrete, masonry and heavy demolition work.",
        image: "/images/bosch/gbh-5-40-dce.png",
        features: [
          "SDS max tool system",
          "12.5 J impact energy",
          "Constant Speed electronics",
          "Vibration Control handle",
          "Chisel orientation system",
          "Service indicator lights",
        ],
        specifications: {
          "Impact Energy": "12.5 J",
          "No-Load Speed": "0-780 BPM",
          "Weight": "6.4 kg",
        },
      },
      {
        slug: "gbh-2-26",
        name: "SDS Plus Chipping Hammer",
        model: "GBH 2-26",
        category: "Rotary & Demolition Tools",
        subcategory: "Chipping Hammers",
        description:
          "Versatile SDS plus rotary hammer for drilling and light chipping in concrete, brick and stone.",
        image: "/images/bosch/gbh-2-26.png",
        features: [
          "SDS plus chuck",
          "2.0 J impact energy",
          "Rotation-only and hammer modes",
          "Ergonomic D-handle design",
          "Compact and lightweight",
          "Depth stop included",
        ],
        specifications: {
          "Max Drilling in Concrete": "26mm",
          "Impact Energy": "2.0 J",
          "No-Load Speed": "0-1,000 RPM",
          "Weight": "2.6 kg",
        },
      },
      {
        slug: "gbh-3-28-dfr",
        name: "SDS Plus Multi Function Hammer",
        model: "GBH 3-28 DFR",
        category: "Rotary & Demolition Tools",
        subcategory: "Rotary Hammers",
        description:
          "Premium SDS plus rotary hammer with quick-change chuck for drilling, hammering and chiseling versatility.",
        image: "/images/bosch/gbh-3-28-dfr.png",
        features: [
          "SDS plus and keyless chuck",
          "3.0 J impact energy",
          "3-mode operation",
          "Quick-change chuck system",
          "Constant Speed electronics",
          "KickBack Control",
        ],
        specifications: {
          "Max Drilling in Concrete": "28mm",
          "Impact Energy": "3.0 J",
          "No-Load Speed": "0-900 RPM",
          "Impact Rate": "0-4,200 BPM",
          "Weight": "3.0 kg",
        },
      },
    ],
  },
  {
    slug: "grinders",
    name: "Angle Grinders",
    description:
      "Tough on materials, easy on you. Professional angle grinders with protection guard, kickback control and soft start.",
    tools: [
      {
        slug: "gws-7-125",
        name: "7\" Angle Grinder",
        model: "GWS 7-125",
        category: "Angle Grinders",
        subcategory: "Angle Grinders",
        description:
          "Compact and lightweight 7-inch angle grinder for powerful grinding, cutting and surface preparation.",
        image: "/images/bosch/gws-7-125.png",
        features: [
          "125mm disc diameter",
          "720W motor power",
          "Spindle lock for disc changes",
          "Protection guard",
          "Slim grip body",
          "Anti-vibration side handle",
        ],
        specifications: {
          "Disc Diameter": "125mm",
          "No-Load Speed": "12,000 RPM",
          "Motor Power": "720W",
          "Spindle Thread": "M14",
          "Weight": "1.8 kg",
        },
      },
    ],
  },
  {
    slug: "saws",
    name: "Circular Saws",
    description:
      "Precision cuts every time. Professional handheld, plunge and cordless circular saws for accurate wood and material cutting.",
    tools: [
      {
        slug: "gks-65-gce",
        name: "Handheld Circular Saw",
        model: "GKS 65 GCE",
        category: "Circular Saws",
        subcategory: "Handheld Circular Saws",
        description:
          "Powerful 165mm circular saw with dust extraction and cut-depth indicator for precise wood cutting.",
        features: [
          "165mm blade diameter",
          "1,400W motor power",
          "Spindle lock for blade changes",
          "Dust extraction port",
          "Cut depth indicator",
          "0-56° bevel capacity",
        ],
        specifications: {
          "Blade Diameter": "165mm",
          "Max Cutting Depth (90°)": "65mm",
          "Max Cutting Depth (45°)": "45mm",
          "Motor Power": "1,400W",
          "Weight": "4.2 kg",
        },
      },
      {
        slug: "gkt-55-gce",
        name: "Plunge Saw",
        model: "GKT 55 GCE",
        category: "Circular Saws",
        subcategory: "Plunge Saws",
        description:
          "Precision plunge saw for clean, splinter-free cuts in sheet materials and panel goods.",
        features: [
          "165mm blade diameter",
          "Plunge cut capability",
          "Guide rail compatible",
          "Splinter guard",
          "Dust extraction port",
          "Variable speed control",
        ],
        specifications: {
          "Blade Diameter": "165mm",
          "Max Cutting Depth": "55mm",
          "Motor Power": "1,400W",
          "No-Load Speed": "2,500-6,300 RPM",
          "Weight": "4.3 kg",
        },
      },
      {
        slug: "gks-18v-50",
        name: "Cordless Track Saw",
        model: "GKT 18V-52",
        category: "Circular Saws",
        subcategory: "Track Saws",
        description:
          "Cordless track saw for precise, repeatable cuts with Bosch guide rail system on the jobsite.",
        features: [
          "165mm blade diameter",
          "Guide rail compatible",
          "Cordless 18V operation",
          "Splinter guard",
          "Variable speed",
          "Brushless motor",
        ],
        specifications: {
          "Blade Diameter": "165mm",
          "Max Cutting Depth": "52mm",
          "Battery": "18V Li-ion",
          "No-Load Speed": "2,500-6,300 RPM",
          "Weight": "4.5 kg",
        },
      },
    ],
  },
  {
    slug: "measuring-tools",
    name: "Measuring Tools",
    description:
      "Measure with confidence. Precision measuring instruments including laser distance meters, thermal cameras and levels.",
    tools: [
      {
        slug: "glm-80",
        name: "Laser Distance Meter",
        model: "GLM 80",
        category: "Measuring Tools",
        subcategory: "Laser Distance Meters",
        description:
          "Professional laser distance meter with tilt sensor for accurate distance, area and volume measurements.",
        features: [
          "80m measuring range",
          "1.5mm accuracy",
          "Tilt sensor (360°)",
          "Area and volume calculation",
          "Bluetooth connectivity",
          "Backlit display",
        ],
        specifications: {
          "Measuring Range": "0.05-80m",
          "Accuracy": "±1.5mm",
          "Display": "Backlit color",
          "Battery": "3x AAA",
          "Weight": "0.22 kg",
        },
      },
      {
        slug: "gts-10-02-pro",
        name: "Digital Level",
        model: "GTS 10-02 Pro",
        category: "Measuring Tools",
        subcategory: "Digital Levels",
        description:
          "Electronic digital level with illuminated display for precise angle measurements and alignment.",
        features: [
          "10\" (250mm) length",
          "Illuminated digital display",
          "Acoustic signal for 0° and 90°",
          "Hold function",
          "Error and surface compensation",
          "Magnetic base",
        ],
        specifications: {
          "Length": "250mm (10\")",
          "Accuracy": "±0.05°",
          "Display": "Backlit LCD",
          "Power": "2x 1.5V AAA",
          "Weight": "0.35 kg",
        },
      },
      {
        slug: "gdt-3",
        name: "Thermal Camera",
        model: "GDT 3",
        category: "Measuring Tools",
        subcategory: "Thermal Cameras",
        description:
          "Compact thermal camera for detecting temperature differences in building inspection and maintenance.",
        features: [
          "160x120 pixel resolution",
          "Temperature range -10°C to 300°C",
          "Built-in digital camera",
          "LED illumination",
          "Bluetooth connectivity",
          "Bosch Thermal app",
        ],
        specifications: {
          "Resolution": "160x120 pixels",
          "Thermal Sensitivity": "<0.08°C",
          "Temperature Range": "-10°C to 300°C",
          "Display": "2.8\" color",
          "Weight": "0.32 kg",
        },
      },
      {
        slug: "gcm-8-sc",
        name: "Digital Tape Measure",
        model: "GCM 8 SC",
        category: "Measuring Tools",
        subcategory: "Tape Measures",
        description:
          "Digital tape measure with laser for precise distance measurements up to 8 meters.",
        features: [
          "8m measuring range",
          "Laser for long distances",
          "Digital display",
          "Measurement memory",
          "Auto-reel function",
          "IP54 dust and splash protection",
        ],
        specifications: {
          "Measuring Range": "0.15-8m",
          "Accuracy": "±2mm",
          "Tape Length": "8m",
          "Laser Class": "2",
          "Weight": "0.35 kg",
        },
      },
    ],
  },
  {
    slug: "accessories",
    name: "Accessories",
    description:
      "Better tools, longer life. High-quality drill bits, chisels, saw blades and cutting discs for professional results.",
    tools: [
      {
        slug: "2-607-430-004",
        name: "SDS Plus Drill Bit Set",
        model: "2-607-430-004",
        category: "Accessories",
        subcategory: "Drill Bits",
        description:
          "5-piece SDS plus drill bit set for drilling in concrete, brick and masonry with rotary hammers.",
        features: [
          "5-piece set",
          "SDS plus shank",
          "Carbide tips for long life",
          "Optimized flute design",
          "Suitable for concrete and masonry",
          "Diameter range: 5-12mm",
        ],
        specifications: {
          "Set Contents": "5, 6, 8, 10, 12mm",
          "Shank Type": "SDS plus",
          "Material": "Carbide tipped steel",
        },
      },
      {
        slug: "2-608-620-150",
        name: "Wood Saw Blade 254mm",
        model: "2-608-620-150",
        category: "Accessories",
        subcategory: "Saw Blades",
        description:
          "Premium 254mm circular saw blade for clean, fast cuts in softwood, hardwood and panel materials.",
        features: [
          "254mm diameter",
          "48 teeth",
          "Carbide tips",
          "Anti-kickback design",
          "Laser-cut slots",
          "For wood and panel materials",
        ],
        specifications: {
          "Diameter": "254mm",
          "Bore": "30mm",
          "Teeth": "48T",
          "Kerf": "2.5mm",
        },
      },
      {
        slug: "2-608-620-210",
        name: "Cutting Disc Set",
        model: "2-608-620-210",
        category: "Accessories",
        subcategory: "Cutting & Grinding Discs",
        description:
          "Multi-purpose cutting disc set for metal, stainless steel and stone cutting applications.",
        features: [
          "115mm diameter",
          "Set of 10 discs",
          "Multi-material cutting",
          "Thin kerf design",
          "Fast cutting performance",
          "For metal and stainless steel",
        ],
        specifications: {
          "Diameter": "115mm",
          "Thickness": "1.0mm",
          "Bore": "22.23mm",
          "Max Speed": "80m/s",
          "Quantity": "10 pieces",
        },
      },
    ],
  },
];

export const boschBrandInfo = {
  name: "Bosch",
  tagline: "Invented for Life",
  description:
    "Bosch Power Tools is a global leader in professional power tools, offering cordless systems, rotary hammers, grinders, saws, measuring tools and accessories for construction, woodworking and industrial applications.",
  founded: "1886",
  headquarters: "Gerlingen, Stuttgart, Germany",
  website: "https://www.bosch-professional.com",
  logo: "/images/brands/bosch.svg",
  specialties: [
    "Cordless Power Tools",
    "Rotary Hammers",
    "Angle Grinders",
    "Circular Saws",
    "Measuring Tools",
  ],
  stats: [
    { label: "Years Established", value: "140+" },
    { label: "Product Range", value: "600+" },
    { label: "Countries", value: "60+" },
    { label: "Industries Served", value: "15+" },
  ],
};

export function getBoschCategoryBySlug(
  slug: string
): BrandProductCategory | undefined {
  return boschCategories.find((c) => c.slug === slug);
}
