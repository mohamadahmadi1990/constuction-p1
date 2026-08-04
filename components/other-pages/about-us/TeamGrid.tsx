import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import Link from "next/link";
import Image from "next/image";
import {
  CommonScrollAnimated,
  CommonCardBatchAnimated,
} from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
export default function TeamGrid() {
  return (
    <>
      <BlurSection className="mxd-section padding-top-title padding-bottom-tag-m">
        <div className="mxd-container grid-l-container">
          {/* Block - Section Title v02 Start */}
          <div className="mxd-block">
            <div className="mxd-section-title pre-grid">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-8 mxd-grid-item">
                    <div className="mxd-section-title__title pre-caption">
                      <CommonAnimatedText
                        as="h2"
                        className="reveal-type"
                        animation="revealType"
                      >
                        Leadership
                        <br />
                        across the build
                      </CommonAnimatedText>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 mxd-grid-item">
                    <div className="mxd-section-title__data top-controls">
                      <CommonScrollAnimated
                        className="mxd-section-title__controls anim-uni-in-up"
                        as="div"
                        animation="inUp"
                      >
                        <Link
                          className="btn btn-line btn-line-default"
                          href={`/team`}
                        >
                          <TextScramble className="btn-caption mxd-scramble">
                            How We Work
                          </TextScramble>
                        </Link>
                      </CommonScrollAnimated>
                      <div className="mxd-section-title__caption no-max-width pre-controls">
                        <CommonAnimatedText
                          as="p"
                          className="t-bold t-large mxd-split-lines"
                          animation="splitLines"
                        >
                          A connected team leading feasibility, design
                          coordination, and on-site delivery{" "}
                          <span>
                            so every stage moves with less friction and better
                            control.
                          </span>
                        </CommonAnimatedText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Section Title v02 End */}
          {/* Block - Team Grid x3 Start */}
          <div className="mxd-block">
            <div className="mxd-team-grid">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  {/* team item */}
                  <CommonCardBatchAnimated
                    className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-team-grid__item animate-card-3"
                    as="div"
                    columns={3}
                  >
                    <div className="mxd-team-grid__inner">
                      <div className="mxd-team-grid__media">
                        <div className="mxd-team-grid__photo">
                          <Image
                            alt="Architects reviewing floor plans"
                            src="/img/about-us-modern/blueprint-meeting.jpg"
                            width={3840}
                            height={2160}
                          />
                        </div>
                        <div className="mxd-team-grid__socials">
                          <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            className="tag tag-m tag-bg permanent"
                          >
                            <TextScramble className="mxd-scramble">
                              Leadership
                            </TextScramble>
                          </a>
                          <a
                            href="/contact"
                            className="tag tag-m tag-bg permanent"
                          >
                            <TextScramble className="mxd-scramble">
                              Contact
                            </TextScramble>
                          </a>
                        </div>
                      </div>
                      <div className="mxd-team-grid__caption">
                        <div className="mxd-team-grid__name">
                          <p className="project-name-m">
                            Pre-construction strategy
                          </p>
                        </div>
                        <div className="mxd-team-grid__position">
                          <span className="tag tag-m tag-medium">
                            Feasibility, scope, budget direction
                          </span>
                        </div>
                      </div>
                    </div>
                  </CommonCardBatchAnimated>
                  {/* team item */}
                  <CommonCardBatchAnimated
                    className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-team-grid__item animate-card-3"
                    as="div"
                    columns={3}
                  >
                    <div className="mxd-team-grid__inner">
                      <div className="mxd-team-grid__media">
                        <div className="mxd-team-grid__photo">
                          <Image
                            alt="Architectural materials and finish selections"
                            src="/img/about-us-modern/material-palette.jpg"
                            width={8256}
                            height={5504}
                          />
                        </div>
                        <div className="mxd-team-grid__socials">
                          <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            className="tag tag-m tag-bg permanent"
                          >
                            <TextScramble className="mxd-scramble">
                              Design
                            </TextScramble>
                          </a>
                          <a
                            href="/contact"
                            className="tag tag-m tag-bg permanent"
                          >
                            <TextScramble className="mxd-scramble">
                              Contact
                            </TextScramble>
                          </a>
                        </div>
                      </div>
                      <div className="mxd-team-grid__caption">
                        <div className="mxd-team-grid__name">
                          <p className="project-name-m">
                            Design and permit coordination
                          </p>
                        </div>
                        <div className="mxd-team-grid__position">
                          <span className="tag tag-m tag-medium">
                            Drawings, approvals, finish decisions
                          </span>
                        </div>
                      </div>
                    </div>
                  </CommonCardBatchAnimated>
                  {/* team item */}
                  <CommonCardBatchAnimated
                    className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-team-grid__item animate-card-3"
                    as="div"
                    columns={3}
                  >
                    <div className="mxd-team-grid__inner">
                      <div className="mxd-team-grid__media">
                        <div className="mxd-team-grid__photo">
                          <Image
                            alt="Sculptural staircase in a finished interior"
                            src="/img/about-us-modern/staircase-interior.jpg"
                            width={7008}
                            height={4672}
                          />
                        </div>
                        <div className="mxd-team-grid__socials">
                          <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            className="tag tag-m tag-bg permanent"
                          >
                            <TextScramble className="mxd-scramble">
                              Delivery
                            </TextScramble>
                          </a>
                          <a
                            href="/contact"
                            className="tag tag-m tag-bg permanent"
                          >
                            <TextScramble className="mxd-scramble">
                              Contact
                            </TextScramble>
                          </a>
                        </div>
                      </div>
                      <div className="mxd-team-grid__caption">
                        <div className="mxd-team-grid__name">
                          <p className="project-name-m">
                            Site execution oversight
                          </p>
                        </div>
                        <div className="mxd-team-grid__position">
                          <span className="tag tag-m tag-medium">
                            Trade flow, quality checks, handover
                          </span>
                        </div>
                      </div>
                    </div>
                  </CommonCardBatchAnimated>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Team Grid x3 End */}
        </div>
      </BlurSection>
    </>
  );
}
