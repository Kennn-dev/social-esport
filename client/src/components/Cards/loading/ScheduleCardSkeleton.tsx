import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import { default as color } from "../../../constains/loadingTheme";

const style = {
  borderRadius: 15,
  marginTop: 10,
  width: "100%",
  height: 70,
  backgroundColor: color.bgColor,
  backgroundImage: color.bgImage,
};

const ScheduleCardSkeleton = ({ ...props }: SkeletonProps) => {
  return <Skeleton {...props} style={style} />;
};

export default ScheduleCardSkeleton;
