"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type TypewriterProps = {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  startDelay?: number;
  className?: string;
  /** Kata terakhir tiap frasa dirender dengan gradient brand. */
  gradientLastWord?: boolean;
};

export default function Typewriter({
  phrases,
  typeSpeed = 30,
  deleteSpeed = 15,
  pauseTime = 1600,
  startDelay = 800,
  className,
  gradientLastWord = true,
}: TypewriterProps) {
  const reduce = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  const current = phrases[phraseIndex % phrases.length] ?? "";

  // Tunda mulai agar sinkron dengan animasi Reveal hero.
  useEffect(() => {
    if (reduce) return;
    const id = window.setTimeout(() => setStarted(true), startDelay);
    return () => window.clearTimeout(id);
  }, [reduce, startDelay]);

  useEffect(() => {
    if (reduce || !started) return;

    // Frasa selesai diketik -> jeda, lalu hapus.
    if (!deleting && charCount === current.length) {
      const id = window.setTimeout(() => setDeleting(true), pauseTime);
      return () => window.clearTimeout(id);
    }

    // Frasa habis dihapus -> lanjut ke frasa berikut (loop, walau 1 frasa).
    if (deleting && charCount === 0) {
      const id = window.setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, 400);
      return () => window.clearTimeout(id);
    }

    const id = window.setTimeout(
      () => setCharCount((c) => c + (deleting ? -1 : 1)),
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => window.clearTimeout(id);
  }, [
    reduce,
    started,
    deleting,
    charCount,
    current,
    phrases.length,
    typeSpeed,
    deleteSpeed,
    pauseTime,
  ]);

  // Hormati prefers-reduced-motion: tampilkan teks penuh tanpa animasi.
  if (reduce) {
    return (
      <span className={className}>
        {renderWithGradient(current, current.length, gradientLastWord)}
        <span
          aria-hidden="true"
          className="caret-blink ml-1 inline-block h-[1em] w-[0.45ch] translate-y-[0.12em] rounded-[1px] bg-[#FF8660]"
        />
      </span>
    );
  }

  const visible = current.slice(0, charCount);

  return (
    <span className={className} aria-live="polite">
      {/* SEO / screen-reader: frasa penuh tetap terbaca. */}
      <span className="sr-only">{current}</span>
      <span aria-hidden="true">
        {renderWithGradient(current, charCount, gradientLastWord)}
        {/* Spasi hint agar tinggi baris stabil saat teks kosong. */}
        {visible.length === 0 ? "\u00A0" : null}
      </span>
      <span
        aria-hidden="true"
        className="caret-blink ml-1 inline-block h-[1em] w-[0.45ch] translate-y-[0.12em] rounded-[1px] bg-[#FF8660]"
      />
    </span>
  );
}

/** Render N karakter pertama; kata terakhir diberi gradient brand bila diminta. */
function renderWithGradient(
  phrase: string,
  count: number,
  gradientLastWord: boolean,
) {
  const sliced = phrase.slice(0, Math.max(0, count));
  if (!gradientLastWord || sliced.length === 0) return sliced;

  const lastSpace = phrase.lastIndexOf(" ");
  // Belum sampai ke kata terakhir -> teks polos.
  if (count <= lastSpace + 1) return sliced;

  const head = phrase.slice(0, lastSpace + 1);
  const tail = phrase.slice(lastSpace + 1, count);
  return (
    <>
      {head}
      <span className="bg-gradient-to-r from-[#FF8660] to-[#8000FF] bg-clip-text text-transparent">
        {tail}
      </span>
    </>
  );
}
