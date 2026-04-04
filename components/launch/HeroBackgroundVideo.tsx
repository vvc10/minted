"use client";

import { useEffect, useRef } from "react";

/** Slower, smooth motion; adjust 0.35–0.55 to taste */
const PLAYBACK_RATE = 0.45;

export function HeroBackgroundVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const applySlow = () => {
      try {
        video.playbackRate = PLAYBACK_RATE;
      } catch {
        /* some browsers may restrict before play */
      }
    };

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlay = () => {
      if (motion.matches) {
        video.pause();
      } else {
        void video.play().catch(() => {});
        applySlow();
      }
    };

    applySlow();
    video.addEventListener("loadedmetadata", applySlow);
    video.addEventListener("loadeddata", applySlow);
    video.addEventListener("playing", applySlow);
    motion.addEventListener("change", syncPlay);
    syncPlay();

    return () => {
      video.removeEventListener("loadedmetadata", applySlow);
      video.removeEventListener("loadeddata", applySlow);
      video.removeEventListener("playing", applySlow);
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
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
        style={{
          minWidth: "100%",
          minHeight: "100%",
          width: "auto",
          height: "auto",
        }}
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
