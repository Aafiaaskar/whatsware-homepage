import React from "react";
import { useLocation } from "wouter";

export default function FloatingAira() {
  const [, navigate] = useLocation();

  const openAira = () => {
    navigate("/aira");
  };

  return (
    <button
      type="button"
      onClick={openAira}
      aria-label="Open Aira"
      className="
        fixed
        bottom-2
        right-2
        sm:bottom-3
        sm:right-3
        md:bottom-4
        md:right-4
        z-[9999]
        w-[105px]
        sm:w-[125px]
        md:w-[145px]
        lg:w-[160px]
        cursor-pointer
        border-0
        bg-transparent
        p-0
        outline-none
        transition-transform
        duration-300
        hover:scale-105
        active:scale-95
      "
    >
      {/* Aira animated avatar */}
      <img
        src="/avatars/whatsware-ai-avatar-transparent.gif"
        alt="Aira AI Assistant"
        className="
          block
          h-auto
          w-full
          object-contain
          drop-shadow-[0_8px_20px_rgba(0,0,0,0.25)]
        "
      />

      {/* Ask Aira bubble */}
      <span
        className="
          absolute
          right-1
          top-1
          rounded-full
          bg-white
          px-2.5
          py-1
          text-[10px]
          font-bold
          text-[#159447]
          shadow-lg
          sm:px-3
          sm:py-1.5
          sm:text-xs
        "
      >
        Ask Aira
      </span>
    </button>
  );
}