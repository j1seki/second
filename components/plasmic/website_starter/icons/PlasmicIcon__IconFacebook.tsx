// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconFacebookIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconFacebookIcon(props: IconFacebookIconProps) {
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
        d={
          "M16.5 6h-3a1 1 0 00-1 1v3h4a.35.35 0 01.34.46l-.74 2.2a.5.5 0 01-.47.34H12.5v7.5a.5.5 0 01-.5.5H9.5a.5.5 0 01-.5-.5V13H7.5a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5H9V7a4 4 0 014-4h3.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconFacebookIcon;
/* prettier-ignore-end */
