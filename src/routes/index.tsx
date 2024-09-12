import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/page/Home";
import AllProducts from "@/Components/Products/AllProducts";
import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";
import Cart from "@/page/Cart";
import Update from "../page/Update";
import UserInfo from "@/page/UserInfo";
import CardDetails from "@/page/CardDetails";
import OrderSuccessPage from "@/page/OrderSuccessPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: '/',
          element:<Home/>
        },
        {
          path: '/products',
          element:<AllProducts/>
        },
        {
          path: '/products/:id',
          element:<Update/>
        },
        {
          path: '/product-details/:id',
          element:<CardDetails/>
        },
        {
          path: '/about',
          element:<About/>
        },
        {
          path: '/contact',
          element:<Contact/>
        },
        {
          path: '/cart',
          element:<Cart/>
        },
        {
          path: '/user-info',
          element:<UserInfo/>
        },
        {
          path: '/order-success',
          element:<OrderSuccessPage/>
        },
      ]
    }
  ]);