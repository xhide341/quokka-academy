export const QuoteAudioIcon = ({
  width = 26,
  height = 18,
  color = "#121212",
  fill,
  className = "",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 26 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0 18V9.54545L4.72727 0H10.1818L6.54545 9.54545H10.9091V18H0ZM15.0909 18V9.54545L19.8182 0H25.2727L21.6364 9.54545H26V18H15.0909Z"
      fill={fill || color}
    />
  </svg>
);
