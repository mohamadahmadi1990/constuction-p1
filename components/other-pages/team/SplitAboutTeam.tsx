import UkiyoParallax from "@/components/animations/UkiyoParallax";
import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import Link from "next/link";
import Image from "next/image";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import { TEAM_IMAGES, TEAM_MANIFEST_TEXT, TEAM_VALUES } from "./teamContent";

export default function SplitAboutTeam() {
  return (
    <BlurSection
      id="about-team"
      className="mxd-section bg-color-base padding-top-manifest-m"
    >
      <div className="mxd-container grid-l-container">
        {/* Block - Manifest Large Start */}
        <div className="mxd-block">
          <div className="mxd-section-manifest pre-grid-xl">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 mxd-grid-item">
                  <div className="mxd-section-manifest__wrap wrap-text-m">
                    <div className="mxd-section-manifest__text manifest-text-m">
                      <Link data-cursor-text="About us" href="/about-us">
                        <CommonAnimatedText
                          as="span"
                          className="manifest manifest-m mxd-split-lines active-cursor-permanent"
                          animation="splitLines"
                        >
                          {TEAM_MANIFEST_TEXT.lead}
                          <span>{TEAM_MANIFEST_TEXT.span}</span>
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
        {/* Block - About Team Start */}
        <div className="mxd-block">
          <div className="mxd-about-team">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {/* column #01 */}
                <div className="col-12 col-xl-6 mxd-grid-item">
                  <div className="mxd-about-team__img">
                    <UkiyoParallax
                      className="parallax-img-small"
                      scale={1.2}
                      speed={1.5}
                      externalRAF={false}
                    >
                      <Image
                        alt={TEAM_IMAGES.splitPortrait.alt}
                        src={TEAM_IMAGES.splitPortrait.src}
                        width={TEAM_IMAGES.splitPortrait.width}
                        height={TEAM_IMAGES.splitPortrait.height}
                      />
                    </UkiyoParallax>
                  </div>
                </div>
                {/* column #02 */}
                <div className="col-12 col-xl-6 mxd-grid-item">
                  <div className="mxd-about-team__data">
                    <div className="mxd-about-team__img">
                      <UkiyoParallax
                        className="parallax-img-small"
                        scale={1.2}
                        speed={1.5}
                        externalRAF={false}
                      >
                        <Image
                          alt={TEAM_IMAGES.splitWorkspace.alt}
                          src={TEAM_IMAGES.splitWorkspace.src}
                          width={TEAM_IMAGES.splitWorkspace.width}
                          height={TEAM_IMAGES.splitWorkspace.height}
                        />
                      </UkiyoParallax>
                    </div>
                    <div className="mxd-about-team__info fullheight-xl">
                      <div className="mxd-split-descr__wrap">
                        <div className="mxd-split-descr__content margin-bottom-l">
                          <CommonAnimatedText
                            as="p"
                            className="t-bold t-large mxd-split-lines"
                            animation="splitLines"
                          >
                            {TEAM_MANIFEST_TEXT.detailLead}
                            <span>{TEAM_MANIFEST_TEXT.detailSpan}</span>
                          </CommonAnimatedText>
                        </div>
                        <div className="mxd-split-descr__tags">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-6 col-md-6 col-xl-4">
                                {TEAM_VALUES.slice(0, 3).map((value) => (
                                  <CommonScrollAnimated
                                    key={value}
                                    className="tag meta-tag tag-m anim-uni-in-up"
                                    as="span"
                                    animation="inUp"
                                  >
                                    <TextScramble className="mxd-scramble">
                                      {value}
                                    </TextScramble>
                                  </CommonScrollAnimated>
                                ))}
                              </div>
                              <div className="col-6 col-md-6 col-xl-4">
                                {TEAM_VALUES.slice(3).map((value) => (
                                  <CommonScrollAnimated
                                    key={value}
                                    className="tag meta-tag tag-m anim-uni-in-up"
                                    as="span"
                                    animation="inUp"
                                  >
                                    <TextScramble className="mxd-scramble">
                                      {value}
                                    </TextScramble>
                                  </CommonScrollAnimated>
                                ))}
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
        </div>
        {/* Block - About Team End */}
      </div>
    </BlurSection>
  );
}
