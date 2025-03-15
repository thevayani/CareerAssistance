import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import PersonalDetails from './pages/PersonalDetails.jsx'
import CareerGuidance from './pages/CareerGuidance.jsx'
import CareerGoals from './pages/CareerGoals.jsx'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import Selfintro from './pages/selfintro.jsx'

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
  {
    path: "/goal",
    element: (<CareerGoals/>),
  },
  {
    path: "/self",
    element: (<Selfintro/>),
  },
  
  
 
 
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>,
);