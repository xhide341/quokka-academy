export const PlayCircleIcon = ({
  size = 24,
  color = "#121212",
  fill = "#FFDE59",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
  >
    <circle cx="12" cy="12" r="11" fill={fill} stroke={color} strokeWidth="2" />
    <polygon points="10,8 16,12 10,16" fill={color} />
  </svg>
);
