import BlurSection from "@/components/animations/BlurSection";
import Image from "next/image";
import Link from "next/link";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import {
  type PortfolioImage,
  type WorksDefaultProjectNote,
  WORKS_DEFAULT_NOTE_TAGS,
  WORKS_DEFAULT_PROJECT_NOTES,
  WORKS_DEFAULT_SUPPORT_IMAGES,
} from "./portfolioContent";

function ProjectNoteCard({
  note,
  fullHeight = false,
}: {
  note: WorksDefaultProjectNote;
  fullHeight?: boolean;
}) {
  return (
    <div className={`mxd-testimonials-card${fullHeight ? " fullheight" : ""}`}>
      <div className="mxd-testimonials-card__content">
        <div className="mxd-testimonials-card__controls">
          <div className="mxd-testimonials-card__quote">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 4.4 3.3">
              <path d="M1.1,1.1v2.2H0V1.1h1.1ZM1.1,1.1V0h1.1v1.1h-1.1ZM3.3,1.1v2.2h-1.1V1.1h1.1ZM4.4,0v1.1h-1.1V0h1.1Z" />
            </svg>
          </div>
          <div className="mxd-testimonials-card__btngroup">
            <Link
              className="btn btn-line-icon btn-line-icon-small btn-line-default slide-right"
              href="/contact"
            >
              <TextScramble className="btn-caption mxd-scramble">
                Discuss Similar Scope
              </TextScramble>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18 18">
                  <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                </svg>
              </i>
            </Link>
          </div>
        </div>
        <p className="mxd-testimonials-card__descr">
          {note.quote} <span>{note.highlight}</span>
        </p>
      </div>
      <div className="mxd-testimonials-card__author">
        <div className="mxd-testimonials-card__photo">
          <Image
            alt={note.photo.alt}
            src={note.photo.src}
            width={note.photo.width}
            height={note.photo.height}
          />
        </div>
        <div className="mxd-testimonials-card__data">
          <p className="mxd-testimonials-card__name">{note.name}</p>
          <p className="mxd-testimonials-card__position">{note.role}</p>
        </div>
      </div>
    </div>
  );
}

function ProjectImageCard({
  image,
  justifyClass,
  extraClassName = "",
}: {
  image: PortfolioImage;
  justifyClass: string;
  extraClassName?: string;
}) {
  return (
    <div className={`mxd-testimonials-image ${justifyClass}${extraClassName ? ` ${extraClassName}` : ""}`}>
      <CommonScrollAnimated
        className="mxd-testimonials-image__wrap mxd-clip-image"
        as="div"
        animation="clipImage"
      >
        <Image
          alt={image.alt}
          src={image.src}
          width={image.width}
          height={image.height}
        />
      </CommonScrollAnimated>
    </div>
  );
}

export default function TestimonialsSticky() {
  const [note1, note2, note3, note4, note5] = WORKS_DEFAULT_PROJECT_NOTES;
  const [image1, image2, image3, image4] = WORKS_DEFAULT_SUPPORT_IMAGES;

  return (
    <BlurSection
      id="testimonials"
      className="mxd-section padding-top-title padding-bottom-default"
    >
      <div className="mxd-container grid-l-container">
        {/* Block - Testimonials Sticky Start */}
        <div className="mxd-testimonials-sticky">
          <div className="mxd-testimonials-sticky__static">
            <div className="mxd-testimonials-sticky__title">
              {/* Block - Section Title Standalone Start */}
              <div className="mxd-block">
                <div className="mxd-section-title">
                  <div className="container-fluid p-0">
                    <div className="row g-0 d-flex justify-content-center">
                      <div className="col-12 mxd-grid-item">
                        <div className="mxd-section-title__title centered">
                          <CommonAnimatedText
                            as="h2"
                            className="reveal-type"
                            animation="revealType"
                          >
                            Project notes
                            <br />
                            from the field
                          </CommonAnimatedText>
                        </div>
                        <CommonScrollAnimated
                          className="mxd-section-title__image centered anim-uni-in-up"
                          as="div"
                          animation="inUp"
                        >
                          <div className="mxd-section-title__image-link d-flex flex-wrap justify-content-center gap-2">
                            {WORKS_DEFAULT_NOTE_TAGS.map((tag) => (
                              <TextScramble
                                key={tag}
                                className="tag tag-m tag-medium mxd-scramble"
                              >
                                {tag}
                              </TextScramble>
                            ))}
                          </div>
                        </CommonScrollAnimated>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Block - Section Title Standalone End */}
            </div>
          </div>
          <div className="mxd-testimonials-sticky__scroll">
            {/* Block - Testimonials Cards Start */}
            <div className="mxd-block">
              <div className="mxd-testimonials-sticky__cards">
                <div className="mxd-testimonials-sticky__row">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-7 mxd-grid-item mxd-testimonials-sticky__column margin-bottom-mobile">
                        <ProjectNoteCard note={note1} />
                        <ProjectImageCard
                          image={image1}
                          justifyClass="justify-end"
                          extraClassName="has-padding-top"
                        />
                      </div>
                      <div className="col-12 col-xl-5 mxd-grid-item mxd-testimonials-sticky__column">
                        <ProjectNoteCard note={note2} fullHeight />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-testimonials-sticky__row">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-3 mxd-grid-item mxd-testimonials-sticky__column margin-bottom-mobile">
                        <ProjectImageCard image={image2} justifyClass="justify-end" />
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item mxd-testimonials-sticky__column">
                        <ProjectNoteCard note={note3} />
                      </div>
                      <div className="col-12 col-xl-3 mxd-grid-item mxd-testimonials-sticky__column margin-bottom-mobile">
                        <ProjectImageCard
                          image={image3}
                          justifyClass="justify-start"
                          extraClassName="has-padding-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mxd-testimonials-sticky__row">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-6 mxd-grid-item mxd-testimonials-sticky__column margin-bottom-mobile has-padding-bottom">
                        <ProjectNoteCard note={note4} fullHeight />
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item mxd-testimonials-sticky__column has-padding-top">
                        <ProjectNoteCard note={note5} />
                        <ProjectImageCard
                          image={image4}
                          justifyClass="justify-start"
                          extraClassName="has-padding-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Testimonials Cards End */}
          </div>
        </div>
        {/* Block - Testimonials Sticky End */}
      </div>
    </BlurSection>
  );
}
