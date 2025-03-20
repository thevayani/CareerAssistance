import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx' 
import store from './redux/store.js'
import { Provider } from 'react-redux'
import UserDetails from './pages/UserDetails.jsx'
import ShowUser from './pages/ShowUser.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/register",
    element: (<Register/>),
  },

 {
    path: "/login",
    element: (<Login/>),
  },
  {
    path: "/details",
    element: (<UserDetails/>),
  },
  {
    path: "/show",
    element: (<ShowUser/>),
  },
  
  
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
);