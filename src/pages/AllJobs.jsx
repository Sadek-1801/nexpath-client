import { Link } from "react-router-dom";
import AuthHooks from "../hooks/AuthHooks";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";

const AllJobs = () => {
    // const jobs = useLoaderData()
    const { user } = AuthHooks()
    const [jobs, setJobs] = useState([])
    const [search, setSearchText] = useState("")
    useEffect(() => {
        const getJobs = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_LINK}/all_jobs?search=${search}`)
            setJobs(data)
        }
        getJobs()
    }, [search])

    const handleViewDetails = () => {
        if (!user) {
            return toast.error("You have to log in first to view details");
        }
    }
    const handleSearch = () => {
        setSearchText(search)
    }
    return (
        <div className="container p-2 mx-auto sm:p-4 text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight text-center">All Jobs</h2>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-center">Search Your Desired Jobs</h2>
            <fieldset className="w-full sm:w-1/3 space-y-1 text-gray-800 dark:text-gray-100 mx-auto mt-10 mb-16">
                <label htmlFor="Search" className="hidden">Search</label>

                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center">
                        <button onClick={handleSearch} type="button" title="search" className="focus:outline-none focus:ring bg-first rounded-l h-full text-white p-4">

                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-white dark:text-gray-100">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                        </button>
                    </span>
                    <div>
                        <input value={search} onChange={e => setSearchText(e.target.value)} type="search" name="search" placeholder="Search..." className="w-full py-2 pl-14 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-second dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-first" />
                       
                    </div>
                </div>
            </fieldset>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                    </colgroup>
                    <thead className="bg-gray-300">
                        <tr className="text-left">
                            <th className="p-3">Job Title</th>
                            <th className="p-3">Job Posting Date</th>
                            <th className="p-3">Application Deadline</th>
                            <th className="p-3">Salary Range</th>
                            <th className="p-3 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map(job => <tr key={job._id} className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                                <td className="p-3">
                                    <p>{job?.jobTitle}</p>
                                </td>
                                <td className="p-3">
                                    <p>{new Date(job?.date?.postingDate).toLocaleDateString()}</p>
                                </td>
                                <td className="p-3">
                                    <p>{new Date(job?.date?.deadline).toLocaleDateString()}</p>
                                </td>
                                <td className="p-3">
                                    <p>${job?.upSalaryMin}-{job?.upSalaryMax}</p>
                                </td>
                                <td className="p-3 text-right">
                                    <Link onClick={handleViewDetails} to={`/job/${job._id}`} className="btn bg-first text-white">View Details</Link>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllJobs;