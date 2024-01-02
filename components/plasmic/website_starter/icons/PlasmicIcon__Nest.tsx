// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NestIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NestIcon(props: NestIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 23"}
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
          "M10.352 15.692l3.34 3.414-2.786 2.968a2.216 2.216 0 01-3.273 0L.678 14.667c-.904-.963-.904-2.524 0-3.486a2.216 2.216 0 013.273 0l5.318 5.664 1.083-1.153zm.868-.925l2.96-3.151 3.272 3.486-2.725 2.902-3.507-3.237z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M24.608 17.938l-3.487-3.257 8.195-8.728a2.216 2.216 0 013.273 0c.904.962.904 2.523 0 3.485l-7.98 8.5zm-1.084 1.155l-2.799 2.981a2.216 2.216 0 01-3.273 0L5.588 9.437c-.904-.963-.904-2.523 0-3.486a2.215 2.215 0 013.273 0l10.228 10.894 1.15-1.225 3.285 3.473z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M19.58 13.881l3.258-3.502 6.07 6.466 5.318-5.663a2.216 2.216 0 013.273 0c.904.963.904 2.523 0 3.486l-6.954 7.406a2.215 2.215 0 01-3.273 0l-7.692-8.193zm-1.35-1.437l-7.732-8.236c-.904-.963-.904-2.523 0-3.486a2.215 2.215 0 013.273 0l7.74 8.245-3.28 3.477z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M27.68.723a2.216 2.216 0 00-3.274 0L14.18 11.616l3.273 3.486L27.68 4.209c.904-.963.904-2.523 0-3.486z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NestIcon;
/* prettier-ignore-end */
