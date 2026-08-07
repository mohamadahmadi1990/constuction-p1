import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
export default function SectionTitle() {
  return (
    <>
      <BlurSection className="mxd-section bg-color-base padding-top-title padding-bottom-tag-m">
        <div className="mxd-container grid-l-container">
          {/* Block - Section Title & Text Block Start */}
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item">
                  {/* section title */}
                  <div className="mxd-section-title">
                    <div className="mxd-section-title__title pre-caption">
                      <CommonAnimatedText
                        as="h2"
                        className="mxd-split-lines"
                        animation="splitLines"
                      >
                        Meetings tailored to your project stage
                      </CommonAnimatedText>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item">
                  {/* paragraph */}
                  <div className="mxd-section-title__paragraph">
                    <CommonAnimatedText
                      as="p"
                      className="t-bold t-large mxd-split-lines"
                      animation="splitLines"
                    >
                      Whether you are comparing sites, refining a renovation
                      scope, or preparing for permit-ready coordination,
                      <span>
                        we shape the first conversation around practical next
                        steps, timelines, and budget decisions.
                      </span>
                    </CommonAnimatedText>
                  </div>
                  {/* contact data */}
                  <div className="mxd-section-title__datalist">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        {/* contact data item */}
                        <div className="col-12 col-md-6 col-xl-5 datalist__item">
                          <div className="datalist__title">
                            <CommonScrollAnimated
                              className="t-bold t-large anim-uni-in-up"
                              as="p"
                              animation="inUp"
                            >
                              Initial consultations
                            </CommonScrollAnimated>
                          </div>
                          <ul>
                            <CommonScrollAnimated
                              className="anim-uni-in-up"
                              as="li"
                              animation="inUp"
                            >
                              <a
                                className="tag tag-s-mobile"
                                href="mailto:hello@azurio.com?subject=Book%20an%20Initial%20Consultation"
                              >
                                In-person or virtual planning sessions for
                                homeowners, developers, and property managers.
                              </a>
                            </CommonScrollAnimated>
                          </ul>
                          <ul>
                            <CommonScrollAnimated
                              className="anim-uni-in-up"
                              as="li"
                              animation="inUp"
                            >
                              <a
                                href="tel:+12127089400"
                                className="tag tag-s-mobile"
                              >
                                <TextScramble className="mxd-scramble">
                                  +1 212-708-9400
                                </TextScramble>
                              </a>
                            </CommonScrollAnimated>
                            <CommonScrollAnimated
                              className="anim-uni-in-up"
                              as="li"
                              animation="inUp"
                            >
                              <a
                                href="mailto:hello@azurio.com?subject=Message%20from%20your%20site"
                                className="tag tag-s-mobile"
                              >
                                <TextScramble className="mxd-scramble">
                                  hello@azurio.com
                                </TextScramble>
                              </a>
                            </CommonScrollAnimated>
                          </ul>
                        </div>
                        {/* contact data item */}
                        <div className="col-12 col-md-6 col-xl-5 datalist__item">
                          <div className="datalist__title">
                            <CommonScrollAnimated
                              className="t-bold t-large t-caption anim-uni-in-up"
                              as="p"
                              animation="inUp"
                            >
                              Project coordination
                            </CommonScrollAnimated>
                          </div>
                          <ul>
                            <CommonScrollAnimated
                              className="anim-uni-in-up"
                              as="li"
                              animation="inUp"
                            >
                              <a
                                className="tag tag-s-mobile"
                                href="mailto:hello@azurio.com?subject=Project%20Coordination%20Request"
                              >
                                Send drawings, site photos, tender packages, or
                                timeline questions for a scoped reply.
                              </a>
                            </CommonScrollAnimated>
                          </ul>
                          <ul>
                            <CommonScrollAnimated
                              className="anim-uni-in-up"
                              as="li"
                              animation="inUp"
                            >
                              <a
                                href="tel:+15104570211"
                                className="tag tag-s-mobile"
                              >
                                <TextScramble className="mxd-scramble">
                                  +1 510-457-0211
                                </TextScramble>
                              </a>
                            </CommonScrollAnimated>
                            <CommonScrollAnimated
                              className="anim-uni-in-up"
                              as="li"
                              animation="inUp"
                            >
                              <a
                                href="mailto:hello@azurio.com?subject=Message%20from%20your%20site"
                                className="tag tag-s-mobile"
                              >
                                <TextScramble className="mxd-scramble">
                                  hello@azurio.com
                                </TextScramble>
                              </a>
                            </CommonScrollAnimated>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Section Title & Text Block End */}
        </div>
      </BlurSection>
    </>
  );
}
