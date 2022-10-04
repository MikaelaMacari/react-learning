import "./App.css";
import BaseRouter from "./routes";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <BaseRouter />
      <Outlet />
    </>
  );
}

export default App;
