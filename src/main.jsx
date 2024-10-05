import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Ensure this file exists
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx"; // Ensure the path is correct

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
