import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import Link from "next/link";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
export default function Process() {
  return (
    <>
      <BlurSection
        id="process"
        className="mxd-section padding-top-manifest-m padding-bottom-tag-m-desktop"
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
                        <Link
                          data-cursor-text="View Works"
                          href={`/works-default`}
                        >
                          <CommonAnimatedText
                            as="span"
                            className="manifest manifest-m mxd-split-lines active-cursor-accent"
                            animation="splitLines"
                          >
                            We approach every project with the precision of an
                            architectural studio and the accountability of a
                            construction team.
                            <span>
                              From the first briefing to final handover, we
                              keep design intent, buildability, budget, and
                              site execution aligned.
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
                  <div className="col-12 col-xl-4 mxd-process-points__item mxd-grid-item">
                    <CommonScrollAnimated
                      className="mxd-process-points__divider top anim-uni-clip-in"
                      as="div"
                      animation="clipIn"
                    />
                    <CommonScrollAnimated
                      className="mxd-process-points__title anim-uni-in-up"
                      as="div"
                      animation="inUp"
                    >
                      <div className="mxd-process-points__icon">
                        <i className="ph ph-crosshair" />
                      </div>
                      <p>Discovery &amp; Planning</p>
                    </CommonScrollAnimated>
                    <div className="mxd-process-points__descr">
                      <CommonAnimatedText
                        as="p"
                        className="t-medium mxd-split-lines"
                        animation="splitLines"
                      >
                        We define scope, site conditions, budget direction, and
                        project priorities before drawings, permits, and site
                        work move forward.
                      </CommonAnimatedText>
                    </div>
                    <CommonScrollAnimated
                      className="mxd-process-points__time anim-uni-in-up"
                      as="div"
                      animation="inUp"
                    >
                      <span className="tag tag-m meta-time">
                        Early phase alignment
                      </span>
                    </CommonScrollAnimated>
                  </div>
                  {/* process item */}
                  <div className="col-12 col-xl-4 mxd-process-points__item mxd-grid-item">
                    <CommonScrollAnimated
                      className="mxd-process-points__divider top anim-uni-clip-in"
                      as="div"
                      animation="clipIn"
                    />
                    <CommonScrollAnimated
                      className="mxd-process-points__title anim-uni-in-up"
                      as="div"
                      animation="inUp"
                    >
                      <div className="mxd-process-points__icon">
                        <i className="ph ph-bezier-curve" />
                      </div>
                      <p>Design &amp; Coordination</p>
                    </CommonScrollAnimated>
                    <div className="mxd-process-points__descr">
                      <CommonAnimatedText
                        as="p"
                        className="t-medium mxd-split-lines"
                        animation="splitLines"
                      >
                        We translate project goals into layouts, technical
                        details, permit-ready documentation, and coordinated
                        material selections.
                      </CommonAnimatedText>
                    </div>
                    <CommonScrollAnimated
                      className="mxd-process-points__time anim-uni-in-up"
                      as="div"
                      animation="inUp"
                    >
                      <span className="tag tag-m meta-time">
                        Drawings, permits, selections
                      </span>
                    </CommonScrollAnimated>
                  </div>
                  {/* process item */}
                  <div className="col-12 col-xl-4 mxd-process-points__item mxd-grid-item">
                    <CommonScrollAnimated
                      className="mxd-process-points__divider top anim-uni-clip-in"
                      as="div"
                      animation="clipIn"
                    />
                    <CommonScrollAnimated
                      className="mxd-process-points__title anim-uni-in-up"
                      as="div"
                      animation="inUp"
                    >
                      <div className="mxd-process-points__icon">
                        <i className="ph ph-codesandbox-logo" />
                      </div>
                      <p>Construction Delivery</p>
                    </CommonScrollAnimated>
                    <div className="mxd-process-points__descr">
                      <CommonAnimatedText
                        as="p"
                        className="t-medium mxd-split-lines"
                        animation="splitLines"
                      >
                        Our team directs trades, schedule, quality control, and
                        handover so the finished space performs as designed and
                        built.
                      </CommonAnimatedText>
                    </div>
                    <CommonScrollAnimated
                      className="mxd-process-points__time anim-uni-in-up"
                      as="div"
                      animation="inUp"
                    >
                      <span className="tag tag-m meta-time">
                        Build, supervise, deliver
                      </span>
                    </CommonScrollAnimated>
                    <CommonScrollAnimated
                      className="mxd-process-points__divider bottom anim-uni-clip-in"
                      as="div"
                      animation="clipIn"
                    />
                  </div>
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
