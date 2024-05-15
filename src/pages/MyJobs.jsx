import axios from "axios";
import { useEffect, useState } from "react";
import AuthHooks from "../hooks/AuthHooks";
import editIcon from "../assets/icons8-edit.gif";
import deleteIcon from "../assets/icons8-delete.gif";
import { Link } from "react-router-dom";

const MyJobs = () => {
    const [jobs, setJobs] = useState([]);
    const {user} = AuthHooks()
    useEffect(()=> {
        const myJobsData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_LINK}/myJob/${user?.email}`, {withCredentials: true})
            setJobs(data)
        }
        myJobsData()
    }, [user])
    // useEffect(()=> {
    //     fetch(`${import.meta.env.VITE_API_LINK}/myJob/${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [])
    return (
        <div className="container p-2 mx-auto sm:p-4 text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">All Jobs</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col />
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
                            <th className="p-3">Action</th>
                            <th className="p-3 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map(job => 
                            <tr key={job._id} className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                            <td className="p-3">
                                <p>{job.jobTitle}</p>
                            </td>
                            <td className="p-3">
                                <p>Microsoft Corporation</p>
                            </td>
                            <td className="p-3">
                                <p>14 Jan 2022</p>
                                <p className="text-gray-600">Friday</p>
                            </td>
                            <td className="p-3">
                                <p>01 Feb 2022</p>
                                <p className="text-gray-600">Tuesday</p>
                            </td>
                            <td className="p-3">
                                <button>
                                    <Link to={`/update/${job._id}`}><img src={editIcon} alt="" /></Link>
                                    </button>
                            </td>
                            <td className="p-3 text-right">
                                <button>
                                    <Link to={`/delete/${job._id}`}><img className="object-cover" src={deleteIcon} alt="" /></Link>
                                </button>
                            </td>
                        </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobs;