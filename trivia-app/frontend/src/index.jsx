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
import Home from "./routes/Landing"
import Login from "./routes/Login"
import Profile from "./routes/Profile"
import Register from "./routes/Register"
import Navbar from "./components/Navbar";
import Logout from "./components/Logout.jsx";
import App from "./App";
import ProtectedRoute from "./components/ProtectedRoute";

const AppLayout = () => (
    <>
    <Logout />
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
        element: <Login/>,
      },
      {
        path: "LandingPage",
        element: <Home/>,
      },
      {
        path: "Register",
        element: <Register/>,
      },
      {
        path: "Profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);