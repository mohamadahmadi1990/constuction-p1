import UkiyoParallax from "@/components/animations/UkiyoParallax";
import BlurSection from "@/components/animations/BlurSection";
import Image from "next/image";

export default function ParallaxDividerVideo() {
  return (
    <>
      <BlurSection className="mxd-section">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-divider">
            <div className="mxd-divider__video">
              <UkiyoParallax
                className="video parallax-video"
                scale={1.4}
                speed={1.5}
                externalRAF={false}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  alt="Elegant commercial facade under daylight"
                  src="/img/about-us-modern/office-facade.jpg"
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
              </UkiyoParallax>
            </div>
          </div>
        </div>
      </BlurSection>
    </>
  );
}
