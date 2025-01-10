import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Home } from "./Home";
import Search from "./Search";
//import Produto from "./Produto";
//import GuiaMedidas from "./GuiaMedidas";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },

    {
        path: "/search/:id",
        element: <Search />,
    },

    /*{
        path: "/produto/:id",
        element: <Produto />,
    },

    {
        path: "/guia-de-medidas",
        element: <GuiaMedidas />,
    },*/
]);

export const Router = () => (
    <RouterProvider router={router} />
)