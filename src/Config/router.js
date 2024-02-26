import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from '../view/dashboard'
import Detail from "../view/detail";
import Register from "../view/register";
import LogIn from "../view/login";
import CreateAdd from "../view/postAdd";
import Profile from "../view/profile";
import AdToCart from "../view/adToCart";
const router = createBrowserRouter([

    {
        path: "/",
        element: <Dashboard />,
    },

    {
        path: "/adtocart",
        element: <AdToCart />,
    },

    {
        path: '/register',
        element: <Register />,
    },


    {
        path: '/postadd',
        element: <CreateAdd />,
    },

    {
        path: '/profile',
        element: <Profile />,
    },

    {
        path: '/login',
        element: <LogIn />,
    },



    {
        path: `/details/:Id`,
        element: <Detail />,
    },




]);
function Router() {

    return <RouterProvider router={router} />
}
export default Router;