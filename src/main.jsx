import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx' 
import store from './redux/store.js'
import { Provider } from 'react-redux'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
 {
    path: "/login",
    element: (<Login/>),
  },
  {
    path: "/register",
    element: (<Register/>),
  },

]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>,
);