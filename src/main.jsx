import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <RouterProvider router={router} />
  //</React.StrictMode>,
)
