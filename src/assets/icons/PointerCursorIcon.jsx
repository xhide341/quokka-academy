export const PointerCursorIcon = ({
  size = 42,
  fill = "#36749A",
  stroke = "#121212",
  strokeWidth = 2.8,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 4L13.5 27.5L18.2 18.2L27.5 13.5L4 4Z"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);
