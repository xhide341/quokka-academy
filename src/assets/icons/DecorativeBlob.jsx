export const DecorativeBlob = ({
  width = 70,
  height = 70,
  fill = "#FF85A1",
  stroke = "#121212",
  strokeWidth = 4,
  className = "",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M 30 10 C 60 0, 90 15, 95 45 C 100 75, 75 95, 45 90 C 15 85, 0 65, 5 35 C 10 15, 15 15, 30 10 Z"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </svg>
);
