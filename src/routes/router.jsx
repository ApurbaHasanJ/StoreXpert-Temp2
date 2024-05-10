import App from "@/App";
import Cart from "@/pages/Cart";
import Home from "@/pages/Home";
import ViewProduct from "@/pages/ViewProduct";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/view-product/:id",
        element: <ViewProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
