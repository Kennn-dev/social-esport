import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import { default as colors } from "../constains/loadingTheme";
const styleDefault = {
  backgroundColor: colors.bgColor,
  backgroundImage: colors.bgImage,
  borderRadius: 10,
};
const CustomSkeleton = ({ style, ...props }: SkeletonProps) => {
  return <Skeleton style={{ ...styleDefault, ...style }} {...props} />;
};

export default CustomSkeleton;
