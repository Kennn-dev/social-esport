import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import { default as color } from "../../../constains/loadingTheme";
const style = {
  borderRadius: 15,
  width: 160,
  height: 70,
  marginLeft: 30,
  backgroundColor: color.bgColor,
  backgroundImage: color.bgImage,
};
export default function LeagueCardSkeleton({ ...props }: SkeletonProps) {
  return <Skeleton {...props} style={style} />;
}
