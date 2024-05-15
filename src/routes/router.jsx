import App from "@/App";
import AfterSaleSupport from "@/pages/AfterSaleSupport";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import ReplacementWarranty from "@/pages/ReplacementWarranty";
import ReturnAndRefund from "@/pages/ReturnAndRefund";
import ShippingOrDelivery from "@/pages/ShippingOrDelivery";
import { Shop } from "@/pages/Shop";
import TermsAndConditions from "@/pages/TermsAndConditions";
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
        path: "shop/:id",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/return-and-refund-policy",
        element: <ReturnAndRefund />,
      },
      {
        path: "/after-sale-support",
        element: <AfterSaleSupport />,
      },
      {
        path: "/shipping-or-delivery",
        element: <ShippingOrDelivery />,
    },
      {
        path: "/replacement-warranty",
        element: <ReplacementWarranty />,
      },
    ],
  },
]);
