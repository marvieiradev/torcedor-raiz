import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Home } from "./Home";
import Search from "./Search";
import Team from "./Team";
import Load from "./Load";
import MyTeam from "./MyTeam";
import Start from "./Start";
import NotFound from "./NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Start />,
    },

    {
        path: "/home",
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

    {
        path: "*",
        element: <NotFound />,
    },
]);

export const Router = () => (
    <RouterProvider router={router} />
)