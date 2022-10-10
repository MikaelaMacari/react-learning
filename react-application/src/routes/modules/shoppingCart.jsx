import { lazy } from "react";

const shoppingCartRoutes = [
  {
    path: "/shoppingcart",
    element: lazy(() => import("../../pages/shoppingCart")),
  },
];
export default shoppingCartRoutes;
