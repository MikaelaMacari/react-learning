import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ContactsPage from "./pages/contacts";
import AboutPage from "./pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
