import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import AuthHooks from "../hooks/AuthHooks";

// Modal.setAppElement('#CardDetails');
// 



const CardDetails = () => {
    const job = useLoaderData();
    const {user} = AuthHooks()
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const resumeLink = e.target.resumeLink.value;
        const appliedJob = {
            email: email,
            resumeLink: resumeLink
        }
        console.log(appliedJob, job)
        handleClose();
    };


    return (
        <section className="bg-gray-100 text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Ac mattis
                        <span className="text-default-600">senectus</span>erat pharetra
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                        <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <button onClick={handleOpen} className="btn bg-first text-white">Apply</button>
                        {isOpen && (
                            <div className="fixed top-0 left-0 w-full h-full bg-gray-900/50 flex justify-center items-center z-50">  
                            <div className="relative w-1/3 bg-white p-4 rounded-md">  
                            <h3>Apply Now</h3>
                            <form onSubmit={handleSubmit}>
                              <label htmlFor="email" className="block mb-2 font-bold text-sm text-gray-700">Email:</label>
                              <input readOnly defaultValue={user.email} type="email" id="email" name="email" required className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-first" />
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