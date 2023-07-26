import React from 'react';

import ReactDOM from 'react-dom/client'
import App from './App'
import About from './components/About Section /About';
import Trees from './components/Trees Section/Trees';
import { Login } from './components/Login Section/Login';



import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },

    {
        path: "/about",
        element: <About/>,
      },

      {
        path: "/tree",
        element: <Trees/>,
      },

      {
        path: "/login",
        element: <Login/>,
      },

    

      
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router={router} />
 ) 