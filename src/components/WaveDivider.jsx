export default function WaveDivider({ fill = 'var(--bg-soft)', className = '' }) {
  return (
    <div className={`wave-divider ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 110" preserveAspectRatio="none">
        <path
          d="M0,48 C220,100 420,0 720,34 C1020,68 1240,10 1440,46 L1440,110 L0,110 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
