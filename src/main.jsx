import React from 'react'
import ReactDOM from 'react-dom/client'
import {  HelmetProvider } from 'react-helmet-async';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import ErrorPage from './components/pages/ErrorPage';
import Home from './components/pages/Home';
import Root from './components/pages/Root';
import Login from './components/pages/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import Signup from './components/pages/Signup';
import Allitems from './components/pages/Allitems';
import Mylist from './components/pages/Mylist';
import Additem from './components/pages/Additem';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Update from './components/Update';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () =>fetch('http://localhost:5000/item')
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/signup",
      element:<Signup></Signup>,
      },
      {
        path:"/allitems",
      element:<Allitems></Allitems>,
      },
      {
        path:"mylist",
      element:<Mylist></Mylist>,
      },
      {
        path:"/add",
      element:<PrivateRoute><Additem></Additem></PrivateRoute>,
      },
      {
        path:"/update/:id",
      element:<PrivateRoute><Update></Update></PrivateRoute>,
      },
    ], 
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
 <AuthProvider>
  <HelmetProvider>  
  <RouterProvider router={router} />
  </HelmetProvider> 
</AuthProvider>
    </React.StrictMode>,
  )
