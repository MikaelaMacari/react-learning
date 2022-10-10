import { lazy } from "react";

const productsRoutes = [
  {
    path: "/products",
    element: lazy(() => import("../../pages/products")),
  },
];
export default productsRoutes;
