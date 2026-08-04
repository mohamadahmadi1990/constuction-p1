import Link from "next/link";
import Image from "next/image";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
export default function Awards() {
  return (
    <>
      <div className="mxd-section padding-top-subtitle-mobile">
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
                        Where experience
                        <br />
                        shows up
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
                          href={`/works-default`}
                        >
                          <TextScramble className="btn-caption mxd-scramble">
                            Explore Projects
                          </TextScramble>
                        </Link>
                      </CommonScrollAnimated>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Section Title v03 End */}
          {/* Block - Awards List Start */}
          <div className="mxd-block">
            <div className="mxd-awards">
              {/* awards item */}
              <a
                className="mxd-awards__item active-cursor-accent"
                data-cursor-text="View Work"
                href="/works-default"
              >
                <div className="container-fluid px-0 mxd-awards__inner">
                  <div className="row g-0 d-flex">
                    <div className="col-12 col-xl-4 order-2 order-xl-1 mxd-grid-item">
                      <div className="mxd-awards__title">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="p"
                          animation="inUp"
                        >
                          Custom homes and low-rise residential delivery
                        </CommonScrollAnimated>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 order-1 order-xl-2 mxd-grid-item">
                      <div className="mxd-awards__image">
                        <Image
                          alt="Refined contemporary house exterior"
                          src="/img/about-us-modern/modern-house-01.jpg"
                          width={7360}
                          height={4912}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-xl-2 order-3 mxd-grid-item">
                      <div className="mxd-awards__tags">
                        <CommonScrollAnimated
                          className="tag tag-m mxd-scramble anim-uni-in-up"
                          as="span"
                          animation="inUp"
                        >
                          Residential
                        </CommonScrollAnimated>
                        <CommonScrollAnimated
                          className="tag tag-m mxd-scramble anim-uni-in-up"
                          as="span"
                          animation="inUp"
                        >
                          Design-build
                        </CommonScrollAnimated>
                      </div>
                    </div>
                    <div className="col-12 col-xl-2 order-4 mxd-grid-item">
                      <div className="mxd-awards__date">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="p"
                          animation="inUp"
                        >
                          Residential
                        </CommonScrollAnimated>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              {/* awards item */}
              <a
                className="mxd-awards__item active-cursor-accent"
                data-cursor-text="View Work"
                href="/services"
              >
                <div className="container-fluid px-0 mxd-awards__inner">
                  <div className="row g-0 d-flex">
                    <div className="col-12 col-xl-4 order-2 order-xl-1 mxd-grid-item">
                      <div className="mxd-awards__title">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="p"
                          animation="inUp"
                        >
                          Renovations, additions, and interior upgrades
                        </CommonScrollAnimated>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 order-1 order-xl-2 mxd-grid-item">
                      <div className="mxd-awards__image">
                        <Image
                          alt="Interior finish and material palette"
                          src="/img/about-us-modern/material-palette.jpg"
                          width={8256}
                          height={5504}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-xl-2 order-3 mxd-grid-item">
                      <div className="mxd-awards__tags">
                        <CommonScrollAnimated
                          className="tag tag-m mxd-scramble anim-uni-in-up"
                          as="span"
                          animation="inUp"
                        >
                          Renovation
                        </CommonScrollAnimated>
                        <CommonScrollAnimated
                          className="tag tag-m mxd-scramble anim-uni-in-up"
                          as="span"
                          animation="inUp"
                        >
                          In-house finishing
                        </CommonScrollAnimated>
                      </div>
                    </div>
                    <div className="col-12 col-xl-2 order-4 mxd-grid-item">
                      <div className="mxd-awards__date">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="p"
                          animation="inUp"
                        >
                          Interiors
                        </CommonScrollAnimated>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              {/* awards item */}
              <a
                className="mxd-awards__item active-cursor-accent"
                data-cursor-text="View Work"
                href="/works-default"
              >
                <div className="container-fluid px-0 mxd-awards__inner">
                  <div className="row g-0">
                    <div className="col-12 col-xl-4 order-2 order-xl-1 mxd-grid-item">
                      <div className="mxd-awards__title">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="p"
                          animation="inUp"
                        >
                          Commercial fit-outs and tenant improvements
                        </CommonScrollAnimated>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 order-1 order-xl-2 mxd-grid-item">
                      <div className="mxd-awards__image">
                        <Image
                          alt="Elegant commercial facade with a modern grid"
                          src="/img/about-us-modern/office-facade.jpg"
                          width={3024}
                          height={4032}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-xl-2 order-3 mxd-grid-item">
                      <div className="mxd-awards__tags">
                        <CommonScrollAnimated
                          className="tag tag-m mxd-scramble anim-uni-in-up"
                          as="span"
                          animation="inUp"
                        >
                          Commercial
                        </CommonScrollAnimated>
                        <CommonScrollAnimated
                          className="tag tag-m mxd-scramble anim-uni-in-up"
                          as="span"
                          animation="inUp"
                        >
                          Coordination
                        </CommonScrollAnimated>
                      </div>
                    </div>
                    <div className="col-12 col-xl-2 order-4 mxd-grid-item">
                      <div className="mxd-awards__date">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="p"
                          animation="inUp"
                        >
                          Commercial
                        </CommonScrollAnimated>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              {/* awards item */}
              <a
                className="mxd-awards__item active-cursor-accent"
                data-cursor-text="Learn More"
                href="/about-us"
              >
                <div className="container-fluid px-0 mxd-awards__inner">
                  <div className="row g-0">
                    <div className="col-12 col-xl-4 order-2 order-xl-1 mxd-grid-item">
                      <div className="mxd-awards__title">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="p"
                          animation="inUp"
                        >
                          Permit sets, technical coordination, and site planning
                        </CommonScrollAnimated>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 order-1 order-xl-2 mxd-grid-item">
                      <div className="mxd-awards__image">
                        <Image
                          alt="Architects reviewing plans in a studio setting"
                          src="/img/about-us-modern/blueprint-meeting.jpg"
                          width={3840}
                          height={2160}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-xl-2 order-3 mxd-grid-item">
                      <div className="mxd-awards__tags">
                        <CommonScrollAnimated
                          className="tag tag-m mxd-scramble anim-uni-in-up"
                          as="span"
                          animation="inUp"
                        >
                          Planning
                        </CommonScrollAnimated>
                        <CommonScrollAnimated
                          className="tag tag-m mxd-scramble anim-uni-in-up"
                          as="span"
                          animation="inUp"
                        >
                          Permits
                        </CommonScrollAnimated>
                      </div>
                    </div>
                    <div className="col-12 col-xl-2 order-4 mxd-grid-item">
                      <div className="mxd-awards__date">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="p"
                          animation="inUp"
                        >
                          Planning
                        </CommonScrollAnimated>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              {/* awards item */}
              <a
                className="mxd-awards__item active-cursor-accent"
                data-cursor-text="View Service"
                href="/services"
              >
                <div className="container-fluid px-0 mxd-awards__inner">
                  <div className="row g-0">
                    <div className="col-12 col-xl-4 order-2 order-xl-1 mxd-grid-item">
                      <div className="mxd-awards__title">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="p"
                          animation="inUp"
                        >
                          Multiplex and multi-unit project management
                        </CommonScrollAnimated>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 order-1 order-xl-2 mxd-grid-item">
                      <div className="mxd-awards__image">
                        <Image
                          alt="Minimal dark exterior for a residential project"
                          src="/img/about-us-modern/modern-house-02.jpg"
                          width={7360}
                          height={4912}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-xl-2 order-3 mxd-grid-item">
                      <div className="mxd-awards__tags">
                        <CommonScrollAnimated
                          className="tag tag-m mxd-scramble anim-uni-in-up"
                          as="span"
                          animation="inUp"
                        >
                          Multi-unit
                        </CommonScrollAnimated>
                        <CommonScrollAnimated
                          className="tag tag-m mxd-scramble anim-uni-in-up"
                          as="span"
                          animation="inUp"
                        >
                          Site management
                        </CommonScrollAnimated>
                      </div>
                    </div>
                    <div className="col-12 col-xl-2 order-4 mxd-grid-item">
                      <div className="mxd-awards__date">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="p"
                          animation="inUp"
                        >
                          Multi-unit
                        </CommonScrollAnimated>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              {/* awards item */}
              <a
                className="mxd-awards__item active-cursor-accent"
                data-cursor-text="View Details"
                href="/contact"
              >
                <div className="container-fluid px-0 mxd-awards__inner">
                  <div className="row g-0">
                    <div className="col-12 col-xl-4 order-2 order-xl-1 mxd-grid-item">
                      <div className="mxd-awards__title">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="p"
                          animation="inUp"
                        >
                          Interior detailing, finishes, and client selections
                        </CommonScrollAnimated>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 order-1 order-xl-2 mxd-grid-item">
                      <div className="mxd-awards__image">
                        <Image
                          alt="Curved stair detail in a modern interior"
                          src="/img/about-us-modern/staircase-interior.jpg"
                          width={7008}
                          height={4672}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-xl-2 order-3 mxd-grid-item">
                      <div className="mxd-awards__tags">
                        <CommonScrollAnimated
                          className="tag tag-m mxd-scramble anim-uni-in-up"
                          as="span"
                          animation="inUp"
                        >
                          Interiors
                        </CommonScrollAnimated>
                        <CommonScrollAnimated
                          className="tag tag-m mxd-scramble anim-uni-in-up"
                          as="span"
                          animation="inUp"
                        >
                          Materials
                        </CommonScrollAnimated>
                        <CommonScrollAnimated
                          className="tag tag-m mxd-scramble anim-uni-in-up"
                          as="span"
                          animation="inUp"
                        >
                          Specifications
                        </CommonScrollAnimated>
                      </div>
                    </div>
                    <div className="col-12 col-xl-2 order-4 mxd-grid-item">
                      <div className="mxd-awards__date">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="p"
                          animation="inUp"
                        >
                          Finishes
                        </CommonScrollAnimated>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/* Block - Awards List End */}
        </div>
      </div>
    </>
  );
}
