import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import { ArrowUpRightIcon } from "@/components/icons/UiIcons";

const CONTACT_LINKS = [
  {
    number: "[01]",
    label: "New Home Construction",
    href: "mailto:hello@azurio.com?subject=New%20Home%20Construction%20Inquiry",
  },
  {
    number: "[02]",
    label: "Renovations & Additions",
    href: "mailto:hello@azurio.com?subject=Renovation%20and%20Addition%20Inquiry",
  },
  {
    number: "[03]",
    label: "Commercial / Multi-Unit",
    href: "mailto:hello@azurio.com?subject=Commercial%20and%20Multi-Unit%20Inquiry",
  },
  {
    number: "[04]",
    label: "Book a Consultation",
    href: "tel:+12127089400",
  },
  {
    number: "[05]",
    label: "General Office Contact",
    href: "mailto:hello@azurio.com?subject=General%20Office%20Contact",
  },
];

export default function Socials() {
  return (
    <>
      <div className="mxd-section bg-color-accent padding-top-title padding-bottom-default">
        <div className="mxd-container grid-l-container">
          {/* Block - Section Title & Socials Start */}
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item">
                  {/* section title */}
                  <div className="mxd-section-title">
                    <div className="mxd-section-title__title pre-grid-split-xl">
                      <CommonAnimatedText
                        as="h2"
                        className="mxd-split-lines accent"
                        animation="splitLines"
                      >
                        Reach the studio
                      </CommonAnimatedText>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item">
                  {/* socials list */}
                  <div className="mxd-socials-list">
                    {CONTACT_LINKS.map((item, index) => (
                      <a
                        key={item.number}
                        className={`socials-list__item slide-right-up${index === 0 ? " no-margin" : ""}`}
                        href={item.href}
                      >
                        <CommonScrollAnimated
                          className="socials-list__divider accent divider-top anim-uni-clip-in"
                          as="div"
                          animation="clipIn"
                        />
                        <div className="socials-list__info">
                          <CommonScrollAnimated
                            className="socials-list__number accent anim-uni-slide-down"
                            as="div"
                            animation="slideDownLine"
                          >
                            <span>{item.number}</span>
                          </CommonScrollAnimated>
                          <CommonScrollAnimated
                            className="socials-list__name accent anim-uni-slide-down"
                            as="div"
                            animation="slideDownLine"
                          >
                            <span>{item.label}</span>
                          </CommonScrollAnimated>
                        </div>
                        <CommonScrollAnimated
                          className="socials-list__arrow accent anim-uni-slide-down"
                          as="div"
                          animation="slideDownLine"
                        >
                          <i>
                            <ArrowUpRightIcon />
                          </i>
                        </CommonScrollAnimated>
                        <CommonScrollAnimated
                          className="socials-list__divider accent divider-bottom anim-uni-clip-in"
                          as="div"
                          animation="clipIn"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Section Title & Socials End */}
        </div>
      </div>
    </>
  );
}
