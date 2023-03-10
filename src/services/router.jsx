import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Home />,
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
])
