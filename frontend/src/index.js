import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreateBlog from "./views/CreateBlog";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/create-blog", element: <CreateBlog /> },
]);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
