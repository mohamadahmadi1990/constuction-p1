"use client";

import BlurSection from "@/components/animations/BlurSection";
import {
  initCtaMarqueeToLeft,
  initCtaMarqueeToRight,
} from "@/lib/template/ctaMarqueeEffects";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

type MarqueeImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const aboutUsMarqueeImages: readonly MarqueeImage[] = [
  {
    src: "/img/about-us-modern/modern-house-01.jpg",
    alt: "Contemporary residence with clean horizontal lines",
    width: 7360,
    height: 4912,
  },
  {
    src: "/img/about-us-modern/blueprint-meeting.jpg",
    alt: "Architects reviewing plans and build details",
    width: 3840,
    height: 2160,
  },
  {
    src: "/img/about-us-modern/garden-modern-home.jpg",
    alt: "Modern home exterior framed by landscaping and crisp geometry",
    width: 7360,
    height: 4912,
  },
  {
    src: "/img/about-us-modern/office-facade.jpg",
    alt: "Elegant commercial facade with a modern grid",
    width: 3024,
    height: 4032,
  },
  {
    src: "/img/about-us-modern/future-stair-hall.jpg",
    alt: "Futuristic interior hall with sculptural staircase lines",
    width: 7008,
    height: 4672,
  },
  {
    src: "/img/about-us-modern/modern-house-02.jpg",
    alt: "Dark-finish modern home with sharp geometry",
    width: 7360,
    height: 4912,
  },
  {
    src: "/img/about-us-modern/steel-staircase.jpg",
    alt: "Minimal steel staircase with a refined contemporary palette",
    width: 4160,
    height: 6240,
  },
  {
    src: "/img/about-us-modern/villa-water-feature.jpg",
    alt: "Luxury residential facade with glass walls and reflecting water",
    width: 6000,
    height: 4000,
  },
  {
    src: "/img/about-us-modern/staircase-interior.jpg",
    alt: "Sculptural staircase in a refined interior",
    width: 7008,
    height: 4672,
  },
  {
    src: "/img/about-us-modern/facade-stripes.jpg",
    alt: "Graphic facade with a strong vertical architectural rhythm",
    width: 5304,
    height: 7952,
  },
  {
    src: "/img/about-us-modern/material-palette.jpg",
    alt: "Curated material palette for premium interiors",
    width: 8256,
    height: 5504,
  },
  {
    src: "/img/about-us-modern/glass-corridor.jpg",
    alt: "Architectural corridor with crisp symmetry",
    width: 4000,
    height: 6000,
  },
  {
    src: "/img/about-us-modern/blueprint-hands.jpg",
    alt: "Blueprint review captured during early project planning",
    width: 3847,
    height: 2885,
  },
  {
    src: "/img/about-us-modern/curved-balcony-tower.jpg",
    alt: "Curved balcony tower with a bright modern silhouette",
    width: 3923,
    height: 5884,
  },
  {
    src: "/img/about-us-modern/modern-house-02.jpg",
    alt: "Refined residential architecture in a dark material palette",
    width: 7360,
    height: 4912,
  },
];

function renderMarqueeItems(images: readonly MarqueeImage[]) {
  return images.map((image, index) => (
    <div className="marquee__item item-imageblock" key={`${image.src}-${index}`}>
      <div className="marquee__image">
        <Image
          alt={image.alt}
          src={image.src}
          width={image.width}
          height={image.height}
        />
      </div>
    </div>
  ));
}

export default function DoubleMarqueeDivider() {
  const leftTrackRef = useRef<HTMLDivElement | null>(null);
  const rightTrackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const cleanLeft = initCtaMarqueeToLeft(leftTrackRef.current);
    const cleanRight = initCtaMarqueeToRight(rightTrackRef.current);
    return () => {
      cleanLeft();
      cleanRight();
    };
  }, []);

  return (
    <>
      <BlurSection className="mxd-section">
        <div className="mxd-container fullwidth-container">
          {/* Block - Marquee Double Start */}
          <div className="mxd-block">
            <div className="marquee marquee-left--gsap">
              <div
                className="marquee__toleft marquee__images"
                ref={leftTrackRef}
              >
                {renderMarqueeItems(aboutUsMarqueeImages)}
              </div>
            </div>
            <div className="marquee marquee-right--gsap">
              <div
                className="marquee__toright marquee__images align-start"
                ref={rightTrackRef}
              >
                {renderMarqueeItems([...aboutUsMarqueeImages].reverse())}
              </div>
            </div>
          </div>
          {/* Block - Marquee Double End */}
        </div>
      </BlurSection>
    </>
  );
}
