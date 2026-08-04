"use client";

import PinnedSection from "@/components/animations/PinnedSection";
import Link from "next/link";
import Image from "next/image";
import {
  CommonScrollAnimated,
  CommonCardBatchAnimated,
} from "@/components/animations/CommonScrollAnimated";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
export default function BlogPreview() {
  return (
    <>
      <PinnedSection blurSection className="mxd-section padding-bottom-preview">
        <PinnedSection.Inner>
          <div className="mxd-container grid-s-container">
            {/* Block - Section Title v04 Start */}
            <div className="mxd-block">
              <div className="mxd-section-title pre-subtitle-s">
                <div className="container-fluid p-0">
                  <div className="row g-0 d-flex flex-column-reverse flex-xl-row">
                    <div className="col-12 col-xl-8 mxd-grid-item-s">
                      <div className="mxd-section-title__title">
                      <CommonAnimatedText
                        as="h2"
                        className="reveal-type"
                        animation="revealType"
                      >
                        Planning notes
                        <br />
                        &amp; site insights
                      </CommonAnimatedText>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 mxd-grid-item-s">
                      <div className="mxd-section-title__data top-controls">
                        <CommonScrollAnimated
                          className="mxd-section-title__controls pre-title justify-end anim-uni-in-up"
                          as="div"
                          animation="inUp"
                        >
                          <Link
                            className="btn btn-line btn-line-default"
                            href={`/blog-standard`}
                          >
                            <TextScramble className="btn-caption mxd-scramble">
                              All Articles
                            </TextScramble>
                          </Link>
                        </CommonScrollAnimated>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Section Title v04 End */}
            {/* Block - Blog Preview Grid x4 Start */}
            <div className="mxd-block">
              <div className="mxd-blog-grid">
                <div className="container-fluid p-0">
                  <div className="row g-0 mxd-blog-grid__gallery">
                    {/* item */}
                    <CommonCardBatchAnimated
                      className="col-12 col-lg-3 mxd-blog-item mxd-blog-item-s animate-card-4"
                      as="div"
                      columns={4}
                    >
                      <div className="mxd-blog-item__date">
                        <span className="meta-date">12 February, 2026</span>
                      </div>
                      <Link
                        className="mxd-blog-item__media active-cursor-permanent"
                        data-cursor-text="Read Post"
                        href={`/blog-article`}
                      >
                        <Image
                          className=""
                          alt="Blog Preview Image"
                          src="/img/blog/preview/grid-x3/pr-01.webp"
                          width={1170}
                          height={800}
                        />
                      </Link>
                      <div className="mxd-blog-item__caption">
                        <div className="mxd-blog-item__title">
                          <Link className="blog-name-s" href={`/blog-article`}>
                            What to define before a custom home moves into drawings
                          </Link>
                        </div>
                      </div>
                    </CommonCardBatchAnimated>
                    {/* item */}
                    <CommonCardBatchAnimated
                      className="col-12 col-lg-3 mxd-blog-item mxd-blog-item-s animate-card-4"
                      as="div"
                      columns={4}
                    >
                      <div className="mxd-blog-item__date">
                        <span className="meta-date">04 March, 2026</span>
                      </div>
                      <Link
                        className="mxd-blog-item__media active-cursor-permanent"
                        data-cursor-text="Read Post"
                        href={`/blog-article`}
                      >
                        <Image
                          className=""
                          alt="Blog Preview Image"
                          src="/img/blog/preview/grid-x3/pr-02.webp"
                          width={1200}
                          height={1200}
                        />
                      </Link>
                      <div className="mxd-blog-item__caption">
                        <div className="mxd-blog-item__title">
                          <Link className="blog-name-s" href={`/blog-article`}>
                            Why early finish selections protect budget, schedule, and approvals
                          </Link>
                        </div>
                      </div>
                    </CommonCardBatchAnimated>
                    {/* item */}
                    <CommonCardBatchAnimated
                      className="col-12 col-lg-3 mxd-blog-item mxd-blog-item-s animate-card-4"
                      as="div"
                      columns={4}
                    >
                      <div className="mxd-blog-item__date">
                        <span className="meta-date">21 April, 2026</span>
                      </div>
                      <Link
                        className="mxd-blog-item__media active-cursor-permanent"
                        data-cursor-text="Read Post"
                        href={`/blog-article`}
                      >
                        <Image
                          className=""
                          alt="Blog Preview Image"
                          src="/img/blog/preview/grid-x3/pr-04.webp"
                          width={853}
                          height={1280}
                        />
                      </Link>
                      <div className="mxd-blog-item__caption">
                        <div className="mxd-blog-item__title">
                          <Link className="blog-name-s" href={`/blog-article`}>
                            Coordinating commercial fit-outs while the business stays operational
                          </Link>
                        </div>
                      </div>
                    </CommonCardBatchAnimated>
                    {/* item */}
                    <CommonCardBatchAnimated
                      className="col-12 col-lg-3 mxd-blog-item mxd-blog-item-s animate-card-4"
                      as="div"
                      columns={4}
                    >
                      <div className="mxd-blog-item__date">
                        <span className="meta-date">09 May, 2026</span>
                      </div>
                      <Link
                        className="mxd-blog-item__media active-cursor-permanent"
                        data-cursor-text="Read Post"
                        href={`/blog-article`}
                      >
                        <Image
                          className=""
                          alt="Blog Preview Image"
                          src="/img/blog/preview/grid-x3/pr-03.webp"
                          width={1423}
                          height={800}
                        />
                      </Link>
                      <div className="mxd-blog-item__caption">
                        <div className="mxd-blog-item__title">
                          <Link className="blog-name-s" href={`/blog-article`}>
                            Renovation permits, sequencing, and how to prepare a site properly
                          </Link>
                        </div>
                      </div>
                    </CommonCardBatchAnimated>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Blog Preview Grid x4 End */}
          </div>
          <PinnedSection.Trigger />
        </PinnedSection.Inner>
      </PinnedSection>
    </>
  );
}
