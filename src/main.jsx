import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Components/Home/HomePage.jsx';
import AddToy from './Components/AddToy/AddToy.jsx';
import LoginForm from './Components/Authorization/Login.jsx';
import Registration from './Components/Authorization/Registration.jsx';
import AuthProvider from './Components/Authorization/AuthProvider.jsx';
import AllToys from './Components/AllToys/AllToys.jsx';
import ViewDetails from './Components/AllToys/ViewDetails.jsx';
import MyToys from './Components/MyToys/MyToys.jsx';
import ErrorPage from './Components/Home/Error/Error.jsx';
import PriveteRoute from './Components/Authorization/PriveteRoute/PriveteRoute.jsx';
import Blog from './Components/Home/Blog.jsx';
import ViewCart from './Components/Cart/ViewCart.jsx';

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
        element: <PriveteRoute><AddToy></AddToy></PriveteRoute>
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>
      },
      {
        path: "/toyDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) => fetch(`https://toy-market-server-liart.vercel.app/insertItem/${params.id}`)
      },
      {
        path: "/myToys",
        element: <PriveteRoute><MyToys></MyToys></PriveteRoute>
      },
      {
        path : "/cart",
        element : <PriveteRoute><ViewCart/></PriveteRoute>
      },
      {
        path: "/login",
        element: <LoginForm></LoginForm>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path: "/blogs",
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,

)
