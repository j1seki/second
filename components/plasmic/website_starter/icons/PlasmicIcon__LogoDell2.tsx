// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoDell2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoDell2Icon(props: LogoDell2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 62 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#iSxf0yO7sSNsa)"}>
        <path
          d={
            "M26.61.012l-10.38 7.79a8.874 8.874 0 00-3.206-4.841A9.26 9.26 0 007.45 1.054H0v17.904h7.45a9.023 9.023 0 005.615-1.857 8.639 8.639 0 003.165-4.89L26.61 20l10.381-7.79v6.748h11.71v-3.634h-7.724V1.042h-4.259v6.747l-9.847 7.79-2.123-1.818 4.793-3.634 5.054-3.888-2.93-2.338-9.848 7.522-2.123-1.817 9.847-7.268L26.611 0v.012zM3.986 4.676h3.191c.66.001 1.313.142 1.913.412a5.13 5.13 0 011.614 1.139 5.46 5.46 0 011.117 1.732 5.825 5.825 0 010 4.228 5.607 5.607 0 01-1.055 1.744c-.444.506-.99.918-1.602 1.211a4.716 4.716 0 01-2.024.449H3.986V4.676zm58.002 10.648v3.634H50.29V1.042h4.26v14.282H62h-.012z"
          }
          fill={"currentColor"}
          fillOpacity={".8"}
        ></path>
      </g>

      <defs>
        <clipPath id={"iSxf0yO7sSNsa"}>
          <path fill={"currentColor"} d={"M0 0h62v20H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default LogoDell2Icon;
/* prettier-ignore-end */
