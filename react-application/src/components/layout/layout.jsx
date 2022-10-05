import React, { lazy, startTransition } from "react";

export const LayoutType = {
  // about: startTransition(() => import("../../pages/about")),
  // contacts: startTransition(() => import("../../pages/contacts")),
  // default: startTransition(() => import("../../layouts/default")),
  about: lazy(() => import("../../pages/about")),
  contacts: lazy(() => import("../../pages/contacts")),
  default: lazy(() => import("../../layouts/default")),
};

export const Layout = (props) => {
  const layoutName = props.route.layout || "default";
  const Default = LayoutType[layoutName];
  return <Default>{props.children}</Default>;
};
