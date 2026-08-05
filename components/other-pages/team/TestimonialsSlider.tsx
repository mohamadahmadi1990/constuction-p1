import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
import TestimonialsSwiperBlock from "@/components/common/testimonials/TestimonialsSwiperBlock";
import { TEAM_TESTIMONIAL_SLIDES, TEAM_VALUES } from "./teamContent";

export default function TestimonialsSlider() {
  return (
    <BlurSection className="mxd-section padding-top-title-mobile padding-bottom-tag-m">
      <div className="mxd-container fullwidth-container">
        {/* Block - Section Title & Testimonials Slider Start */}
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              {/* title part */}
              <div className="col-12 col-xl-5">
                <div className="mxd-container">
                  <div className="mxd-section-title pre-grid-xl-mobile">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12">
                          <div className="mxd-section-title__title">
                            <CommonAnimatedText
                              as="h2"
                              className="reveal-type"
                              animation="revealType"
                            >
                              What clients value
                            </CommonAnimatedText>
                          </div>
                          <CommonScrollAnimated
                            className="mxd-section-title__image anim-uni-in-up"
                            as="div"
                            animation="inUp"
                          >
                            <div className="mxd-section-title__image-link d-flex flex-wrap gap-2">
                              {TEAM_VALUES.slice(0, 4).map((value) => (
                                <TextScramble
                                  key={value}
                                  className="tag tag-m tag-medium mxd-scramble"
                                >
                                  {value}
                                </TextScramble>
                              ))}
                            </div>
                          </CommonScrollAnimated>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* slider part */}
              <div className="col-12 col-xl-7">
                {/* Testimonials Slider Start */}
                <CommonScrollAnimated
                  className="testimonials-slider overflow-hidden anim-uni-in-up"
                  as="div"
                  animation="inUp"
                >
                  <TestimonialsSwiperBlock slides={TEAM_TESTIMONIAL_SLIDES} />
                </CommonScrollAnimated>
                {/* Testimonials Slider End */}
              </div>
            </div>
          </div>
        </div>
        {/* Block - Section Title & Testimonials Slider End */}
      </div>
    </BlurSection>
  );
}
