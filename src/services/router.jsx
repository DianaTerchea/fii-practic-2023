import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import React from "react"
import Login from "../pages/login"
import Register from "../pages/register"
import Profile from "../pages/profile"

function TestRoute() {
  return <span>Test</span>
}

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Home />,
  },
  {
    path: "/test",
    element: <TestRoute />,
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
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/find",
    element: <Profile />,
  },
])
