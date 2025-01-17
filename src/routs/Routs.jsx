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
import CardDetails from "../components/CardDetails";
import UpdateJob from "../components/UpdateJob";
import BlogsCard from "../components/BlogsCard";
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
                element: <AllJobs></AllJobs>,
                loader: () => fetch(`${import.meta.env.VITE_API_LINK}/jobs`)
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
            {
                path: "/job/:id",
                element: <PrivateRouts><CardDetails></CardDetails></PrivateRouts>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_LINK}/job/${params.id}`)
            },
            {
                path: "/blog/:id",
                element: <BlogsCard></BlogsCard>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_LINK}/blog/${params.id}`)
            },
            {
                path: "/update/:id",
                element: <PrivateRouts><UpdateJob></UpdateJob></PrivateRouts>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_LINK}/job/${params.id}`)
            },
            
        ]
    },
]);