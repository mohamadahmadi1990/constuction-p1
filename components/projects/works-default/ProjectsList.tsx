"use client";

import PinnedSection from "@/components/animations/PinnedSection";
import Link from "next/link";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import SmoothAnchorLink from "@/components/common/SmoothAnchorLink";
import { WORKS_DEFAULT_ARCHIVE_ITEMS } from "./portfolioContent";

export default function ProjectsList() {
  return (
    <PinnedSection
      blurSection
      className="mxd-section padding-top-subtitle-mobile padding-bottom-default"
    >
      <PinnedSection.Inner>
        <div className="mxd-container grid-l-container">
          {/* Block - Section Title v03 Start */}
          <div className="mxd-block">
            <div className="mxd-section-title pre-grid">
              <div className="container-fluid p-0">
                <div className="row g-0 d-flex flex-column-reverse flex-xl-row">
                  <div className="col-12 col-xl-8 mxd-grid-item">
                    <div className="mxd-section-title__title">
                      <CommonAnimatedText
                        as="h2"
                        className="reveal-type"
                        animation="revealType"
                      >
                        Selected project archive
                      </CommonAnimatedText>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 mxd-grid-item">
                    <div className="mxd-section-title__data top-controls">
                      <CommonScrollAnimated
                        className="mxd-section-title__controls pre-title justify-end anim-uni-in-up"
                        as="div"
                        animation="inUp"
                      >
                        <SmoothAnchorLink
                          className="btn btn-line btn-line-default"
                          targetId="testimonials"
                        >
                          <TextScramble className="btn-caption mxd-scramble">
                            Project Notes
                          </TextScramble>
                        </SmoothAnchorLink>
                      </CommonScrollAnimated>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Section Title v03 End */}
          {/* Block - Projects List Start */}
          <div className="mxd-block">
            <div className="mxd-projects-list no-margin-bottom">
              {WORKS_DEFAULT_ARCHIVE_ITEMS.map((item) => (
                <Link
                  key={`${item.niche}-${item.title}`}
                  className="mxd-projects-list__item active-cursor-image active-cursor-permanent"
                  data-cursor-image={item.cursorImage}
                  data-cursor-text="Start Project"
                  href="/contact"
                >
                  <div className="mxd-projects-list__divider top" />
                  <div className="container-fluid px-0 mxd-projects-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-2 mxd-grid-padding">
                        <div className="mxd-projects-list__niche">
                          <TextScramble className="meta-niche mxd-scramble">
                            {item.niche}
                          </TextScramble>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-padding">
                        <div className="mxd-projects-list__title">
                          <h3>
                            {item.title}{" "}
                            <span>
                              {item.accentLines.map((line, index) => (
                                <span key={`${item.title}-${line}`}>
                                  {index > 0 ? <br /> : null}
                                  {line}
                                </span>
                              ))}
                            </span>
                          </h3>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-xl-2 mxd-grid-padding">
                        <div className="mxd-projects-list__meta">
                          {item.tags.map((tag) => (
                            <TextScramble
                              key={`${item.title}-${tag}`}
                              className="meta-tag mxd-scramble"
                            >
                              {tag}
                            </TextScramble>
                          ))}
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-xl-2 mxd-grid-padding">
                        <div className="mxd-projects-list__date">
                          <TextScramble className="meta-date mxd-scramble">
                            {item.month}
                          </TextScramble>
                          <TextScramble className="meta-date mxd-scramble">
                            {item.year}
                          </TextScramble>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-projects-list__divider bottom" />
                </Link>
              ))}
            </div>
          </div>
          {/* Block - Projects List End */}
          <PinnedSection.Trigger />
        </div>
      </PinnedSection.Inner>
    </PinnedSection>
  );
}
