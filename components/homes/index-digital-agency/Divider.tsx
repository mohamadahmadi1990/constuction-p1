import BlurSection from "@/components/animations/BlurSection";
import Link from "next/link";
import Image from "next/image";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import CommonCursorTrailTransparent, {
  CommonCursorTrailContent,
  CommonCursorTrailImage,
  CommonCursorTrailWrapper,
} from "@/components/animations/CommonCursorTrailTransparent";
export default function Divider() {
  return (
    <>
      <BlurSection className="mxd-section bg-color-opposite">
        <CommonCursorTrailTransparent
          as="div"
          className="cursor-trail-transparent"
        >
          {/* Effect - Cursor Trail Transparent Start */}
          <CommonCursorTrailWrapper className="mxd-trail-transparent-wrapper">
            <CommonCursorTrailContent className="mxd-trail-transparent-content">
               <CommonCursorTrailImage
                 index={0}
                 className="mxd-trail-transparent-image"
                 alt="Architectural facade detail"
                 src="/img/about-us-modern/modern-house-01.jpg"
                 width={400}
                 height={521}
               />
              <CommonCursorTrailImage
                index={1}
                className="mxd-trail-transparent-image"
                 alt="Architectural corridor"
                 src="/img/about-us-modern/glass-corridor.jpg"
                width={412}
                height={400}
              />
              <CommonCursorTrailImage
                index={2}
                className="mxd-trail-transparent-image"
                 alt="Construction drawings and hands"
                 src="/img/about-us-modern/blueprint-hands.jpg"
                width={485}
                height={400}
              />
              <CommonCursorTrailImage
                index={3}
                className="mxd-trail-transparent-image"
                 alt="Modern office facade"
                 src="/img/about-us-modern/office-facade.jpg"
                width={530}
                height={400}
              />
              <CommonCursorTrailImage
                index={4}
                className="mxd-trail-transparent-image"
                 alt="Stone and wood material palette"
                 src="/img/about-us-modern/material-palette.jpg"
                width={400}
                height={520}
              />
              <CommonCursorTrailImage
                index={5}
                className="mxd-trail-transparent-image"
                 alt="Contemporary staircase interior"
                 src="/img/about-us-modern/staircase-interior.jpg"
                width={407}
                height={400}
              />
              <CommonCursorTrailImage
                index={6}
                className="mxd-trail-transparent-image"
                 alt="Tower balcony facade"
                 src="/img/about-us-modern/curved-balcony-tower.jpg"
                width={400}
                height={480}
              />
              <CommonCursorTrailImage
                index={7}
                className="mxd-trail-transparent-image"
                 alt="Landscape and water feature"
                 src="/img/about-us-modern/villa-water-feature.jpg"
                width={637}
                height={400}
              />
              <CommonCursorTrailImage
                index={8}
                className="mxd-trail-transparent-image"
                 alt="Construction coordination meeting"
                 src="/img/about-us-modern/blueprint-meeting.jpg"
                width={400}
                height={992}
              />
            </CommonCursorTrailContent>
          </CommonCursorTrailWrapper>
          {/* Effect - Cursor Trail Transparent End */}
          {/* Divider - Divider XL Start */}
          <div className="mxd-container">
            <div className="mxd-divider-xl padding-top-subtitle padding-bottom-default">
              <div className="mxd-divider-xl__content">
                <CommonScrollAnimated
                  className="mxd-divider-xl__btngroup difference anim-uni-in-up"
                  as="div"
                  animation="inUp"
                >
                  <Link
                    className="btn btn-line btn-line-permanent"
                    href={`/contact`}
                  >
                    <TextScramble className="btn-caption mxd-scramble">
                      Start a project
                    </TextScramble>
                  </Link>
                </CommonScrollAnimated>
                <div className="mxd-divider-xl__caption difference">
                  <Link
                    className="active-cursor-accent"
                    data-cursor-text="Start Project"
                    href={`/contact`}
                  >
                    <CommonAnimatedText
                      as="h2"
                      className="permanent reveal-type"
                      animation="revealType"
                    >
                      Planning a modern home or signature commercial space?
                    </CommonAnimatedText>
                  </Link>
                </div>
                <div className="mxd-divider-gif">
                  <div className="mxd-divider-gif__back left accent">
                    <Image
                      alt="Construction drawing detail"
                      src="/img/about-us-modern/blueprint-hands.jpg"
                      width={640}
                      height={440}
                    />
                  </div>
                  <div className="mxd-divider-gif__front">
                    <Image
                      alt="Architectural material selections"
                      src="/img/about-us-modern/material-palette.jpg"
                      width={640}
                      height={440}
                    />
                  </div>
                  <div className="mxd-divider-gif__back right accent">
                    <Image
                      alt="Refined interior stair detail"
                      src="/img/about-us-modern/steel-staircase.jpg"
                      width={640}
                      height={440}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Divider - Divider XL End */}
        </CommonCursorTrailTransparent>
      </BlurSection>
    </>
  );
}
