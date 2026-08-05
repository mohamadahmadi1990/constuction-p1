"use client";

import BlurSection from "@/components/animations/BlurSection";
import { initCtaMarqueeToLeft } from "@/lib/template/ctaMarqueeEffects";
import Link from "next/link";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import { WORKS_DEFAULT_PROMO_ITEMS } from "./portfolioContent";

export default function CTAWithMarquee() {
  const marqueeTrackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    return initCtaMarqueeToLeft(marqueeTrackRef.current);
  }, []);

  return (
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
                  <Link className="btn btn-line btn-line-opposite" href="/contact">
                    <TextScramble className="btn-caption mxd-scramble">
                      Start a conversation
                    </TextScramble>
                  </Link>
                </CommonScrollAnimated>
                <div className="mxd-promo__caption">
                  <Link
                    className="active-cursor-accent"
                    data-cursor-text="Contact Us"
                    href="/contact"
                  >
                    <CommonAnimatedText
                      as="h2"
                      className="reveal-type opposite"
                      animation="revealType"
                    >
                      Let&apos;s shape the next build together
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
                    {WORKS_DEFAULT_PROMO_ITEMS.map((item, index) => (
                      <div
                        className="marquee__item item-imageblock"
                        key={`${item.label}-${index}`}
                      >
                        <div className="marquee__tags">
                          <TextScramble className="tag tag-s tag-medium mxd-scramble">
                            {item.label}
                          </TextScramble>
                        </div>
                        <div className="marquee__image">
                          <Image
                            alt={item.image.alt}
                            src={item.image.src}
                            width={item.image.width}
                            height={item.image.height}
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
  );
}
