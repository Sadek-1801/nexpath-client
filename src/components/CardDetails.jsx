import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import AuthHooks from "../hooks/AuthHooks";
import salary from "../assets/salary.png"
import applicants from "../assets/applicants.png"
import toast from "react-hot-toast";
import axios from "axios";




const CardDetails = () => {
    const job = useLoaderData();
    const { user } = AuthHooks()
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user?.email === job?.employerEmail) {
            return toast.error('You can not apply for this job')
        }
        const newDate = new Date().toLocaleDateString()
        // const deadLine = job?.date?.deadline
        const deadLine = new Date(job?.date?.deadline).toLocaleDateString()

        if (newDate > deadLine) {
            return toast.error('Application deadline is over')
        }
        const name = e.target.name.value;
        const email = e.target.email.value;
        const resumeLink = e.target.resumeLink.value;
        const appliedJob = {
            name: name,
            email: email,
            resumeLink: resumeLink,
            employerEmail: job.employerEmail,
            job_category: job.job_category,
            jobTitle: job.jobTitle,
            upSalaryMax: job.upSalaryMax,
            upSalaryMin: job.upSalaryMin, 
            jobId: job._id
        }
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_LINK}/appliedJob`, appliedJob)
            console.log(data)
            toast.success("Applied Successfully")
        } catch (error) {
            toast.error(error)
        }
        handleClose();
    };
    const { picture, jobTitle, description, upSalaryMin, upSalaryMax, applicantNumber } = job;
    return (
        <section className="bg-gray-100 text-gray-800">
            <div className=" container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-between rounded-md">
                <div style={{ backgroundImage: `url(${picture})`, backgroundSize: 'cover' }} className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-lg w-full">
                    {/* <img className="rounded-lg object-cover" src={picture} alt="job-banner"/> */}
                </div>
                {/* Job Details */}
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h2 className="text-2xl font-bold mb-2">{jobTitle}</h2>
                    <p className="text-gray-700 mb-4">{description}</p>
                    <div className="flex items-center mb-2">
                        <span className="h-8 w-8 mr-3"><img src={salary} alt="" /></span>
                        <span className="text-gray-700">Salary: ${upSalaryMin} - {upSalaryMax}</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="h-8 w-8 mr-3"><img src={applicants} alt="" /></span>
                        <span className="text-gray-700"> Applicants: {applicantNumber}</span>
                    </div>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <button onClick={handleOpen} className="btn w-full bg-first text-white">Apply</button>
                        {isOpen && (
                            <div className="fixed top-0 left-0 w-full h-full bg-gray-900/50 flex justify-center items-center z-50">
                                <div className="relative w-1/3 bg-white p-4 rounded-md">
                                    <h3>Apply Now</h3>
                                    <form onSubmit={handleSubmit}>
                                        <label htmlFor="name" className="block mb-2 font-bold text-sm text-gray-700">Name:</label>
                                        <input readOnly defaultValue={user?.displayName} type="email" id="name" name="name" required className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-first" />
                                        <br />
                                        <label htmlFor="email" className="block mb-2 font-bold text-sm text-gray-700">Email:</label>
                                        <input readOnly defaultValue={user?.email} type="email" id="email" name="email" required className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-first" />

                                        <br />
                                        <label htmlFor="resumeLink" className="block mt-4 mb-2 font-bold text-sm text-gray-700">Resume Link:</label>
                                        <input type="url" id="resumeLink" name="resumeLink" required className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-first" />
                                        <br />
                                        <button type="submit" className="mt-5 inline-flex items-center px-4 py-2 rounded-md bg-first text-white font-bold shadow-sm hover:bg-white hover:text-second">
                                            Submit
                                        </button>
                                    </form>
                                    <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardDetails;