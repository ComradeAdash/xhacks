import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Authentication from "./authentication";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/auth", element: <Authentication /> }
]);
