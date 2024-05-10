import Root from "../layouts/Root"
import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../pages/ErrorElement";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import AllJobs from "../pages/AllJobs";
import Blogs from "../pages/Blogs";
import AppliedJobs from "../pages/AppliedJobs";
import PrivateRouts from "./PrivateRouts";
import AddJobs from "../pages/AddJobs";
import MyJobs from "../pages/MyJobs";
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
            {
                path: "/appliedJobs",
                element: <PrivateRouts><AppliedJobs></AppliedJobs></PrivateRouts>
            },
            {
                path: "/addJobs",
                element: <PrivateRouts><AddJobs></AddJobs></PrivateRouts>
            },
            {
                path: "/myJobs",
                element: <PrivateRouts><MyJobs></MyJobs></PrivateRouts>
            },
            
        ]
    },
]);