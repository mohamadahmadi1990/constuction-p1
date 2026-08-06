"use client";

import PinnedSection from "@/components/animations/PinnedSection";
import Link from "next/link";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
export default function ServicesList() {
  return (
    <>
      <PinnedSection
        blurSection
        className="mxd-section padding-top-subtitle-mobile padding-bottom-default"
      >
        <PinnedSection.Inner>
          <div className="mxd-container grid-l-container">
            {/* Block - Section Title v01 Start */}
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
                          Project scope from concept to handover
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
                          <Link
                            className="btn btn-line btn-line-default"
                            href={`/services`}
                          >
                            <TextScramble className="btn-caption mxd-scramble">
                              Full Services
                            </TextScramble>
                          </Link>
                        </CommonScrollAnimated>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Section Title v01 End */}
            {/* Block - Services List Start */}
            <div className="mxd-block">
              <div className="mxd-services-list no-marquee">
                {/* services item */}
                <Link
                  className="mxd-services-list__item active-cursor-image-tr"
                  data-cursor-image="/img/about-us-modern/blueprint-hands.jpg"
                  href={`/services`}
                >
                  <div className="mxd-services-list__divider top" />
                  <div className="container-fluid px-0 mxd-services-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-1 mxd-grid-padding">
                        <div className="mxd-services-list__number">
                          <span className="meta-tag">[01]</span>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-padding">
                        <div className="mxd-services-list__title">
                          <h3>Site planning &amp; feasibility</h3>
                        </div>
                      </div>
                      <div className="col-12 col-xl-5 mxd-grid-padding">
                        <div className="mxd-services-list__descr">
                          <p className="t-medium">
                            Existing conditions, zoning awareness, massing
                            direction, and budget-fit decisions are organized
                            early so the project can move with confidence.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__divider bottom" />
                </Link>
                {/* services item */}
                <Link
                  className="mxd-services-list__item active-cursor-image-tr"
                  data-cursor-image="/img/about-us-modern/modern-house-01.jpg"
                  href={`/services`}
                >
                  <div className="mxd-services-list__divider top" />
                  <div className="container-fluid px-0 mxd-services-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-1 mxd-grid-padding">
                        <div className="mxd-services-list__number">
                          <span className="meta-tag">[02]</span>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-padding">
                        <div className="mxd-services-list__title">
                          <h3>Custom homes &amp; low-rise builds</h3>
                        </div>
                      </div>
                      <div className="col-12 col-xl-5 mxd-grid-padding">
                        <div className="mxd-services-list__descr">
                          <p className="t-medium">
                            Detached homes, townhouses, and boutique multi-unit
                            projects are designed and detailed with a focus on
                            livability, proportion, and long-term durability.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__divider bottom" />
                </Link>
                {/* services item */}
                <Link
                  className="mxd-services-list__item active-cursor-image-tr"
                  data-cursor-image="/img/about-us-modern/glass-corridor.jpg"
                  href={`/services`}
                >
                  <div className="mxd-services-list__divider top" />
                  <div className="container-fluid px-0 mxd-services-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-1 mxd-grid-padding">
                        <div className="mxd-services-list__number">
                          <span className="meta-tag">[03]</span>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-padding">
                        <div className="mxd-services-list__title">
                          <h3>Interior renovations &amp; fit-outs</h3>
                        </div>
                      </div>
                      <div className="col-12 col-xl-5 mxd-grid-padding">
                        <div className="mxd-services-list__descr">
                          <p className="t-medium">
                            Kitchens, bathrooms, full-floor reconfigurations,
                            and modern workspace interiors are coordinated for
                            better flow, finish quality, and day-to-day use.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__divider bottom" />
                </Link>
                {/* services item */}
                <Link
                  className="mxd-services-list__item active-cursor-image-tr"
                  data-cursor-image="/img/about-us-modern/material-palette.jpg"
                  href={`/services`}
                >
                  <div className="mxd-services-list__divider top" />
                  <div className="container-fluid px-0 mxd-services-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-1 mxd-grid-padding">
                        <div className="mxd-services-list__number">
                          <span className="meta-tag">[04]</span>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-padding">
                        <div className="mxd-services-list__title">
                          <h3>Permit drawings &amp; selections</h3>
                        </div>
                      </div>
                      <div className="col-12 col-xl-5 mxd-grid-padding">
                        <div className="mxd-services-list__descr">
                          <p className="t-medium">
                            Detailed drawing packages, specification direction,
                            fixture schedules, and finish selections keep
                            approvals and procurement aligned.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__divider bottom" />
                </Link>
                {/* services item */}
                <Link
                  className="mxd-services-list__item active-cursor-image-tr"
                  data-cursor-image="/img/about-us-modern/office-facade.jpg"
                  href={`/services`}
                >
                  <div className="mxd-services-list__divider top" />
                  <div className="container-fluid px-0 mxd-services-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-1 mxd-grid-padding">
                        <div className="mxd-services-list__number">
                          <span className="meta-tag">[05]</span>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-padding">
                        <div className="mxd-services-list__title">
                          <h3>Construction supervision &amp; closeout</h3>
                        </div>
                      </div>
                      <div className="col-12 col-xl-5 mxd-grid-padding">
                        <div className="mxd-services-list__descr">
                          <p className="t-medium">
                            Tender review, site visits, deficiency tracking, and
                            final handover support help protect quality all the
                            way through completion.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__divider bottom" />
                </Link>
              </div>
            </div>
            {/* Block - Services List End */}
          </div>
          <PinnedSection.Trigger />
        </PinnedSection.Inner>
      </PinnedSection>
    </>
  );
}
