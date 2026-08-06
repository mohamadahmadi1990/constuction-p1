"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import TextScramble from "@/components/animations/TextScramble";
import CommonServicesStack, {
  ServicesStackSlot,
} from "@/components/animations/CommonServicesStack";
import { ArrowUpRightIcon } from "@/components/icons/UiIcons";

const IMG_W = 1200;
const IMG_H = 1300;
const IMG_ALT = "Construction and architecture service image";

type Card = {
  subtitle: string;
  title: string;
  lead?: string;
  tagCols: [string[], string[]];
  tagVariant?: "default" | "meta";
  image: string;
  href: string;
  descrClass: string;
  descr: ReactNode;
};

const CARDS: Card[] = [
  {
    subtitle: "01 / Services",
    title: "New Home Construction",
    lead: "Ground-up residential builds for custom homes",
    tagCols: [
      ["construction", "multi-unit"],
      ["residental"],
    ],
    tagVariant: "meta",
    image: "/img/about-us-modern/modern-house-01.jpg",
    href: "/project-details",
    descrClass: "services-card__descr services-card__descr--list",
    descr: (
      <>
        <span className="services-card__bullet-item">Custom single-family homes - detached, semi-detached and townhouses(turnkey)</span>
        <span className="services-card__bullet-item">Multiplex projects - duplex to quintuplex</span>
        <span className="services-card__bullet-item">Small condominium projects (up to 4 stacked units)</span>
        <span className="services-card__bullet-item">New homes for sale / residential development (spec homes)</span>
        <span className="services-card__bullet-item">Trust element: &quot;GCR-Accredited Builder - Mandatory New Home Warranty Plan,&quot; linked to the GCR directory.</span>
      </>
    ),
  },
  {
    subtitle: "02 / Services",
    title: "Residential Renovation",
    lead: "In-house finishing for existing homes",
    tagCols: [
      ["Renovation", "Residential"],
      ["In-house", "On-Site"],
    ],
    image: "/img/about-us-modern/staircase-interior.jpg",
    href: "/project-details",
    descrClass: "services-card__descr services-card__descr--list",
    descr: (
      <>
        <span className="services-card__bullet-item">
          Major renovations and home additions
        </span>
        <span className="services-card__bullet-item">
          Kitchen renovations - design, custom cabinets and counters, ceramic
          and finishing all done in-house
        </span>
        <span className="services-card__bullet-item">
          Bathroom renovations
        </span>
        <span className="services-card__bullet-item">
          Basement finishing
        </span>
        <span className="services-card__bullet-item">
          Roofing, insulation and exterior siding
        </span>
        <span className="services-card__bullet-item">
          Door and window replacement
        </span>
        <span className="services-card__bullet-item">
          Decks, patios and pergolas
        </span>
      </>
    ),
  },
  {
    subtitle: "03 / Services",
    title: "Commercial & Multi-Unit",
    lead: "Managed delivery for larger multi-unit projects.",
    tagCols: [
      ["Brand strategy", "Logo design", "Guidelines"],
      ["Visual identity", "Rebranding"],
    ],
    image: "/img/about-us-modern/office-facade.jpg",
    href: "/project-details",
    descrClass: "services-card__descr services-card__descr--list",
    descr: (
      <>
        <span className="services-card__bullet-item">
          Commercial building construction
        </span>
        <span className="services-card__bullet-item">
          Commercial fit-outs and tenant improvements
        </span>
        <span className="services-card__bullet-item">
          Commercial, industrial and institutional renovation
        </span>
        <span className="services-card__bullet-item">
          Multi-unit rental buildings (6+ units)
        </span>
        <span className="services-card__bullet-item">
          General contracting, project and site management
        </span>
      </>
    ),
  },
  {
    subtitle: "04 / Services",
    title: "Specialized Services & Turnkey",
    lead: "Standalone trade scopes plus interior design",
    tagCols: [
      ["Turnkey planning", "interior design"],
      ["commercial spaces", "residential"],
    ],
    image: "/img/about-us-modern/material-palette.jpg",
    href: "/project-details",
    descrClass: "services-card__descr services-card__descr--list",
    descr: (
      <>
        <span className="services-card__bullet-item">
          Excavation, grading and drainage
        </span>
        <span className="services-card__bullet-item">
          Site work - driveways, site development
        </span>
        <span className="services-card__bullet-item">
          Small concrete works - slabs, walkways, steps
        </span>
        <span className="services-card__bullet-item">
          Decorative masonry, ceramic and marble
        </span>
        <span className="services-card__bullet-item">
          Metalwork - railings and guardrails
        </span>
        <span className="services-card__bullet-item">
          Interior finishing - drywall, painting, flooring, trim
        </span>
        <span className="services-card__bullet-item">
          Intercom and surveillance systems
        </span>
        <span className="services-card__bullet-item">
          Space planning and layout design
        </span>
        <span className="services-card__bullet-item">
          Kitchen and bathroom design, with 3D renderings
        </span>
        <span className="services-card__bullet-item">
          Materials and finishes selection - mood boards and samples
        </span>

      </>
    ),
  },
];

