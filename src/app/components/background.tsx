export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      {/* Faint engineering plus-grid */}
      <div className="bg-plus-grid absolute inset-0" />

      {/* Contour lines drifting behind the hero (subliminal) */}
      <svg
        className="absolute inset-x-0 top-0 h-[900px] w-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
      >
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
          <ellipse cx="720" cy="330" rx="620" ry="300" />
          <ellipse cx="720" cy="330" rx="480" ry="230" />
          <ellipse cx="720" cy="330" rx="340" ry="160" />
        </g>
        <g stroke="rgba(255,134,96,0.10)" strokeWidth="1">
          <ellipse
            className="contour-drift"
            cx="720"
            cy="330"
            rx="550"
            ry="265"
          />
          <ellipse
            className="contour-drift"
            cx="720"
            cy="330"
            rx="410"
            ry="195"
          />
        </g>
      </svg>

      {/* Film grain */}
      <div className="bg-grain absolute inset-0" />

      {/* Vignette to keep edges calm */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.5)_100%)]" />
    </div>
  );
}
