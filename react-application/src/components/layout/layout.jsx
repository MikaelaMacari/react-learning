import React, { lazy } from "react";

export const LayoutType = {
  about: lazy(() => import("../../pages/about")),
  contacts: lazy(() => import("../../pages/contacts")),
  default: lazy(() => import("../../layouts/default")),
};

export const Layout = (props) => {
  const layoutName = props.route.layout || "default";
  const Default = LayoutType[layoutName];
  return <Default>{props.children}</Default>;
};
