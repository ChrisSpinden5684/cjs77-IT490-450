import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Route,
  Outlet
} from "react-router-dom";
import "./CSS/index.css";
import Landing from "./routes/Landing"
import Login from "./routes/Login"
import Profile from "./routes/Profile"
import Register from "./routes/Register"
import Navbar from "./components/Navbar";
import App from "./App";

const AppLayout = () => (
    <>
    <Navbar />
    <Outlet />
    </>

);
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing/>,
      },
      {
        path: "Login",
        element: <Login/>,
      },
      {
        path: "Register",
        element: <Register/>,
      },
      {
        path: "Profile",
        element: <Profile/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);