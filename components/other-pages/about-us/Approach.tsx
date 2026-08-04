import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import MxdStatsLineItem from "@/components/animations/MxdStatsLineItem";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
export default function Approach() {
  return (
    <>
      <BlurSection className="mxd-section padding-top-subtitle padding-bottom-tag-m-subtitle">
        <div className="mxd-container grid-s-container">
          {/* Block - Split List v01 Start */}
          <div className="mxd-block">
            <div className="mxd-block-split">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-6 mxd-grid-item-s mxd-block-split__item manifest-item">
                    <div className="mxd-block-split__inner">
                      <div className="mxd-block-split__subtitle pre-manifest">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="p"
                          animation="inUp"
                        >
                          <span>/ Approach</span>
                        </CommonScrollAnimated>
                      </div>
                      <div className="mxd-block-split__manifest">
                        <CommonAnimatedText
                          as="p"
                          className="manifest manifest-s mxd-split-lines"
                          animation="splitLines"
                        >
                          We believe the strongest projects happen when
                          architecture, construction, and budget decisions move
                          together from the start.
                          <span>
                            That alignment protects design intent, reduces
                            friction on site, and creates a calmer path from
                            concept to completion.
                          </span>
                        </CommonAnimatedText>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 mxd-grid-item-s mxd-block-split__item manifest-item">
                    <div className="mxd-block-split__inner">
                      <div className="mxd-block-split__subtitle pre-grid">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="p"
                          animation="inUp"
                        >
                          <span>/ Key stats</span>
                        </CommonScrollAnimated>
                      </div>
                      {/* Statistics Lines Start */}
                      <div className="mxd-stats-lines">
                        {/* statistics single item */}
                        <MxdStatsLineItem>
                          <div className="mxd-stats-lines__number">
                            <p id="stats-counter-1">01</p>
                          </div>
                          <div className="mxd-stats-lines__caption">
                            <p>One coordinated workflow from briefing and drawings to site delivery and handover</p>
                          </div>
                        </MxdStatsLineItem>
                        {/* statistics single item */}
                        <MxdStatsLineItem>
                          <div className="mxd-stats-lines__number">
                            <p id="stats-counter-2">02</p>
                          </div>
                          <div className="mxd-stats-lines__caption">
                            <p>Residential expertise across custom homes, renovations, and low-rise multi-unit work</p>
                          </div>
                        </MxdStatsLineItem>
                        {/* statistics single item */}
                        <MxdStatsLineItem>
                          <div className="mxd-stats-lines__number">
                            <p id="stats-counter-3">03</p>
                          </div>
                          <div className="mxd-stats-lines__caption">
                            <p>Commercial coordination for fit-outs, tenant improvements, and interior build-outs</p>
                          </div>
                        </MxdStatsLineItem>
                        {/* statistics single item */}
                        <MxdStatsLineItem>
                          <div className="mxd-stats-lines__number">
                            <p id="stats-counter-4">04</p>
                          </div>
                          <div className="mxd-stats-lines__caption">
                            <p>Field-led execution with scheduling, quality reviews, and clear client communication</p>
                          </div>
                        </MxdStatsLineItem>
                      </div>
                      {/* Statistics Lines End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Split List v01 End */}
        </div>
      </BlurSection>
    </>
  );
}
