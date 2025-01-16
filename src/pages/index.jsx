import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Home } from "./Home";
import Search from "./Search";
import Team from "./Team";
import Load from "./Load";
import MyTeam from "./MyTeam";
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
        path: "/team/:id/:name",
        element: <Team />,
    },

    {
        path: "/load/:id",
        element: <Load />,
    },

    {
        path: "/myteam",
        element: <MyTeam />,
    },
]);

export const Router = () => (
    <RouterProvider router={router} />
)