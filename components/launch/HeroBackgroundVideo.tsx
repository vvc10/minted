"use client";

import { useEffect, useRef } from "react";

export function HeroBackgroundVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlay = () => {
      if (motion.matches) {
        video.pause();
      } else {
        void video.play().catch(() => {});
      }
    };

    motion.addEventListener("change", syncPlay);
    syncPlay();

    return () => {
      motion.removeEventListener("change", syncPlay);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 min-h-dvh overflow-hidden bg-white"
      aria-hidden
    >
      <video
        ref={ref}
        className="pointer-events-none absolute inset-0 h-full w-full bg-white object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
      >
        <source src="/assets/bg_motion.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
