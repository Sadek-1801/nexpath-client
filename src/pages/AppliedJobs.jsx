import axios from "axios";
import { useEffect, useState } from "react";
import AuthHooks from "../hooks/AuthHooks";
import { GrPowerReset } from "react-icons/gr";


const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [jobFilter, setjobFilter] = useState('');
    const { user } = AuthHooks()

    useEffect(() => {
        const appliedJobsData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_LINK}/appliedJob/${user?.email}?filter=${jobFilter}`, { withCredentials: true })
            setAppliedJobs(data)
        }
        appliedJobsData()
    }, [user, jobFilter])
    console.log(jobFilter, appliedJobs);
    return (
        <section>
            <div className='flex flex-col gap-2 w-full sm:w-1/3 space-y-1 text-gray-800 dark:text-gray-100 mx-auto mt-10 mb-16'>
                <label className='mb-4 text-3xl font-bold leading-tight text-center' htmlFor='category'>
                    Choose your Category
                </label>
                <div className="flex gap-3">
                <select
                    onChange={e => setjobFilter(e.target.value)}
                    value={jobFilter}
                    name='category'
                    id='category'
                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'>
                    <option disabled selected >Please Select an Option</option>
                    <option value='On-Site'>On-Site</option>
                    <option value='Remote'>Remote</option>
                    <option value='Hybrid'>Hybrid</option>
                    <option value='Part-Time'>Part-Time</option>
                </select>
                <button onClick={() => setjobFilter("")} className="flex items-center" ><GrPowerReset></GrPowerReset>
                {/* <img className="h-5 w-5" src={reset} alt="" /> */}
                </button>
                </div>
            </div>
            <table className="table-auto w-full rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-100 text-left text-sm font-medium">
                        <th className="px-4 py-2">Job Title</th>
                        <th className="px-4 py-2">Job Category</th>
                        <th className="px-4 py-2">Salary Range</th>
                        <th className="px-4 py-2">Resume</th>
                    </tr>
                </thead>
                <tbody>
                    {appliedJobs.map((appliedJob, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="px-4 py-2">{appliedJob.jobTitle}</td>
                            <td className="px-4 py-2">{appliedJob.job_category}</td>
                            <td className="px-4 py-2">$ {appliedJob?.upSalaryMin} - {appliedJob?.upSalaryMax}</td>
                            <td className="px-4 py-2">
                                <a className="underline text-blue-800" href={appliedJob.resumeLink} target="_blank" rel="noopener noreferrer">
                                    View Resume
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default AppliedJobs;