import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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
    path: "/register",
    element: (<Register/>),
  },
  {
    path: "/login",
    element: (<Login/>),
  },
  {
    path: "/details",
    element: (<PersonalDetails/>),
  },
  {
    path: "/guidance",
    element: (<CareerGuidance/>),
  },
  // {
  //   path: "/goal",
  //   element: (<CareerGoals/>),
  // },
  
  
 
 
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>,
);