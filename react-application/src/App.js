import "./App.css";
import BaseRouter from "./routes";
import { Outlet } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <BaseRouter />
      </React.Suspense>
      <Outlet />
    </>
  );
}

export default App;
