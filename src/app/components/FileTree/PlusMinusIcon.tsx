const PlusMinusIcon = ({ state }: any) => {
  if (state) {
    return (
      <svg
        data-testid="geist-icon"
        fill="none"
        height="14"
        width="14"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M8 12h8" />
      </svg>
    );
  } else {
    return (
      <svg
        data-testid="geist-icon"
        fill="none"
        height="14"
        width="14"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    );
  }
};

export default PlusMinusIcon;
