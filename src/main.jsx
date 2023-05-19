import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Components/Home/HomePage.jsx';
import Error404 from './Components/Shared/Navbar/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      }
    ]
  },
  {
    path: "*",
    element: <Error404></Error404>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
 
)
