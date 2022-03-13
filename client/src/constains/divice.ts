const size = {
  sm: "640px",
  md: "768px=",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1920px",
};
const device = {
  mobileS: `(min-width: ${size.sm})`,
  tablet: `(min-width: ${size.md})`,
  laptop: `(min-width: ${size.lg})`,
  desktop: `(min-width: ${size.xl})`,
  desktopL: `(min-width: ${size["2xl"]})`,
};
export default device;
