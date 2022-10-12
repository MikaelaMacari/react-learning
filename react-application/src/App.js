import "./App.css";
import BaseRouter from "./routes";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ProductsProvider } from "./utils/ProductsContext";

function App() {
  return (
    <ProductsProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <BaseRouter />
      </Suspense>
      <Outlet />
    </ProductsProvider>
  );
}

export default App;
