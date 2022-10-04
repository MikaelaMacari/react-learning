import { lazy } from "react";

const contactsRoutes = [
  {
    path: "/contacts",
    element: lazy(() => import("../../pages/contacts")),
  },
];
export default contactsRoutes;
