"use client";

import AutoplayLoopVideo from "@/components/media/AutoplayLoopVideo";
import PinnedSection from "@/components/animations/PinnedSection";
import Link from "next/link";
import CommonLoadAnimation, {
  CommonLoadFade,
} from "@/components/animations/CommonLoadAnimation";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import SmoothAnchorLink from "@/components/common/SmoothAnchorLink";
import { ArrowDownIcon } from "@/components/icons/UiIcons";

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
                    <div
                      className="video parallax-video"
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <AutoplayLoopVideo
                        poster="/img/about-us-modern/modern-house-02.jpg"
                        sources={[
                          {
                            type: "video/mp4",
                            src: "video/services-v1.mp4",
                          },
                          {
                            type: "video/webm",
                            src: "video/services-v1.webm",
                          },
                        ]}
                      />
                    </div>
                    {/* <Image   alt="Azurio Template Sample Image"    src="/img/backgrounds/1920x1280_bg01.webp" width="1920" height="1280" /> */}
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
                                <span className="current-item">Services </span>
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
                                          targetId="services"
                                        >
                                          <TextScramble className="btn-caption mxd-scramble">
                                            Services
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
                                        From Vision{" "}
                                        <span>to Foundation</span>
                                      </CommonAnimatedText>
                                    </div>
                                  </div>
                                  <div className="col-12 col-xl-2 mxd-grid-item">
                                    <CommonLoadFade index={2}>
                                      <div className="inner-headline__btngroup align-end-desktop tags-medium-title loading-fade">
                                        <SmoothAnchorLink
                                          className="btn btn-line-icon btn-line-icon-small btn-line-permanent slide-down"
                                          targetId="services"
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
