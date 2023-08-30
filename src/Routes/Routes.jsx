import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import TableBuilder from "../App";
import Silver from "../Silver/Silver";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <TableBuilder />,
    },
    {
        path: '/silver',
        element: <Silver />,
    }

]);