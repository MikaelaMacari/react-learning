import { lazy } from "react";

const homeRoutes = [
  {
    path: "/",
    element: lazy(() => import("../../pages/home")),
  },
];
export default homeRoutes;
