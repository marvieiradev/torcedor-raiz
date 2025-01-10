import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Home } from "./Home";
import Search from "./Search";
import Team from "./Team";
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

    {
        path: "/team/:id",
        element: <Team />,
    },

    /*{
        path: "/guia-de-medidas",
        element: <GuiaMedidas />,
    },*/
]);

export const Router = () => (
    <RouterProvider router={router} />
)