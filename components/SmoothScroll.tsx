"use client";

import { ReactNode, useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

interface Props {
  children: ReactNode;
}

/**
 * Wrap your page with this component to get global smooth-scrolling via Locomotive-Scroll.
 * All direct children are treated as individual `data-scroll-section` blocks automatically.
 * You can add parallax/transform props inside with `data-scroll` & `data-scroll-speed`.
 */
export default function SmoothScroll({ children }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // LocomotiveScroll types are outdated – cast to any to avoid TS errors
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const scroll = new (LocomotiveScroll as any)({
      el: containerRef.current as HTMLElement,
      smooth: true,
      lerp: 0.08,
      multiplier: 1,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    } as any);

    // Update on resize because Tailwind breakpoints can change layout height
    const onResize = () => {
      // @ts-ignore
      scroll.update && scroll.update();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} data-scroll-container>
      {/* Ensure every direct child counts as an individual scroll section */}
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div key={i} data-scroll-section>
              {child}
            </div>
          ))
        : children}
    </div>
  );
}
