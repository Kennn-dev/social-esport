import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import Theme from "src/constains/loadingTheme";
const style = {
  backgroundColor: Theme.bgColor,
  backgroundImage: Theme.bgImage,
  borderRadius: 8,
};
export default function CustomSkeleton({ ...props }: SkeletonProps) {
  return <Skeleton {...props} style={{ ...props.style, ...style }} />;
}
