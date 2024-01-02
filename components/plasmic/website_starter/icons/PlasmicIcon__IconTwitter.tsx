// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconTwitterIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconTwitterIcon(props: IconTwitterIconProps) {
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
          "M20.973 6.717a7.19 7.19 0 01-1.663 1.6v.495a10.972 10.972 0 01-3.258 7.822A10.96 10.96 0 018.194 19.8a10.994 10.994 0 01-4.898-1.133.225.225 0 01-.134-.207v-.099c0-.129.104-.233.233-.233a7.96 7.96 0 004.601-1.655 3.927 3.927 0 01-3.495-2.301.234.234 0 01.233-.324c.46.046.923.004 1.366-.126A3.92 3.92 0 013 10.296a.234.234 0 01.323-.234c.448.197.931.302 1.42.306a3.849 3.849 0 01-1.536-4.442.485.485 0 01.817-.162 11.105 11.105 0 007.558 3.489 3.604 3.604 0 01-.108-.9 3.917 3.917 0 016.749-2.643 7.807 7.807 0 002.148-.746c.05-.03.112-.03.162 0 .03.05.03.113 0 .162a3.928 3.928 0 01-1.582 1.798 7.709 7.709 0 001.797-.431.144.144 0 01.162 0 .153.153 0 01.063.224z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconTwitterIcon;
/* prettier-ignore-end */
