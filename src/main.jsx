import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import Chat from "./pages/chat/index.jsx";
import ProtectedRoutes from "./sharedComponents/protectedRoutes/index.jsx";
import Layout from "./sharedComponents/layout/index.jsx";
import Settings from "./pages/settings/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/chats",
            element: <Home />,
          },
          {
            path: "/settings",
            element: <Settings />,
          },
          {
            path: "*",
            element: <div>404 page</div>,
          },
        ],
      },
      {
        path: "/chat/:chat",
        element: <Chat />,
      },
    ],
  },
  {
    path: "/login",
    element: <div>login page</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
