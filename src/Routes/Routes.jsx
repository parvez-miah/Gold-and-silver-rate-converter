import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TableBuilder from "../App";
import Silver from "../Silver/Silver";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Gold from "../Gold/Gold";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
      {
        path: "/gold",
        element: <Gold></Gold>,
      },
      {
        path: "/silver",
        element: <Silver></Silver>,
      },
    ],
  },
]);
