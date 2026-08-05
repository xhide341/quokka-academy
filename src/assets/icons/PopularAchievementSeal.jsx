export const PopularAchievementSeal = ({
  size = 52,
  ribbonColor = "#FF9F1C",
  medalColor = "#FFDE59",
  stroke = "#121212",
  className = "",
}) => (
  <svg
    width={size}
    height={Math.round(size * 1.25)}
    viewBox="0 0 64 78"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`filter shrink-0 ${className}`}
  >
    {/* Left Ribbon Tail */}
    <path
      d="M 17 41 L 7 74 L 22 66 L 28 72 L 27 43 Z"
      fill={ribbonColor}
      stroke={stroke}
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Right Ribbon Tail */}
    <path
      d="M 47 41 L 57 74 L 42 66 L 36 72 L 37 43 Z"
      fill={ribbonColor}
      stroke={stroke}
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    {/* Scalloped Medal Outer Rosette */}
    <circle cx="32" cy="30" r="24" fill={ribbonColor} stroke={stroke} strokeWidth="3" />
    {/* Inner Gold Circle */}
    <circle cx="32" cy="30" r="16" fill={medalColor} stroke={stroke} strokeWidth="2.5" />
    {/* Center Star */}
    <path
      d="M 32 19 L 34.5 25.5 L 41.5 25.5 L 36 29.5 L 38 36 L 32 32 L 26 36 L 28 29.5 L 22.5 25.5 L 29.5 25.5 Z"
      fill={stroke}
    />
  </svg>
);
