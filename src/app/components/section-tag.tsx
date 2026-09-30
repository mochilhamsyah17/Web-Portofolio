export default function SectionTag({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div
      aria-hidden="true"
      className="flex w-full select-none items-center gap-3 font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-600"
    >
      <span>+</span>
      <span className="shrink-0">
        SEC.{index} — {label}
      </span>
      <span className="h-px flex-1 bg-white/[0.07]" />
      <span>+</span>
    </div>
  );
}
