import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import Link from "next/link";
import {
  CommonScrollAnimated,
  CommonCardBatchAnimated,
} from "@/components/animations/CommonScrollAnimated";
export default function AboutProcess() {
  return (
    <>
      <BlurSection
        id="about"
        className="mxd-section bg-color-accent padding-top-manifest-m padding-bottom-default padding-bottom-tag-m-desktop"
      >
        <div className="mxd-container grid-l-container">
          {/* Block - Manifest Large Start */}
          <div className="mxd-block">
            <div className="mxd-section-manifest pre-points">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item">
                    <div className="mxd-section-manifest__wrap wrap-text-m">
                      <div className="mxd-section-manifest__text manifest-text-m">
                        <Link data-cursor-text="About us" href={`/about-us`}>
                          <CommonAnimatedText
                            as="span"
                            className="manifest manifest-m manifest-accent mxd-split-lines active-cursor-permanent"
                            animation="splitLines"
                          >
                            We shape residential and commercial environments with
                            a process grounded in feasibility, documentation, and
                            careful site execution.
                            <span>
                              From first sketch to final handover, every decision
                              is made to improve function, durability, and
                              timeless appeal.
                            </span>
                          </CommonAnimatedText>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Manifest Large End */}
          {/* Block - Process Points Start */}
          <div className="mxd-block">
            <div className="mxd-process-points">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  {/* process item */}
                  <CommonCardBatchAnimated
                    className="col-12 col-xl-4 mxd-process-points__item mxd-grid-item animate-card-3"
                    as="div"
                    columns={3}
                  >
                    <div className="mxd-process-points__divider top accent" />
                    <div className="mxd-process-points__title">
                      <div className="mxd-process-points__icon accent">
                        <i className="ph ph-crosshair" />
                      </div>
                      <p className="accent">Discovery</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="t-medium t-accent">
                        We align program, site conditions, budget, and schedule
                        before design moves forward, so the project starts with
                        clear priorities and a realistic path.
                      </p>
                    </div>
                    <div className="mxd-process-points__time">
                      <span className="tag tag-m tag-permanent">
                        pre-design alignment
                      </span>
                    </div>
                  </CommonCardBatchAnimated>
                  {/* process item */}
                  <CommonCardBatchAnimated
                    className="col-12 col-xl-4 mxd-process-points__item mxd-grid-item animate-card-3"
                    as="div"
                    columns={3}
                  >
                    <CommonScrollAnimated
                      className="mxd-process-points__divider top accent anim-uni-clip-in"
                      as="div"
                      animation="clipIn"
                    />
                    <div className="mxd-process-points__title">
                      <div className="mxd-process-points__icon accent">
                        <i className="ph ph-bezier-curve" />
                      </div>
                      <p className="accent">Design</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="t-medium t-accent">
                        Layout studies, facade direction, permit-ready drawings,
                        and coordinated material selections are developed with
                        both elegance and buildability in mind.
                      </p>
                    </div>
                    <div className="mxd-process-points__time">
                      <span className="tag tag-m tag-permanent">
                        drawings, permits, selections
                      </span>
                    </div>
                  </CommonCardBatchAnimated>
                  {/* process item */}
                  <CommonCardBatchAnimated
                    className="col-12 col-xl-4 mxd-process-points__item mxd-grid-item animate-card-3"
                    as="div"
                    columns={3}
                  >
                    <CommonScrollAnimated
                      className="mxd-process-points__divider top accent anim-uni-clip-in"
                      as="div"
                      animation="clipIn"
                    />
                    <div className="mxd-process-points__title">
                      <div className="mxd-process-points__icon accent">
                        <i className="ph ph-codesandbox-logo" />
                      </div>
                      <p className="accent">Delivery</p>
                    </div>
                    <div className="mxd-process-points__descr">
                      <p className="t-medium t-accent">
                        During construction we stay close to execution, site
                        coordination, and handover so the finished space
                        performs exactly as intended.
                      </p>
                    </div>
                    <div className="mxd-process-points__time">
                      <span className="tag tag-m tag-permanent">
                        build, supervise, hand over
                      </span>
                    </div>
                    <CommonScrollAnimated
                      className="mxd-process-points__divider bottom accent anim-uni-clip-in"
                      as="div"
                      animation="clipIn"
                    />
                  </CommonCardBatchAnimated>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Process Points End */}
        </div>
      </BlurSection>
    </>
  );
}
