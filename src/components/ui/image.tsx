import { FC, HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLImageElement> {
  // custom props here...
}

const Image: FC<IProps> = (props) => {
  return <img loading="lazy" {...props} />;
};

export default Image;
