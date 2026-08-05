import { Metadata } from "next";
import InnerHeadline from "@/components/other-pages/team/InnerHeadline";
import SplitAboutTeam from "@/components/other-pages/team/SplitAboutTeam";
import TeamList from "@/components/other-pages/team/TeamList";
import ParallaxDividerImage from "@/components/other-pages/team/ParallaxDividerImage";
import TestimonialsSlider from "@/components/other-pages/team/TestimonialsSlider";
import CTAWithMarquee from "@/components/other-pages/team/CTAWithMarquee";
export const metadata: Metadata = {
  title: "Team | Construction & Architecture",
  description:
    "Meet the construction and architecture team behind our custom homes, renovations, commercial fit-outs, and project coordination work.",
};
export default function TeamPage() {
  return (
    <>
      <>
        <InnerHeadline />
        <SplitAboutTeam />
        <TeamList />
        <ParallaxDividerImage />
        <TestimonialsSlider />
        <CTAWithMarquee />
      </>
    </>
  );
}
