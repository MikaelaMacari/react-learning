import React, { lazy } from "react";

export const LayoutType = {
  default: lazy(() => import("../../layouts/default")),
};

export const Layout = (props) => {
  const layoutName = props.route.layout || "default";
  const Default = LayoutType[layoutName];
  return <Default>{props.children}</Default>;
};
