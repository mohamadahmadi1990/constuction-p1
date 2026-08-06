import type { ProjectShowcaseItem, ProjectStackItem } from "@/types/project";

const commonTags = ["Design", "Illustrations", "Packaging", "marketing"];
const showcaseCommonTags = ["Design", "Illustrations", "Packaging", "Marketing"];

export const brandingStudioProjects: ProjectStackItem[] = [
  {
    title: "NFT project branding",
    imageSrc: "/img/works/showcase-stack/pr03.webp",
    imageAlt: "Project Preview Image",
    imageWidth: 1920,
    imageHeight: 1180,
    tags: commonTags,
  },
  {
    title: "Interactive app concept",
    imageSrc: "/img/works/showcase-stack/pr02.webp",
    imageAlt: "Project Preview Image",
    imageWidth: 2200,
    imageHeight: 1240,
    tags: commonTags,
  },
  {
    title: "Editorial illustrations set",
    imageSrc: "/img/works/showcase-stack/pr01.webp",
    imageAlt: "Project Preview Image",
    imageWidth: 1920,
    imageHeight: 1180,
    tags: commonTags,
  },
  {
    title: "Creative studio template",
    imageSrc: "/img/works/showcase-stack/pr04.webp",
    imageAlt: "Project Preview Image",
    imageWidth: 1920,
    imageHeight: 1180,
    coverClassName: "cover-darken",
    tags: commonTags,
  },
];

export const digitalDesignerProjectsShowcase: ProjectShowcaseItem[] = [
  {
    titleLines: ["Modern", "residence"],
    bgImageSrc: "/img/about-us-modern/modern-house-01.jpg",
    cardImageSrc: "/img/about-us-modern/modern-house-02.jpg",
    cardImageAlt: "Modern residence project preview",
    cursorText: "View Work",
    href: "/project-details",
    tags: ["Residential", "Architecture", "Construction", "Turnkey"],
  },
  {
    titleLines: ["Boutique", "workspace"],
    bgImageSrc: "/img/about-us-modern/office-facade.jpg",
    cardImageSrc: "/img/about-us-modern/glass-corridor.jpg",
    cardImageAlt: "Boutique workspace project preview",
    cursorText: "Case Study",
    href: "/project-details",
    tags: ["Commercial", "Interiors", "Documentation", "Fit-out"],
  },
  {
    titleLines: ["Courtyard", "villa"],
    bgImageSrc: "/img/about-us-modern/villa-water-feature.jpg",
    cardImageSrc: "/img/about-us-modern/curved-balcony-tower.jpg",
    cardImageAlt: "Courtyard villa project preview",
    cursorText: "View Work",
    href: "/project-details",
    tags: ["Luxury", "Landscape", "Facade", "Execution"],
  },
];
