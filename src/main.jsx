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
import AddToy from './Components/AddToy/AddToy.jsx';
import LoginForm from './Components/Authorization/Login.jsx';
import Registration from './Components/Authorization/Registration.jsx';
import AuthProvider from './Components/Authorization/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: "/addToys",
        element: <AddToy></AddToy>
      },
      {
        path: "/login",
        element: <LoginForm></LoginForm>
      },
      {
        path: "/register",
        element: <Registration></Registration>
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,

)
