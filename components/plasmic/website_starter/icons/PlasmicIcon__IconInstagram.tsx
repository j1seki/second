// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconInstagramIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconInstagramIcon(props: IconInstagramIconProps) {
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
          "M16 2.73H8a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5v-8a5 5 0 00-5-5zm3.25 13A3.26 3.26 0 0116 18.98H8a3.26 3.26 0 01-3.25-3.25v-8A3.26 3.26 0 018 4.48h8a3.26 3.26 0 013.25 3.25v8zm-2.5-7.75a1 1 0 100-2 1 1 0 000 2zM12 7.23a4.5 4.5 0 104.5 4.5 4.49 4.49 0 00-4.5-4.5zm-2.75 4.5a2.75 2.75 0 105.5 0 2.75 2.75 0 00-5.5 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconInstagramIcon;
/* prettier-ignore-end */
