"use client";

import { IconArrowRight } from "./icons";

const MINT = "#00995F";

export function EmailSignup() {
  return (
    <div className="w-full max-w-lg rounded-full">
      <form
        className="relative"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="launch-email" className="sr-only">
          Email
        </label>
        <input
          id="launch-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          className="h-12 w-full rounded-full border border-[#00995F50] bg-white pl-4 pr-[4.25rem] text-sm text-zinc-900 shadow-[0_2px_0_0_rgba(0,153,95,0.6)] outline-none placeholder:text-zinc-400 focus:border-zinc-300 focus:ring-2 focus:ring-[#00A676]/25 sm:h-14 sm:pl-6 sm:pr-16 sm:text-[15px]"
        />
        <button
          type="submit"
          className="absolute top-1/2 hover:bg-[#00995F]/20 right-1.5 flex h-9 w-10 cursor-pointer -translate-y-1/2 items-center justify-center rounded-full border border-[#00DC8A] text-white shadow-[inset_0_0_6px_4px_rgba(255,255,255,0.5)] transition-opacity hover:opacity-90 sm:right-2 sm:h-10 sm:w-12"
          style={{ backgroundColor: MINT }}
          aria-label="Submit email"
        >
          <IconArrowRight className="h-5 w-5" />
        </button>
      </form>
      <p className="mt-2 text-center text-[11px] text-white">
        we never spam your inbox!
      </p>
    </div>
  );
}
