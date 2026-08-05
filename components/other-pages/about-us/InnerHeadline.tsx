"use client";

import BlurSection from "@/components/animations/BlurSection";
import Link from "next/link";
import Image from "next/image";
import CommonLoadAnimation, {
  CommonLoadFade,
  CommonLoadItem,
} from "@/components/animations/CommonLoadAnimation";
import {
  useHeroBannersHover,
  type HeroBannerGroupRefs,
} from "@/hooks/useHeroBannersHover";
import { useMemo, useRef } from "react";
import TextScramble from "@/components/animations/TextScramble";
import SmoothAnchorLink from "@/components/common/SmoothAnchorLink";
import { ArrowDownIcon } from "@/components/icons/UiIcons";

export default function InnerHeadline() {
  const bannersHoverRef = useRef<HTMLDivElement>(null);
  const trigger1Ref = useRef<HTMLAnchorElement>(null);
  const trigger2Ref = useRef<HTMLAnchorElement>(null);

  const heroBanner1_0 = useRef<HTMLDivElement>(null);
  const heroBanner1_1 = useRef<HTMLDivElement>(null);
  const heroBanner1_2 = useRef<HTMLDivElement>(null);
  const heroBanner1_3 = useRef<HTMLDivElement>(null);
  const heroBanner2_0 = useRef<HTMLDivElement>(null);
  const heroBanner2_1 = useRef<HTMLDivElement>(null);
  const heroBanner2_2 = useRef<HTMLDivElement>(null);
  const heroBanner2_3 = useRef<HTMLDivElement>(null);

  const heroBannerGroups = useMemo((): readonly HeroBannerGroupRefs[] => {
    return [
      {
        triggerRef: trigger1Ref,
        bannerRefs: [
          heroBanner1_0,
          heroBanner1_1,
          heroBanner1_2,
          heroBanner1_3,
        ],
      },
      {
        triggerRef: trigger2Ref,
        bannerRefs: [
          heroBanner2_0,
          heroBanner2_1,
          heroBanner2_2,
          heroBanner2_3,
        ],
      },
    ];
  }, [
    trigger1Ref,
    trigger2Ref,
    heroBanner1_0,
    heroBanner1_1,
    heroBanner1_2,
    heroBanner1_3,
    heroBanner2_0,
    heroBanner2_1,
    heroBanner2_2,
    heroBanner2_3,
  ]);

  useHeroBannersHover(bannersHoverRef, heroBannerGroups);

  return (
    <CommonLoadAnimation>
      <>
        <BlurSection className="mxd-section loading-wrap">
          <div className="mxd-container fullwidth-container">
            {/* Block - Inner Headline v06 Start */}
            <div className="mxd-block">
              <div className="inner-headline fullheight">
                {/* absolute centered headline */}
                <div className="inner-headline__absolute">
                  <div className="mxd-container">
                    <div className="inner-headline__centered">
                      <CommonLoadItem index={0}>
                        <div className="inner-headline__link loading-item">
                          <SmoothAnchorLink
                            className="btn btn-line btn-line-default"
                            targetId="process"
                          >
                            <TextScramble className="btn-caption mxd-scramble">
                              Our Process
                            </TextScramble>
                          </SmoothAnchorLink>
                        </div>
                      </CommonLoadItem>
                      <CommonLoadItem index={1}>
                        <div
                          ref={bannersHoverRef}
                          className="inner-headline__title banners-hover centered loading-item"
                        >
                          <h1 className="small">
                            Designing refined{" "}
                            <Link
                              ref={trigger1Ref}
                              className="inner-headline__trigger banners-trigger-1"
                              href={`/works-default`}
                            >
                              residential spaces
                            </Link>{" "}
                            and delivering disciplined{" "}
                            <Link
                              ref={trigger2Ref}
                              className="inner-headline__trigger banners-trigger-2"
                              href={`/works-default`}
                            >
                              commercial environments
                            </Link>
                          </h1>
                        </div>
                      </CommonLoadItem>
                      {/* banners */}
                      <div
                        ref={heroBanner1_0}
                        className="headline-banner-01 landscape image-01"
                      >
                        <Image
                          alt="Contemporary residential exterior"
                          src="/img/about-us-modern/modern-house-01.jpg"
                          width={7360}
                          height={4912}
                        />
                      </div>
                      <div
                        ref={heroBanner1_1}
                        className="headline-banner-01 portrait image-02"
                      >
                        <Image
                          alt="Modern commercial facade"
                          src="/img/about-us-modern/office-facade.jpg"
                          width={3024}
                          height={4032}
                        />
                      </div>
                      <div
                        ref={heroBanner1_2}
                        className="headline-banner-01 landscape image-03"
                      >
                        <Image
                          alt="Architects reviewing floor plans"
                          src="/img/about-us-modern/blueprint-meeting.jpg"
                          width={3840}
                          height={2160}
                        />
                      </div>
                      <div
                        ref={heroBanner1_3}
                        className="headline-banner-01 portrait image-04"
                      >
                        <Image
                          alt="Minimalist architectural corridor"
                          src="/img/about-us-modern/glass-corridor.jpg"
                          width={4000}
                          height={6000}
                        />
                      </div>
                      <div
                        ref={heroBanner2_0}
                        className="headline-banner-02 portrait image-05"
                      >
                        <Image
                          alt="Curated material palette for interior selections"
                          src="/img/about-us-modern/material-palette.jpg"
                          width={8256}
                          height={5504}
                        />
                      </div>
                      <div
                        ref={heroBanner2_1}
                        className="headline-banner-02 landscape image-06"
                      >
                        <Image
                          alt="Minimal modern residence in dark finish"
                          src="/img/about-us-modern/modern-house-02.jpg"
                          width={7360}
                          height={4912}
                        />
                      </div>
                      <div
                        ref={heroBanner2_2}
                        className="headline-banner-02 portrait image-07"
                      >
                        <Image
                          alt="Sculptural staircase in a contemporary interior"
                          src="/img/about-us-modern/staircase-interior.jpg"
                          width={7008}
                          height={4672}
                        />
                      </div>
                      <div
                        ref={heroBanner2_3}
                        className="headline-banner-02 landscape image-08"
                      >
                        <Image
                          alt="Refined exterior architecture with crisp geometry"
                          src="/img/about-us-modern/modern-house-01.jpg"
                          width={7360}
                          height={4912}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* bottom data line */}
                <div className="inner-headline__dataline">
                  <div className="mxd-container">
                    <div className="headline-dataline">
                      <div className="headline-dataline__socials">
                        <ul className="mxd-socials-line centered-mobile">
                          <CommonLoadItem index={2}>
                            <li className="loading-item">
                              <a
                                className="mxd-socials-line__link"
                                href="/works-default"
                              >
                                <TextScramble className="mxd-scramble">
                                  Projects
                                </TextScramble>
                              </a>
                            </li>
                          </CommonLoadItem>
                          <CommonLoadItem index={3}>
                            <li className="loading-item">
                              <a
                                className="mxd-socials-line__link"
                                href="/services"
                              >
                                <TextScramble className="mxd-scramble">
                                  Services
                                </TextScramble>
                              </a>
                            </li>
                          </CommonLoadItem>
                          <CommonLoadItem index={4}>
                            <li className="loading-item">
                              <a
                                className="mxd-socials-line__link"
                                href="/team"
                              >
                                <TextScramble className="mxd-scramble">
                                  Team
                                </TextScramble>
                              </a>
                            </li>
                          </CommonLoadItem>
                          <CommonLoadItem index={5}>
                            <li className="loading-item">
                              <a
                                className="mxd-socials-line__link"
                                href="/blog-standard"
                              >
                                <TextScramble className="mxd-scramble">
                                  Insights
                                </TextScramble>
                              </a>
                            </li>
                          </CommonLoadItem>
                          <CommonLoadItem index={6}>
                            <li className="loading-item">
                              <a
                                className="mxd-socials-line__link"
                                href="/contact"
                              >
                                <TextScramble className="mxd-scramble">
                                  Contact
                                </TextScramble>
                              </a>
                            </li>
                          </CommonLoadItem>
                        </ul>
                      </div>
                      <CommonLoadItem index={7}>
                        <div className="headline-dataline__controls loading-item">
                          <SmoothAnchorLink
                            className="btn btn-line-icon btn-line-icon-small btn-line-default slide-down"
                            targetId="process"
                          >
                            <TextScramble className="btn-caption mxd-scramble">
                              Scroll to explore
                            </TextScramble>
                            <i>
                              <ArrowDownIcon />
                            </i>
                          </SmoothAnchorLink>
                        </div>
                      </CommonLoadItem>
                    </div>
                  </div>
                </div>
                <div className="mxd-container grid-l-container">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 mxd-grid-item">
                        {/* breadcrumbs */}
                        <CommonLoadFade index={0}>
                          <div className="inner-headline__breadcrumbs loading-fade">
                            <div className="breadcrumbs__nav">
                              <span>
                                <Link href={`/`}>
                                  <TextScramble className="mxd-scramble">
                                    Home
                                  </TextScramble>
                                </Link>
                              </span>
                              <span className="current-item">About Us</span>
                            </div>
                          </div>
                        </CommonLoadFade>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Inner Headline v06 End */}
          </div>
        </BlurSection>
      </>
    </CommonLoadAnimation>
  );
}
