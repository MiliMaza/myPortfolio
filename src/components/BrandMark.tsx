interface BrandMarkProps {
  size?: number;
  className?: string;
  interactive?: boolean;
}

export const BrandMark = ({ size = 32, className = '', interactive = false }: BrandMarkProps) => {
  return (
    <div
      className={`inline-flex items-center justify-center relative select-none ${interactive ? 'cursor-pointer group' : ''} ${className}`}
      style={{ width: size, height: size }}
      title="mili.dev"
      aria-label="mili.dev brand mark"
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transition-transform duration-300 group-hover:scale-105"
      >
        {/* Background container */}
        <rect width="32" height="32" rx="9" fill="#0e121a" stroke="#252b3d" strokeWidth="1.2" />

        {/* Trajectory vector arc - Court & System hybrid */}
        <path
          d="M8 25V15.5C8 13.567 9.567 12 11.5 12C13.433 12 15 13.567 15 15.5V25"
          stroke="#f1f5f9"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 18C15.8 15.5 18.2 13 21 13C23.761 13 26 15.239 26 18V25"
          stroke="#94a3b8"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Kinetic Signal Origin Node */}
        <circle cx="8" cy="9" r="2.5" fill="#d4ff3a" className="transition-all group-hover:r-3" />

        {/* Strategic Target Point */}
        <circle cx="26" cy="9" r="2" fill="#ff6036" />

        {/* Subtle coordinate crosshair detail */}
        <line x1="15" y1="6" x2="15" y2="8.5" stroke="#334155" strokeWidth="1" strokeLinecap="round" />
      </svg>
    </div>
  );
};
