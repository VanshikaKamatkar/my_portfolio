"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";


interface TextGenerateEffectDemoProps {
  className?: string;
  words: string;
}



export function TextGenerateEffectDemo({ className, words }: TextGenerateEffectDemoProps) {
  return <TextGenerateEffect duration={2} filter={false} words={words} className={className} />;
}
