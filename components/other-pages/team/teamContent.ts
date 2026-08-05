import type { TestimonialSliderSlide } from "@/types/testimonials";

export type TeamImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type TeamMember = {
  name: string;
  role: string;
  photo: TeamImage;
  specialties: readonly string[];
};

export type TeamPromoItem = {
  label: string;
  image: TeamImage;
};

export const TEAM_IMAGES = {
  hero: {
    src: "/img/team-modern/team-collaboration.jpg",
    alt: "Architecture team reviewing project work in a studio",
    width: 1800,
    height: 1200,
  },
  splitPortrait: {
    src: "/img/team-modern/team-lead-female.jpg",
    alt: "Professional studio leader portrait in a modern office",
    width: 1600,
    height: 1067,
  },
  splitWorkspace: {
    src: "/img/team-modern/team-workspace.jpg",
    alt: "Architect working on sketches in a contemporary office",
    width: 1800,
    height: 1200,
  },
  divider: {
    src: "/img/about-us-modern/office-facade.jpg",
    alt: "Modern commercial facade with precise detailing",
    width: 3024,
    height: 4032,
  },
  teamLeadFemale: {
    src: "/img/team-modern/team-lead-female.jpg",
    alt: "Team lead portrait in office setting",
    width: 1600,
    height: 1067,
  },
  teamLeadMale: {
    src: "/img/team-modern/team-lead-male.jpg",
    alt: "Professional male leader portrait in bright office",
    width: 1600,
    height: 2400,
  },
  architectFemale: {
    src: "/img/team-modern/team-architect-female.jpg",
    alt: "Female architect portrait in modern office",
    width: 1600,
    height: 1067,
  },
  plannerFemale: {
    src: "/img/team-modern/team-planner-female.jpg",
    alt: "Planner working in a bright office setting",
    width: 1600,
    height: 1067,
  },
  siteManagerMale: {
    src: "/img/team-modern/team-site-manager-male.jpg",
    alt: "Professional site manager portrait in office",
    width: 1600,
    height: 2400,
  },
} as const;

export const TEAM_MANIFEST_TEXT = {
  lead:
    "Our team brings architecture, construction planning, interiors, and site delivery into one coordinated studio.",
  span:
    "That mix of disciplines helps projects move from concept to permit to handover with fewer disconnects and better control of quality, budget, and timing.",
  detailLead:
    "We work closely across design, documentation, procurement, and field coordination so decisions stay connected to the realities of construction.",
  detailSpan:
    "Every role on the team is focused on clarity: clear drawings, clear selections, clear communication on site, and clear ownership of the next step.",
};

export const TEAM_VALUES = [
  "Constructability",
  "Coordination",
  "Quality",
  "Scheduling",
  "Documentation",
  "Delivery",
];

export const TEAM_MEMBERS: readonly TeamMember[] = [
  {
    name: "Mason Hart",
    role: "Principal / Construction Director",
    photo: TEAM_IMAGES.teamLeadMale,
    specialties: ["Custom Homes", "Site Oversight"],
  },
  {
    name: "Elena Morris",
    role: "Design Director / Project Architect",
    photo: TEAM_IMAGES.teamLeadFemale,
    specialties: ["Architecture", "Permits"],
  },
  {
    name: "Sofia Lane",
    role: "Interior Design Lead",
    photo: TEAM_IMAGES.architectFemale,
    specialties: ["Finishes", "Selections"],
  },
  {
    name: "Nina Brooks",
    role: "Planning & Documentation Coordinator",
    photo: TEAM_IMAGES.plannerFemale,
    specialties: ["Approvals", "Specifications"],
  },
  {
    name: "Daniel Cross",
    role: "Site Operations Manager",
    photo: TEAM_IMAGES.siteManagerMale,
    specialties: ["Trades", "Scheduling"],
  },
];

export const TEAM_TESTIMONIAL_SLIDES: TestimonialSliderSlide[] = [
  {
    id: "team-client-forest-hill",
    descriptionLead:
      "The team gave us confidence from the first planning meeting.",
    descriptionSpan:
      "They translated our goals into a realistic scope, permit strategy, and build sequence we could trust.",
    photoSrc: TEAM_IMAGES.teamLeadFemale.src,
    photoAlt: TEAM_IMAGES.teamLeadFemale.alt,
    name: "Rina Patel",
    rolePrefix: "Homeowner in",
    companyName: "Forest Hill",
  },
  {
    id: "team-client-junction",
    descriptionLead:
      "Coordination between design drawings and site work was exceptionally disciplined.",
    descriptionSpan:
      "Questions were answered quickly, selections were clear, and the fit-out moved with very little friction.",
    photoSrc: TEAM_IMAGES.teamLeadMale.src,
    photoAlt: TEAM_IMAGES.teamLeadMale.alt,
    name: "Marcus Lee",
    rolePrefix: "Operations lead at",
    companyName: "Junction Medical",
  },
  {
    id: "team-client-hillcrest",
    descriptionLead:
      "Their interiors team helped us make confident decisions without slowing construction down.",
    descriptionSpan:
      "That balance between design quality and practical execution made the renovation feel controlled from start to finish.",
    photoSrc: TEAM_IMAGES.architectFemale.src,
    photoAlt: TEAM_IMAGES.architectFemale.alt,
    name: "Olivia Grant",
    rolePrefix: "Owner of",
    companyName: "Hillcrest Residence",
  },
  {
    id: "team-client-parkside",
    descriptionLead:
      "What stood out most was how well the team connected feasibility, approvals, and project planning.",
    descriptionSpan:
      "We always understood the next milestone and the risks attached to it.",
    photoSrc: TEAM_IMAGES.siteManagerMale.src,
    photoAlt: TEAM_IMAGES.siteManagerMale.alt,
    name: "Amir Rahman",
    rolePrefix: "Developer at",
    companyName: "Parkside Multiplex",
  },
];

export const TEAM_PROMO_ITEMS: readonly TeamPromoItem[] = [
  { label: "Project Leadership", image: TEAM_IMAGES.hero },
  { label: "Permit Coordination", image: TEAM_IMAGES.splitWorkspace },
  { label: "Design Reviews", image: TEAM_IMAGES.splitPortrait },
  { label: "Site Planning", image: TEAM_IMAGES.teamLeadMale },
  { label: "Interior Selections", image: TEAM_IMAGES.architectFemale },
  { label: "Trade Coordination", image: TEAM_IMAGES.siteManagerMale },
  { label: "Documentation", image: TEAM_IMAGES.plannerFemale },
  { label: "Client Workshops", image: TEAM_IMAGES.hero },
  { label: "Studio Process", image: TEAM_IMAGES.splitWorkspace },
  { label: "Field Follow-Up", image: TEAM_IMAGES.teamLeadFemale },
];
