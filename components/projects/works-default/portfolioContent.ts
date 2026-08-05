export type PortfolioImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type WorksDefaultStackCard = {
  key: string;
  title: string;
  tags: readonly string[];
  image: PortfolioImage;
  coverClassName?: string;
};

export type WorksDefaultArchiveItem = {
  niche: string;
  title: string;
  accentLines: readonly string[];
  tags: readonly string[];
  month: string;
  year: string;
  cursorImage: string;
};

export type WorksDefaultProjectNote = {
  quote: string;
  highlight: string;
  name: string;
  role: string;
  photo: PortfolioImage;
};

export type WorksDefaultPromoItem = {
  label: string;
  image: PortfolioImage;
};

export const WORKS_DEFAULT_IMAGES = {
  hero: {
    src: "/img/about-us-modern/villa-water-feature.jpg",
    alt: "Contemporary architectural residence with glass and water feature",
    width: 6000,
    height: 4000,
  },
  divider: {
    src: "/img/about-us-modern/garden-modern-home.jpg",
    alt: "Modern residence framed by landscaping",
    width: 7360,
    height: 4912,
  },
  modernHouse01: {
    src: "/img/about-us-modern/modern-house-01.jpg",
    alt: "Contemporary residence with clean horizontal lines",
    width: 7360,
    height: 4912,
  },
  modernHouse02: {
    src: "/img/about-us-modern/modern-house-02.jpg",
    alt: "Dark-finish modern home with crisp geometry",
    width: 7360,
    height: 4912,
  },
  blueprintMeeting: {
    src: "/img/about-us-modern/blueprint-meeting.jpg",
    alt: "Architects reviewing floor plans and permit drawings",
    width: 3840,
    height: 2160,
  },
  blueprintHands: {
    src: "/img/about-us-modern/blueprint-hands.jpg",
    alt: "Hands reviewing technical drawings during project planning",
    width: 3847,
    height: 2885,
  },
  materialPalette: {
    src: "/img/about-us-modern/material-palette.jpg",
    alt: "Curated finish and material palette for interiors",
    width: 8256,
    height: 5504,
  },
  officeFacade: {
    src: "/img/about-us-modern/office-facade.jpg",
    alt: "Elegant commercial facade with a modern grid",
    width: 3024,
    height: 4032,
  },
  glassCorridor: {
    src: "/img/about-us-modern/glass-corridor.jpg",
    alt: "Minimal corridor with glass and warm light",
    width: 4000,
    height: 6000,
  },
  staircaseInterior: {
    src: "/img/about-us-modern/staircase-interior.jpg",
    alt: "Sculptural staircase in a contemporary interior",
    width: 7008,
    height: 4672,
  },
  futureStairHall: {
    src: "/img/about-us-modern/future-stair-hall.jpg",
    alt: "Architectural hall with sculptural stair detail",
    width: 7008,
    height: 4672,
  },
  steelStaircase: {
    src: "/img/about-us-modern/steel-staircase.jpg",
    alt: "Minimal steel staircase with refined detailing",
    width: 4160,
    height: 6240,
  },
  gardenModernHome: {
    src: "/img/about-us-modern/garden-modern-home.jpg",
    alt: "Modern home exterior with landscape integration",
    width: 7360,
    height: 4912,
  },
  curvedBalconyTower: {
    src: "/img/about-us-modern/curved-balcony-tower.jpg",
    alt: "Curved balcony tower with a bright modern silhouette",
    width: 3923,
    height: 5884,
  },
  facadeStripes: {
    src: "/img/about-us-modern/facade-stripes.jpg",
    alt: "Graphic facade with strong vertical rhythm",
    width: 5304,
    height: 7952,
  },
  villaWaterFeature: {
    src: "/img/about-us-modern/villa-water-feature.jpg",
    alt: "Luxury residential facade with reflecting water",
    width: 6000,
    height: 4000,
  },
} as const;

export const WORKS_DEFAULT_STACK_MARQUEE_WORDS = [
  "Residential/",
  "Renovation/",
  "Commercial/",
  "Multi-Unit/",
  "Interiors/",
] as const;

export const WORKS_DEFAULT_STACK_CARDS: readonly WorksDefaultStackCard[] = [
  {
    key: "cedar-ridge-residence",
    title: "Cedar Ridge New Home",
    tags: ["Custom Home", "Permit Set", "Turnkey"],
    image: WORKS_DEFAULT_IMAGES.modernHouse01,
  },
  {
    key: "hillcrest-renovation",
    title: "Hillcrest Renovation & Addition",
    tags: ["Renovation", "Millwork", "Interiors"],
    image: WORKS_DEFAULT_IMAGES.futureStairHall,
  },
  {
    key: "junction-fitout",
    title: "Junction Commercial Fit-Out",
    tags: ["Commercial", "Coordination", "Delivery"],
    image: WORKS_DEFAULT_IMAGES.glassCorridor,
  },
  {
    key: "parkside-multiplex",
    title: "Parkside Multiplex Planning",
    tags: ["Multi-Unit", "Approvals", "Site Strategy"],
    image: WORKS_DEFAULT_IMAGES.curvedBalconyTower,
    coverClassName: "cover-darken",
  },
];