function Tag({
  children,
  className = "tag tag-s-mobile mxd-scramble",
}: {
  children: string;
  className?: string;
}) {
  return <TextScramble className={className}>{children}</TextScramble>;
}

function ServiceCard({ card, index }: { card: Card; index: number }) {
  const [colA, colB] = card.tagCols;
  const tagsClassName =
    card.tagVariant === "meta"
      ? "services-card__tags services-card__tags--meta"
      : "services-card__tags";

  return (
    <ServicesStackSlot part="card" index={index}>
      <div className="mxd-stack-services__card">
        <ServicesStackSlot part="wrapper" index={index}>
          <div className="services-card__wrapper">
            <div className="services-card__content">
              <div className="services-card__info">
                <div className="services-card__subtitle">
                  <Tag>{card.subtitle}</Tag>
                </div>
                <div className="services-card__title">
                  <ServicesStackSlot part="title" index={index}>
                    <div className="services-card__title-text">
                      {card.title}
                    </div>
                  </ServicesStackSlot>
                </div>
                <ServicesStackSlot part="tags" index={index}>
                  <div className="services-card__details">
                    {card.lead ? (
                      <p className="services-card__lead">{card.lead}</p>
                    ) : null}
                    <div className={tagsClassName}>
                      <div className="tags-column">
                        {colA.map((tag) => (
                          <Tag
                            key={tag}
                            className="tag tag-s-mobile mxd-scramble"
                          >
                            {tag}
                          </Tag>
                        ))}
                      </div>
                      <div className="tags-column">
                        {colB.map((tag) => (
                          <Tag
                            key={tag}
                            className="tag tag-s-mobile mxd-scramble"
                          >
                            {tag}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                </ServicesStackSlot>
              </div>
              <ServicesStackSlot part="descr" index={index}>
                <div className={card.descrClass}>{card.descr}</div>
              </ServicesStackSlot>
            </div>
            <ServicesStackSlot part="image" index={index}>
              <Link
                className="services-card__image services-card__image-link"
                href={card.href}
                aria-label={`${card.title} project details`}
              >
                <Image
                  src={card.image}
                  width={IMG_W}
                  height={IMG_H}
                  alt={IMG_ALT}
                />
                <div className="services-card__cover">
                  <div className="services-card__cover-inner">
                    <span className="services-card__cover-kicker">
                      Case Study
                    </span>
                    <div className="services-card__cover-row">
                      <p className="services-card__cover-title">
                        View Project Details
                      </p>
                      <span
                        className="services-card__cover-icon"
                        aria-hidden="true"
                      >
                        <ArrowUpRightIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ServicesStackSlot>
          </div>
        </ServicesStackSlot>
      </div>
    </ServicesStackSlot>
  );
}

export default function ServicesDescriptionStack() {
  return (
    <div id="services" className="mxd-section">
      <div className="mxd-container fullwidth-container">
        <div className="mxd-block">
          <CommonServicesStack className="mxd-stack-services">
            {CARDS.map((card, index) => (
              <ServiceCard key={card.subtitle} card={card} index={index} />
            ))}
          </CommonServicesStack>
        </div>
      </div>
    </div>
  );
}
