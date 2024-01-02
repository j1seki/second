// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconLinkedInIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconLinkedInIcon(props: IconLinkedInIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm3 15a.5.5 0 00.5-.5v-7A.5.5 0 008 10H6.5a.5.5 0 00-.5.5v7a.5.5 0 00.5.5H8zm-.75-9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm10.25 9a.5.5 0 00.5-.5v-4.6a3.1 3.1 0 00-2.72-3.14 3 3 0 00-2.78 1.34v-.6a.5.5 0 00-.5-.5h-1.5a.5.5 0 00-.5.5v7a.5.5 0 00.5.5H12a.5.5 0 00.5-.5v-3.75a1.5 1.5 0 013 0v3.75a.5.5 0 00.5.5h1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconLinkedInIcon;
/* prettier-ignore-end */
