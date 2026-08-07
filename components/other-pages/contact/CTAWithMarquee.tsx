"use client";

import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { initCtaMarqueeToLeft } from "@/lib/template/ctaMarqueeEffects";
import Link from "next/link";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";

const MARQUEE_ITEMS = [
  {
    tag: "Design review",
    src: "/img/about-us-modern/blueprint-meeting.jpg",
    width: 3840,
    height: 2160,
  },
  {
    tag: "Material direction",
    src: "/img/about-us-modern/material-palette.jpg",
    width: 8256,
    height: 5504,
  },
  {
    tag: "Residential architecture",
    src: "/img/about-us-modern/garden-modern-home.jpg",
    width: 7360,
    height: 4912,
  },
  {
    tag: "Facade studies",
    src: "/img/about-us-modern/office-facade.jpg",
    width: 3024,
    height: 4032,
  },
  {
    tag: "Interior detailing",
    src: "/img/about-us-modern/future-stair-hall.jpg",
    width: 7008,
    height: 4672,
  },
  {
    tag: "Site planning",
    src: "/img/about-us-modern/blueprint-hands.jpg",
    width: 3847,
    height: 2885,
  },
  {
    tag: "Modern circulation",
    src: "/img/about-us-modern/glass-corridor.jpg",
    width: 4000,
    height: 6000,
  },
  {
    tag: "Structural rhythm",
    src: "/img/about-us-modern/facade-stripes.jpg",
    width: 5304,
    height: 7952,
  },
  {
    tag: "Staircase craft",
    src: "/img/about-us-modern/steel-staircase.jpg",
    width: 4160,
    height: 6240,
  },
  {
    tag: "High-rise living",
    src: "/img/about-us-modern/curved-balcony-tower.jpg",
    width: 3923,
    height: 5884,
  },
];

const MARQUEE_TRACK = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS.slice(0, 5)];

export default function CTAWithMarquee() {
  const marqueeTrackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    return initCtaMarqueeToLeft(marqueeTrackRef.current);
  }, []);

  return (
    <>
      <BlurSection className="mxd-section bg-color-opposite">
        <div className="mxd-container fullwidth-container">
          {/* Block - CTA with Matter.js Objects Start */}
          <div className="mxd-block">
            <div className="mxd-promo transparent">
              <div className="mxd-promo__wrap auto-height">
                {/* content */}
                <div className="mxd-promo__content">
                  <CommonScrollAnimated
                    className="mxd-promo__btngroup anim-uni-in-up"
                    as="div"
                    animation="inUp"
                  >
                    <Link
                      className="btn btn-line btn-line-opposite"
                      href="/works-default"
                    >
                      <TextScramble className="btn-caption mxd-scramble">
                        View selected work
                      </TextScramble>
                    </Link>
                  </CommonScrollAnimated>
                  <div className="mxd-promo__caption">
                    <Link
                      className="active-cursor-accent"
                      data-cursor-text="View Work"
                      href="/works-default"
                    >
                      <CommonAnimatedText
                        as="h2"
                        className="opposite mxd-split-lines"
                        animation="splitLines"
                      >
                        See how the conversation becomes built work
                      </CommonAnimatedText>
                    </Link>
                  </div>
                </div>
                {/* marquee */}
                <div className="mxd-promo__marquee">
                  {/* Marquee Divider Start */}
                  <div className="marquee marquee-left--gsap">
                    <div
                      className="marquee__toleft marquee__images"
                      ref={marqueeTrackRef}
                    >
                      {MARQUEE_TRACK.map((item, index) => (
                        <div
                          key={`${item.src}-${index}`}
                          className="marquee__item item-imageblock"
                        >
                          <div className="marquee__tags">
                            <TextScramble className="tag tag-s tag-medium-opposite mxd-scramble">
                              {item.tag}
                            </TextScramble>
                          </div>
                          <div className="marquee__image">
                            <Image
                              alt={item.tag}
                              src={item.src}
                              width={item.width}
                              height={item.height}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Marquee Divider End */}
                </div>
              </div>
            </div>
          </div>
          {/* Block - CTA with Matter.js Objects End */}
        </div>
      </BlurSection>
    </>
  );
}
