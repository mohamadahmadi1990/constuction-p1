"use client";

import Link from "next/link";
import Image from "next/image";
import PinnedSection from "@/components/animations/PinnedSection";
import CommonLoadAnimation, {
  CommonLoadFade,
} from "@/components/animations/CommonLoadAnimation";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import SmoothAnchorLink from "@/components/common/SmoothAnchorLink";
import { ArrowDownIcon } from "@/components/icons/UiIcons";
import { WORKS_DEFAULT_IMAGES } from "./portfolioContent";

export default function InnerHeadline() {
  return (
    <CommonLoadAnimation>
      <>
        <PinnedSection className="mxd-section">
          <PinnedSection.Inner>
            <div className="mxd-container fullwidth-container">
              {/* Block - Inner Headline v03 Start */}
              <div className="mxd-block loading-wrap">
                <div className="inner-headline fullheight">
                  <div className="inner-headline__bg">
                    <Image
                      alt={WORKS_DEFAULT_IMAGES.hero.alt}
                      src={WORKS_DEFAULT_IMAGES.hero.src}
                      width={WORKS_DEFAULT_IMAGES.hero.width}
                      height={WORKS_DEFAULT_IMAGES.hero.height}
                    />
                    <div className="inner-headline__cover" />
                  </div>
                  <div className="mxd-container grid-l-container">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12 mxd-grid-item">
                          {/* breadcrumbs */}
                          <CommonLoadFade index={0}>
                            <div className="inner-headline__breadcrumbs loading-fade">
                              <div className="breadcrumbs__nav permanent">
                                <span>
                                  <Link href={`/`}>
                                    <TextScramble className="mxd-scramble">
                                      Home
                                    </TextScramble>
                                  </Link>
                                </span>
                                <span className="current-item">Projects </span>
                              </div>
                            </div>
                          </CommonLoadFade>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* bottom positioned headline */}
                  <div className="inner-headline__bottom">
                    <div className="mxd-container grid-l-container">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12">
                            {/* content */}
                            <div className="inner-headline__content has-medium-title">
                              <div className="container-fluid p-0">
                                <div className="row g-0">
                                  <div className="col-12 col-xl-10 mxd-grid-item">
                                    <CommonLoadFade index={1}>
                                      <div className="inner-headline__link loading-fade">
                                        <SmoothAnchorLink
                                          className="btn btn-line btn-line-permanent"
                                          targetId="portfolio"
                                        >
                                          <TextScramble className="btn-caption mxd-scramble">
                                            Selected Work
                                          </TextScramble>
                                        </SmoothAnchorLink>
                                      </div>
                                    </CommonLoadFade>
                                    <div className="inner-headline__title">
                                      <CommonAnimatedText
                                        as="h1"
                                        className="medium permanent loading-split"
                                        animation="splitLinesLoad"
                                      >
                                        Built work with
                                        <span> design discipline</span>
                                      </CommonAnimatedText>
                                    </div>
                                  </div>
                                  <div className="col-12 col-xl-2 mxd-grid-item">
                                    <CommonLoadFade index={2}>
                                      <div className="inner-headline__btngroup align-end-desktop tags-medium-title loading-fade">
                                        <SmoothAnchorLink
                                          className="btn btn-line-icon btn-line-icon-small btn-line-permanent slide-down"
                                          targetId="portfolio"
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Block - Inner Headline v03 End */}
            </div>
            <PinnedSection.Trigger />
          </PinnedSection.Inner>
        </PinnedSection>
      </>
    </CommonLoadAnimation>
  );
}
