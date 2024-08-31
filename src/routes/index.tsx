import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/page/Home";
import AllProducts from "@/Components/Products/AllProducts";
import About from "@/Components/About/About";
import Contact from "@/Components/Contact/Contact";
import Cart from "@/page/Cart";
import Update from "../page/Update";


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
          path: '/product',
          element:<AllProducts/>
        },
        {
          path: '/product/:id',
          element:<Update/>
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
      ]
    }
  ]);