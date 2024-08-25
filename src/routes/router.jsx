import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Cart from "../pages/Cart/Cart";
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/place-order",
        element: <PlaceOrder />,
      },
    
    ],
  },
]);

export default router;
