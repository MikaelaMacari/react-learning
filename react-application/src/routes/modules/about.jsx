import { lazy } from "react";

const aboutRoutes = [
  {
    path: "/about",
    element: lazy(() => import("../../pages/about")),
  },
];
export default aboutRoutes;
