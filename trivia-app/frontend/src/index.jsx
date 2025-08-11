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
import CreateQuestion from "./components/CreateQuestionForm";
import CreateQuestionManual from "./routes/CreateQuestionMan.jsx";
import UpdateQuestion from "./components/UpdateQuestionForm";
import Participate from "./components/ParticipationForm";

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
        element: <Home/>,
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
        path: "CreateQuestion",
        element: <CreateQuestion/>,
      },
      {
        path: "CreateQuestionManual",
        element: <CreateQuestionManual/>,
      },
      {
        path: "UpdateQuestion",
        element: <UpdateQuestion/>,
      },
      {
        path: "Participation",
        element: <Participate/>,
      },
      {
        path: "Profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);