"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../../components/ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex flex-col items-center justify-center  rounded-2xl w-full ml-[20px] md:ml-[-15px]">
      <TextRevealCard
        text="Contact us"
        revealText="Get in Touch "
      >
      </TextRevealCard>
    </div>
  );
}
