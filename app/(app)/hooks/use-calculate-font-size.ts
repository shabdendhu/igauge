import useWindowSize from "./use-window-size";

export const useCalculateFontSize = () => {
  const { width } = useWindowSize();
  return (
    maxFontSize: number,
    minFontSize: number,
    maxPageSize = 1920,
    minPageSize = 360
  ) => {
    // Calculate the slope of the line using the max and min font sizes and page sizes
    const m = (maxFontSize - minFontSize) / (maxPageSize - minPageSize);

    // Calculate the y-intercept of the line
    const b = maxFontSize - m * maxPageSize;

    // Calculate the optimal font size based on the line formula
    const optimalFontSize = Math.max(
      minFontSize,
      Math.min(maxFontSize, m * width + b)
    );

    // Return the optimal font size
    return Math.round(optimalFontSize);
  };
};
