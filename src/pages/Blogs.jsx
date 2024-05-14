import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        const myBlogsData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_LINK}/blogs`)
            setBlogs(data)
        }
        myBlogsData()
    }, [])
    return (
        <div className="bg-gray-100 text-gray-800 flex flex-col gap-8">
            {
                blogs.map(blog => <div key={blog._id} className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-first">{blog.date}</span>
                    <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-default-600 text-second">{blog?.category || "Category Unknown"}</a>
                </div>
                <div className="mt-3">
                    <h1 rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">{blog?.title}</h1>
                    <p className="mt-2">{blog?.excerpt}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <Link to={`/blog/${blog._id}`} rel="noopener noreferrer" className="hover:underline text-default-600">Read more</Link>
                    <div>
                        <Link rel="noopener noreferrer" href="#" className="flex items-center">
                            <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500" />
                            <span className="hover:underline text-gray-600">{blog.author}</span>
                        </Link>
                    </div>
                </div>
            </div>)
            }
        </div>
    );
};

export default Blogs;