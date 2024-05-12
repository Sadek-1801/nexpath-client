import { useLoaderData } from "react-router-dom";
import AllJobsCard from "../components/AllJobsCard";

const AllJobs = () => {
    const jobs = useLoaderData()
    

    
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
                            jobs.map(job => <AllJobsCard 
                                key={job._id} job={job}></AllJobsCard>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllJobs;