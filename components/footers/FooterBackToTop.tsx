"use client";

import BackToTop from "@/components/common/BackToTop";
import TextScramble from "@/components/animations/TextScramble";
import { ArrowUpIcon } from "@/components/icons/UiIcons";

/** Same markup as the React Nextjs Template; click uses Lenis (`mxdToTop` parity). */
export default function FooterBackToTop() {
  return (
    <BackToTop className="btn btn-line-icon btn-line-default slide-up">
      <TextScramble className="btn-caption mxd-scramble">
        Back to Top
      </TextScramble>
      <i>
        <ArrowUpIcon />
      </i>
    </BackToTop>
  );
}
