import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Category from './components/Category';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Testimonials from './components/Testimonials';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductDetail from './components/ProductDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:
        <> 
          <Hero />
          <Collections />
          <Testimonials />
        </>
      ,
      },
      {
        path: "category",
        element:<Category/>
      ,
      },
      {
        path: "category/:Id",
        element:<Category/>
      ,
      },
      {
        path: "product/:Id",
        element:<ProductDetail/>
      ,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
