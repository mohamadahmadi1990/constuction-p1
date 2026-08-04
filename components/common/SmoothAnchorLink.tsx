"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { useLenis } from "@/components/common/LenisContext";

type SmoothAnchorLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  targetId: string;
  children: ReactNode;
};

/** Same-page hash link: smooth scroll via Lenis when available, else native smooth behavior. */
export default function SmoothAnchorLink({
  targetId,
  children,
  ...rest
}: SmoothAnchorLinkProps) {
  const lenis = useLenis();
  const hash = targetId.startsWith("#") ? targetId : `#${targetId}`;
  const { onClick, ...anchorProps } = rest;

  const dispatchAnchorComplete = () => {
    window.dispatchEvent(
      new CustomEvent("codex:anchor-scroll-complete", {
        detail: { targetId: hash.slice(1) },
      }),
    );
  };

  const handleClick: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"] = (e) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    e.preventDefault();
    const target = document.querySelector(hash);
    if (!(target instanceof HTMLElement)) return;

    if (lenis) {
      lenis.scrollTo(target, {
        onComplete: dispatchAnchorComplete,
      });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      requestAnimationFrame(() => {
        requestAnimationFrame(dispatchAnchorComplete);
      });
    }

    window.history.replaceState(null, "", hash);
  };

  return (
    <a href={hash} onClick={handleClick} {...anchorProps}>
      {children}
    </a>
  );
}
