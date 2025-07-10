import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './components/Hero';
import Collections from './components/Collections';
import Testimonials from './components/Testimonials';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from 'react';
import Loading from './components/Loading.jsx';

const ProductDetail = lazy(() => import('./components/ProductDetail.jsx'));

const Auth = lazy(()=> import('./components/Auth.jsx'))

const About = lazy(()=> import('./components/About.jsx'))

const Category = lazy(()=> import('./components/Category'))



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
        element:<Suspense fallback={<Loading/>}>
                  <Category/>
                </Suspense>
      ,
      },
      {
        path: "category/:Id",
        element:<Suspense fallback={<Loading/>}>
                  <Category/>
                </Suspense>
      ,
      },
      {
        path: "product/:Id",
        element:<Suspense fallback={<Loading/>}>
                  <ProductDetail/>
                </Suspense>
      ,
      },
      {
        path: "productupload",
        element:<Suspense fallback={<Loading/>}>
                  <Auth/>
                </Suspense>
      ,
      },
      {
        path: "about",
        element:<Suspense fallback={<Loading/>}>
                  <About/>
                </Suspense>
      ,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
