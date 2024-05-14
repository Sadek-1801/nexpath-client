import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import JobCard from "./JobCard";

const TabCard = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_LINK}/jobs`)
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])
    return (
        <div className="my-6 md:my-12">
            <Tabs defaultIndex={1}>
                    <h1 className="text-4xl text-second font-bold text-center my-10 lg:my-16">Job Categories</h1>
                <div className="flex items-center justify-center">
                <TabList>
                    <Tab>All Jobs</Tab>
                    <Tab>On-Site Jobs</Tab>
                    <Tab>Remote Jobs</Tab>
                    <Tab>Hybrid Jobs</Tab>
                    <Tab>Part Time Jobs</Tab>
                </TabList>
                </div>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        jobs
                        .filter(j => j.job_category.toLowerCase() ===  "on-site")
                        .map(job => <JobCard key={job._id} job={job}></JobCard> )
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        jobs
                        .filter(j => j.job_category.toLowerCase() ===  "remote")
                        .map(job => <JobCard key={job._id} job={job}></JobCard> )
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        jobs
                        .filter(j => j.job_category.toLowerCase() ===  "hybrid")
                        .map(job => <JobCard key={job._id} job={job}></JobCard> )
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        jobs
                        .filter(j => j.job_category.toLowerCase() ===  "part-time")
                        .map(job => <JobCard key={job._id} job={job}></JobCard> )
                    }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabCard;