import { useState } from "react";
import AuthHooks from "../hooks/AuthHooks";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddJobs = () => {
    const { user } = AuthHooks()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [postingDate, setPostingDate] = useState(new Date());
    const [deadline, setDeadLine] = useState(new Date());
    const date = { postingDate, deadline }
    const onSubmit = async(data) => {
        const { employerName, employerEmail, jobTitle, picture, job_category, salaryMin, salaryMax} = data;
        const upSalaryMin = parseInt(salaryMin)
        const upSalaryMax = parseInt(salaryMax)

        const jobData = { employerName, employerEmail, jobTitle, picture, job_category, upSalaryMin, upSalaryMax, date,
        applicantNumber: 0
        }
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_LINK}/job`, jobData)
            toast.success("Job Added Successfully")
            navigate('/allJobs')
        }catch (error){
            toast.error(error)
        }
    }

    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Username</label>
                        <input defaultValue={user?.displayName} readOnly id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            {...register("employerName")} />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                        <input readOnly defaultValue={user?.email} id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" {...register("employerEmail")} />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="jobTitle">Job Title</label>
                        <input id="jobTitle" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" {...register("jobTitle", { required: true })} />
                        {errors.jobTitle && <span className='text-red-600'>This field is required</span>}
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="picture">Picture URL</label>
                        <input id="picture" type="url" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" {...register("picture", { required: true })} />
                        {errors.picture && <span className='text-red-600'>This field is required</span>}
                    </div>
                    <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700 dark:text-gray-200' htmlFor='category'>
                                Category
                            </label>
                            <select
                                name='category'
                                id='category'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring'
                                {...register("job_category")}
                            >
                                <option disabled value='empty'>Please Select an Option</option>
                                <option value='On-Site'>On-Site</option>
                                <option value='Remote'>Remote</option>
                                <option value='Hybrid'>Hybrid</option>
                                <option value='Part-Time'>Part-Time</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="salaryMin" className="text-gray-700 dark:text-gray-200">Salary Range : Min</label>

                            <div className="relative flex items-center mt-2">
                                <span className="absolute mt-2 ml-1">
                                    $
                                </span>

                                <input id="salaryMin" type="number" placeholder="Salary Range: Min" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" {...register("salaryMin", { required: true })} />
                                {errors.salaryMin && <span className='text-red-600'>This field is required</span>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="salaryMax" className="text-gray-700 dark:text-gray-200">Salary Range : Max</label>

                            <div className="relative flex items-center mt-2">
                                <span className="absolute mt-2 ml-1">
                                    $
                                </span>

                                <input id="salaryMax" type="number" placeholder="Salary Range: Max" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" {...register("salaryMax", { required: true })} />
                                {errors.salaryMax && <span className='text-red-600'>This field is required</span>}
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="deadline" className="text-gray-700 dark:text-gray-200 mr-4">Application Deadline</label> 
                        <ReactDatePicker
                            id="deadline"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            selected={deadline}
                            onChange={(date) => setDeadLine(date)} />
                    </div>
                    <div>
                        <label htmlFor="postingDate" className="text-gray-700 dark:text-gray-200 mr-4">Job Posting Date</label>
                        <ReactDatePicker
                            id="postingDate"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            selected={postingDate}
                            onChange={(date) => setPostingDate(date)} />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="Description" className="text-gray-700 dark:text-gray-200">Description</label>

                        <textarea placeholder="lorem..." className="block  mt-2 w-full  placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" {...register("description", { required: true })}></textarea>
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                </div>
            </form>
        </section>
    );
};

export default AddJobs;