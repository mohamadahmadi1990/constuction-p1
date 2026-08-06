"use client";
import Link from "next/link";
import Image from "next/image";
import CommonLoadAnimation, {
  CommonLoadFade,
  CommonLoadItem,
} from "@/components/animations/CommonLoadAnimation";
import TextScramble from "@/components/animations/TextScramble";
import SmoothAnchorLink from "@/components/common/SmoothAnchorLink";
import CommonHero3DImages, {
  CommonHero3DCover,
  CommonHero3DImage,
  CommonHero3DImagesTrack,
  CommonHero3DIntroText,
  CommonHero3DOutroText,
} from "@/components/animations/CommonHero3DImages";
import { ArrowDownIcon } from "@/components/icons/UiIcons";

const heroGalleryImages = [
  "/img/about-us-modern/modern-house-01.jpg",
  "/img/about-us-modern/curved-balcony-tower.jpg",
  "/img/about-us-modern/glass-corridor.jpg",
  "/img/about-us-modern/modern-house-02.jpg",
  "/img/about-us-modern/office-facade.jpg",
  "/img/about-us-modern/garden-modern-home.jpg",
  "/img/about-us-modern/future-stair-hall.jpg",
  "/img/about-us-modern/material-palette.jpg",
  "/img/about-us-modern/staircase-interior.jpg",
  "/img/about-us-modern/steel-staircase.jpg",
  "/img/about-us-modern/blueprint-meeting.jpg",
  "/img/about-us-modern/blueprint-hands.jpg",
  "/img/about-us-modern/villa-water-feature.jpg",
  "/img/about-us-modern/facade-stripes.jpg",
  "/img/about-us-modern/modern-house-01.jpg",
  "/img/about-us-modern/curved-balcony-tower.jpg",
  "/img/about-us-modern/glass-corridor.jpg",
  "/img/about-us-modern/modern-house-02.jpg",
  "/img/about-us-modern/garden-modern-home.jpg",
  "/img/about-us-modern/villa-water-feature.jpg",
] as const;

export default function Hero() {
  return (
    <CommonLoadAnimation>
      <>
        <div className="mxd-section mxd-hero-section no-padding loading-wrap">
            <CommonHero3DImages className="mxd-hero-02">
              {/* background group */}
              <div className="mxd-hero-02__background">
                <Image
                  alt="Dark modern architectural facade with sharp shadow lines"
                  src="/img/custom/hero-dark-193.jpg"
                  fill
                  priority
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="mxd-hero-02__cover" />
              </div>
              {/* scroll images */}
              <CommonHero3DImagesTrack className="mxd-hero-02__images">
                <CommonHero3DImage
                  as={Link}
                  index={0}
                  className="hero-02__img"
                  href="/project-details"
                >
                  <Image
                    alt="Contemporary construction and architecture project image"
                    src={heroGalleryImages[0]}
                    width={1280}
                    height={800}
                  />
                </CommonHero3DImage>
                {heroGalleryImages.slice(1).map((src, index) => (
                  <CommonHero3DImage
                    key={`${src}-${index + 1}`}
                    index={index + 1}
                    className="hero-02__img"
                  >
                    <Image
                      alt="Contemporary construction and architecture project image"
                      src={src}
                      width={1280}
                      height={800}
                    />
                  </CommonHero3DImage>
                ))}
              </CommonHero3DImagesTrack>
            {/* bottom group */}
            <div className="mxd-hero-02__bottom">
              <div className="mxd-hero-02__dataline">
                <div className="mxd-hero-02__socials mxd-grid-item">
                  <ul className="mxd-socials-line">
                    <li>
                      <CommonLoadItem index={0}>
                        <a
                          className="mxd-socials-line__link permanent loading-item"
                          href="/works-default"
                        >
                          <TextScramble className="mxd-scramble">
                            Residential
                          </TextScramble>
                        </a>
                      </CommonLoadItem>
                    </li>
                    <li>
                      <CommonLoadItem index={1}>
                        <a
                          className="mxd-socials-line__link permanent loading-item"
                          href="/works-grid"
                        >
                          <TextScramble className="mxd-scramble">
                            Commercial
                          </TextScramble>
                        </a>
                      </CommonLoadItem>
                    </li>
                    <li>
                      <CommonLoadItem index={2}>
                        <a
                          className="mxd-socials-line__link permanent loading-item"
                          href="/services"
                        >
                          <TextScramble className="mxd-scramble">
                            Interiors
                          </TextScramble>
                        </a>
                      </CommonLoadItem>
                    </li>
                    <li>
                      <CommonLoadItem index={3}>
                        <a
                          className="mxd-socials-line__link permanent loading-item"
                          href="/about-us"
                        >
                          <TextScramble className="mxd-scramble">
                            Process
                          </TextScramble>
                        </a>
                      </CommonLoadItem>
                    </li>
                    <li>
                      <CommonLoadItem index={4}>
                        <a
                          className="mxd-socials-line__link permanent loading-item"
                          href="/contact"
                        >
                          <TextScramble className="mxd-scramble">
                            Contact
                          </TextScramble>
                        </a>
                      </CommonLoadItem>
                    </li>
                  </ul>
                </div>
                <CommonLoadFade index={0}>
                  <div className="mxd-hero-02__controls mxd-grid-item loading-fade">
                    <SmoothAnchorLink
                      className="btn btn-line-icon btn-line-permanent slide-down"
                      targetId="about"
                    >
                        <TextScramble className="btn-caption mxd-scramble">
                          Scroll to explore
                        </TextScramble>
                        <i>
                          <ArrowDownIcon />
                        </i>
                      </SmoothAnchorLink>
                  </div>
                </CommonLoadFade>
              </div>
            </div>
            {/* cover image */}
            <CommonHero3DCover className="mxd-hero-02__cover-img">
              <Image
                alt="Black and white modern facade viewed from below"
                src="/img/custom/hero-cover-23269.jpg"
                width={1920}
                height={1200}
                priority
              />
            </CommonHero3DCover>
            {/* headlines */}
            <div className="mxd-hero-02__intro">
              <CommonHero3DIntroText>
                <h1 className="medium permanent">
                  Architecture, craft &amp; disciplined delivery
                </h1>
              </CommonHero3DIntroText>
            </div>
            <div className="mxd-hero-02__outro">
              <CommonHero3DOutroText>
                <p>Contemporary homes, interiors, and low-rise builds shaped with precision.</p>
              </CommonHero3DOutroText>
            </div>
          </CommonHero3DImages>
        </div>
      </>
    </CommonLoadAnimation>
  );
}
