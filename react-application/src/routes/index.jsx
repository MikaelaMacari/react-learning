import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import aboutRoutes from "./modules/about";
import contactsRoutes from "./modules/contacts";
import homeRoutes from "./modules/home";
import productsRoutes from "./modules/products";
import shoppingCartRoutes from "./modules/shoppingCart";

const routes = [...homeRoutes, ...productsRoutes, ...contactsRoutes, ...aboutRoutes, ...shoppingCartRoutes];
const BaseRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<Layout route={route}>{<route.element />}</Layout>} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
export default BaseRouter;
