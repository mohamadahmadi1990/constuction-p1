"use client";

import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import Image from "next/image";
import TextScramble from "@/components/animations/TextScramble";
import Link from "next/link";
import { TEAM_MEMBERS } from "./teamContent";

export default function TeamList() {
  return (
    <BlurSection className="mxd-section bg-color-base padding-top-title padding-bottom-tags-mobile">
      <div className="mxd-container grid-l-container">
        {/* Block - Section Title v03 Start */}
        <div className="mxd-block">
          <div className="mxd-section-title pre-grid">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-9 mxd-grid-item">
                  <div className="mxd-section-title__title pre-caption">
                    <CommonAnimatedText
                      as="h2"
                      className="reveal-type"
                      animation="revealType"
                    >
                      Design leaders
                      <br />
                      and field operators
                    </CommonAnimatedText>
                  </div>
                </div>
                <div className="col-12 col-xl-3 mxd-grid-item">
                  <div className="mxd-section-title__data top-caption">
                    <div className="mxd-section-title__caption">
                      <CommonAnimatedText
                        as="p"
                        className="t-bold t-large mxd-split-lines"
                        animation="splitLines"
                      >
                        Architects, planners, and construction leads working
                        together <span>from briefing through handover.</span>
                      </CommonAnimatedText>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - Section Title v03 End */}
        {/* Block - Team List Start */}
        <div className="mxd-block">
          <div className="mxd-team-list">
            {TEAM_MEMBERS.map((member) => (
              <div className="mxd-team-list__item" key={member.name}>
                <div className="container-fluid p-0 mxd-team-list__inner">
                  <div className="row g-0 d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-3 mxd-grid-item order-2 order-md-1">
                      <div className="mxd-team-list__position">
                        <p>{member.role}</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 mxd-grid-item order-1 order-md-2">
                      <div className="mxd-team-list__data">
                        <div className="mxd-team-list__photo">
                          <Image
                            alt={member.photo.alt}
                            src={member.photo.src}
                            width={member.photo.width}
                            height={member.photo.height}
                          />
                        </div>
                        <div className="mxd-team-list__name">
                          <p>{member.name}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3 mxd-grid-item order-3 order-md-3">
                      <div className="mxd-team-list__socials">
                        <ul>
                          {member.specialties.map((specialty) => (
                            <li key={`${member.name}-${specialty}`}>
                              <Link href="/services">
                                <TextScramble className="mxd-scramble">
                                  {specialty}
                                </TextScramble>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Block - Team List End */}
      </div>
    </BlurSection>
  );
}
