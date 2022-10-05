import "./App.css";
import BaseRouter from "./routes";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BaseRouter />
      </Suspense>
      <Outlet />
    </>
  );
}

export default App;
