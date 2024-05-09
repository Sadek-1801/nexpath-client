import Root from "../layouts/Root"
import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../pages/ErrorElement";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AllJobs from "../pages/AllJobs";
import Blogs from "../pages/Blogs";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/", 
                element: <Home></Home>
            },
            {
                path: "/allJobs",
                element: <AllJobs></AllJobs>
            },
            {
                path: "/login",
                element: <Login></Login>
            }, 
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
        ]
    },
]);