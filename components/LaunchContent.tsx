import { Instrument_Serif } from "next/font/google";
import Image from "next/image";
import { EmailSignup } from "./launch/EmailSignup";
import { HeroBackgroundVideo } from "./launch/HeroBackgroundVideo";
import { IconLinkedIn, IconX } from "./launch/icons";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const MINT = "#00995F";

export function LaunchContent() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-hidden bg-white text-zinc-900">
      <HeroBackgroundVideo />

      <div
        className="pointer-events-none absolute -top-7 left-1/2 z-1 h-[60vh] md:h-[60vh] w-[min(135vw,100svw)] max-w-400 -translate-x-1/2 rounded-[50%] bg-white blur-3xl sm:-top-12.5 sm:h-[60vh] lg:blur-[100px] sm:w-[120vw] md:blur-[100px] sm:blur-[100px]"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-dvh flex-col">
        <header className="flex w-full items-center justify-between gap-3 px-4 pt-4 pb-3 sm:px-6 sm:pt-6 sm:pb-4 md:px-10 lg:px-14">
          <a
            href="/"
            className="relative flex min-w-0 shrink-0 items-center"
            aria-label="Minted home"
          >
            <Image
              src="/assets/brand_logo.png"
              alt="Minted logo"
              width={156}
              height={40}
              className="h-7 w-auto max-w-[min(42vw,9.75rem)] object-contain object-left sm:h-8 sm:max-w-none"
              priority
            />
          </a>
          <nav
            className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3"
            aria-label="Social and access"
          >
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-900/10 bg-zinc-900/5 text-zinc-700 transition-colors hover:bg-zinc-200 sm:h-10 sm:w-10"
              aria-label="X (Twitter)"
            >
              <IconX className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-900/10 bg-zinc-900/5 text-zinc-700 transition-colors hover:bg-zinc-200 sm:h-10 sm:w-10"
              aria-label="LinkedIn"
            >
              <IconLinkedIn className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
            <a
              href="#"
              className="ml-0.5 rounded-full bg-black px-3 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90 sm:ml-1 sm:px-5 sm:py-2.5 sm:text-sm md:ml-2"
            >
              Get access
            </a>
          </nav>
        </header>

        <main className="flex flex-1 flex-col items-center px-4 pb-6 pt-2 sm:px-6 sm:pb-8 sm:pt-4 md:px-10">
          <div className="relative -top-3 flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-3 text-center sm:-top-8 sm:gap-4 md:-top-15 md:gap-4">
            <p className="flex max-w-[min(100%,20rem)] flex-row flex-wrap items-center justify-center gap-1 md:gap-1.2 rounded-full border border-[#00995F20] bg-[#00995F20] px-2 py-1.5 pl-2.5 text-[10px] font-normal sm:max-w-none sm:gap-2 sm:px-2 sm:pl-3 sm:text-[11px] md:gap-3">
              <span className="whitespace-nowrap">Register for</span>
              <span className="rounded-full bg-[#00995F] px-2 py-0.5  font-normal text-white sm:px-2 sm:py-1 md:px-2 md:py-1 text-[7px] md:text-[9px]">
                Beta
              </span>
            </p>

            <div className={`${instrumentSerif.className} w-full px-1 sm:px-0`}>
              <h1 className="text-balance text-[1.7rem] font-normal leading-[1.1] tracking-tight text-black min-[380px]:text-[1.85rem] sm:text-[2.35rem] sm:leading-[1.08] md:text-[3.25rem] lg:text-[3.5rem]">
                The Ownership Reserve
              </h1>
              <p
                className="mt-2 text-balance text-xl font-normal italic sm:mt-4 sm:text-2xl md:text-4xl lg:text-[2.65rem]"
                style={{ color: MINT }}
              >
                Currency For Web3
              </p>
            </div>

            <p className="max-w-md text-pretty px-1 text-[12px] leading-relaxed text-zinc-900/80 sm:px-0 sm:text-sm md:text-[15px]">
              Minted has created the first institutional grade stablecoin
              infrastructure, accelerating traditional markets. Made in the USA
            </p>

            <div className="w-full max-w-lg px-0">
              <EmailSignup />
            </div>
          </div>

          <div className="mt-auto flex w-full max-w-[100vw] flex-wrap items-center justify-center gap-2 px-1 pb-6 pt-6 sm:gap-3 sm:pb-8 sm:pt-10">
            {(["mUSD Supply", "APY", "Users"] as const).map((label) => (
              <div
                key={label}
                className="rounded-full border border-white/30 bg-black/10 px-4 py-2.5 text-xs font-medium text-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] backdrop-blur-md sm:px-7 sm:py-3 sm:text-sm"
              >
                {label}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
