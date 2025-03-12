import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import App from './App.jsx'
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import DisplayPhones from './Components/DisplayPhones/DisplayPhones.jsx';
import DisplayAllProducts from './Components/DisplayAllProducts/DisplayAllProducts.jsx';
import DisplayLaptops from './Components/DisplayLaptops/DisplayLaptops.jsx';
import DisplaySmartWatches from './Components/DisplaySmartWatches/DisplaySmartWatches.jsx';
import Details from './Components/Details/Details.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import ProductIdProvider from './Provider/ProductIdProvider.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Wishlist from './Components/Wishlist/Wishlist.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "products/allProducts",
            element: <DisplayAllProducts></DisplayAllProducts>,
            loader: () => fetch("../public/data/products.json")
          },
          {
            path: "products/phones",
            element: <DisplayPhones></DisplayPhones>,
            loader: () => fetch("../public/data/products.json")
          },
          {
            path: "products/laptops",
            element: <DisplayLaptops></DisplayLaptops>,
            loader: () => fetch("../public/data/products.json")
          },
          {
            path: "products/smartwatches",
            element: <DisplaySmartWatches></DisplaySmartWatches>,
            loader: () => fetch("../public/data/products.json")
          },
        ]
      },
      {
        path: "products/:product_id",
        element: <Details></Details>,
        loader: () => fetch("../public/data/products.json")
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("../public/data/products.json"),
        children: [
        {
          path: "/dashboard",
          element: <Cart></Cart>,
          loader: () => fetch("../public/data/products.json")
        },
        {
          path: "/dashboard/wishlist",
          element: <Wishlist></Wishlist>,
          loader: () => fetch("../public/data/products.json")
        }
      ]
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductIdProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </ProductIdProvider>
  </StrictMode>,
)
