import Image from "next/image";

export function HeroBackgroundImage() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 min-h-dvh overflow-hidden bg-white"
      aria-hidden
    >
      <Image
        src="/assets/bg_image.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
    </div>
  );
}
