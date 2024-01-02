// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoTedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoTedIcon(props: LogoTedIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 55 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.475 5.105H0V0h17.016v5.105H11.54V20H5.475V5.105zM17.958 0h16.545v5.105h-10.48v2.463h10.48v4.804h-10.48v2.523h10.48V20H17.958V0zm17.546 0h9.95c6.536 0 8.832 4.925 8.832 9.97 0 6.126-3.18 10.03-10.01 10.03h-8.773V0zm6.065 14.895h2.354c3.768 0 4.3-3.123 4.3-4.985 0-1.261-.413-4.745-4.771-4.745h-1.944l.06 9.73z"
        }
        fill={"currentColor"}
        fillOpacity={".8"}
      ></path>
    </svg>
  );
}

export default LogoTedIcon;
/* prettier-ignore-end */