export const WORKS_DEFAULT_ARCHIVE_ITEMS: readonly WorksDefaultArchiveItem[] = [
  {
    niche: "Residential",
    title: "Forest Hill",
    accentLines: ["custom", "residence"],
    tags: ["Architecture", "Build", "Warranty"],
    month: "March",
    year: "2026",
    cursorImage: WORKS_DEFAULT_IMAGES.modernHouse02.src,
  },
  {
    niche: "Renovation",
    title: "Annex",
    accentLines: ["whole-home", "renovation"],
    tags: ["Addition", "Interiors", "Millwork"],
    month: "December",
    year: "2025",
    cursorImage: WORKS_DEFAULT_IMAGES.staircaseInterior.src,
  },
  {
    niche: "Commercial",
    title: "Downtown",
    accentLines: ["medical office", "fit-out"],
    tags: ["Fit-Out", "Coordination", "Delivery"],
    month: "September",
    year: "2025",
    cursorImage: WORKS_DEFAULT_IMAGES.officeFacade.src,
  },
  {
    niche: "Multi-Unit",
    title: "Laneway +",
    accentLines: ["multiplex", "development"],
    tags: ["Feasibility", "Permits", "Site Planning"],
    month: "June",
    year: "2025",
    cursorImage: WORKS_DEFAULT_IMAGES.facadeStripes.src,
  },
  {
    niche: "Interiors",
    title: "Model Home",
    accentLines: ["finishes", "package"],
    tags: ["Selections", "Specifications", "Styling"],
    month: "February",
    year: "2025",
    cursorImage: WORKS_DEFAULT_IMAGES.materialPalette.src,
  },
];

export const WORKS_DEFAULT_NOTE_TAGS = [
  "Residential",
  "Commercial",
  "Renovation",
] as const;

export const WORKS_DEFAULT_PROJECT_NOTES: readonly WorksDefaultProjectNote[] = [
  {
    quote:
      "Pre-construction workshops clarified scope, permit path, and sequencing before excavation began.",
    highlight:
      "That early alignment protected schedule and reduced site revisions.",
    name: "Forest Hill Residence",
    role: "New home build / 2026",
    photo: WORKS_DEFAULT_IMAGES.blueprintHands,
  },
  {
    quote:
      "Material decisions were resolved before rough-in, which kept procurement and finishing trades moving.",
    highlight:
      "The renovation phase stayed calmer and the handover stayed cleaner.",
    name: "Hillcrest Addition",
    role: "Renovation + interiors / 2025",
    photo: WORKS_DEFAULT_IMAGES.steelStaircase,
  },
  {
    quote:
      "Tenant improvement drawings and trade coordination moved in parallel with landlord approvals.",
    highlight:
      "That compressed the fit-out timeline without compromising detailing.",
    name: "King West Professional Suite",
    role: "Commercial fit-out / 2025",
    photo: WORKS_DEFAULT_IMAGES.officeFacade,
  },
  {
    quote:
      "Early feasibility and servicing review helped confirm the right unit mix before detailed design.",
    highlight:
      "The project moved into approvals with fewer redesign loops.",
    name: "Parkside Multiplex Study",
    role: "Multi-unit planning / 2025",
    photo: WORKS_DEFAULT_IMAGES.facadeStripes,
  },
  {
    quote:
      "Finish schedules, lighting studies, and sample reviews gave the client confidence before procurement.",
    highlight:
      "That clarity carried through installation and final styling.",
    name: "Harbour Show Home",
    role: "Finishes + selections / 2025",
    photo: WORKS_DEFAULT_IMAGES.materialPalette,
  },
];

export const WORKS_DEFAULT_SUPPORT_IMAGES = [
  WORKS_DEFAULT_IMAGES.gardenModernHome,
  WORKS_DEFAULT_IMAGES.blueprintMeeting,
  WORKS_DEFAULT_IMAGES.curvedBalconyTower,
  WORKS_DEFAULT_IMAGES.villaWaterFeature,
] as const;

export const WORKS_DEFAULT_PROMO_ITEMS: readonly WorksDefaultPromoItem[] = [
  {
    label: "Custom Homes",
    image: WORKS_DEFAULT_IMAGES.modernHouse01,
  },
  {
    label: "Permit Sets",
    image: WORKS_DEFAULT_IMAGES.blueprintHands,
  },
  {
    label: "Interior Detailing",
    image: WORKS_DEFAULT_IMAGES.staircaseInterior,
  },
  {
    label: "Commercial Fit-Out",
    image: WORKS_DEFAULT_IMAGES.officeFacade,
  },
  {
    label: "Material Boards",
    image: WORKS_DEFAULT_IMAGES.materialPalette,
  },
  {
    label: "Site Planning",
    image: WORKS_DEFAULT_IMAGES.blueprintMeeting,
  },
  {
    label: "Multi-Unit",
    image: WORKS_DEFAULT_IMAGES.curvedBalconyTower,
  },
  {
    label: "Facade Studies",
    image: WORKS_DEFAULT_IMAGES.facadeStripes,
  },
  {
    label: "Build Sequencing",
    image: WORKS_DEFAULT_IMAGES.gardenModernHome,
  },
  {
    label: "Selection Reviews",
    image: WORKS_DEFAULT_IMAGES.futureStairHall,
  },
  {
    label: "Facade Detailing",
    image: WORKS_DEFAULT_IMAGES.glassCorridor,
  },
  {
    label: "Residential Development",
    image: WORKS_DEFAULT_IMAGES.modernHouse02,
  },
  {
    label: "Stair Detailing",
    image: WORKS_DEFAULT_IMAGES.steelStaircase,
  },
  {
    label: "Luxury Finishes",
    image: WORKS_DEFAULT_IMAGES.villaWaterFeature,
  },
];
