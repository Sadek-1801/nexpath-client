import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import AuthHooks from "../hooks/AuthHooks";
import toast from "react-hot-toast";
import postingDate from "../assets/postingDate.png"
import deadline from "../assets/deadlink.png"
import salary from "../assets/salary.png"
import applicants from "../assets/applicants.png"
import { motion } from 'framer-motion';


const JobCard = ({ job }) => {
    const { _id, jobTitle, employerName, date, upSalaryMin, upSalaryMax, applicantNumber } = job;
    const { user } = AuthHooks()
    const handleViewDetails = () => {
        if (!user) {
            return toast.error("You have to log in first to view details")
        }
    }
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };
    return (

        <motion.div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between pt-4 mt-6"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
        >
            <div className="px-4 flex-1 flex flex-col justify-around">
                <h3 className="font-bold text-xlflex-1 ">{jobTitle}</h3>
                <p className="text-gray-500 text-base mb-2">Posted by: {employerName}</p>
            </div>
            <div className="px-4">

                <div className="flex items-center mb-2">
                    <span className="h-4 w-4 mr-6"><img src={postingDate} alt="" /></span>
                    <span className="text-gray-500 text-sm">{new Date(date.postingDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center mb-2">
                    <span className="h-4 w-4 mr-6"><img src={deadline} alt="" /></span>
                    <span className="text-gray-500 text-sm">Deadline: {new Date(date.deadline).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center mb-2">
                    <span className="h-4 w-4 mr-6"><img src={salary} alt="" /></span>
                    <span className="text-gray-500 text-sm">Salary: {upSalaryMin}-{upSalaryMax}</span>
                </div>
                <div className="flex items-center mb-2">
                    <span className="h-4 w-4 mr-6"><img src={applicants} alt="" /></span>
                    <span className="text-gray-500 text-sm">Applicants:{applicantNumber}</span>
                </div>
            </div>
            <div className="flex items-center justify- px-4 pb-2">
                <Link onClick={handleViewDetails} to={`/job/${_id}`} className="inline-flex items-center px-4 py-2 bg-first text-white font-bold rounded-md shadow hover:bg-blue-700 w-full focus:outline-none justify-center">
                    View Details
                </Link>
            </div>
        </motion.div>
    );
};
JobCard.propTypes = {
    job: PropTypes.object
}
export default JobCard;