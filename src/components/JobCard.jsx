import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import AuthHooks from "../hooks/AuthHooks";
import toast from "react-hot-toast";


const JobCard = ({ job }) => {
    const { _id, job_title } = job;
    const {user} = AuthHooks()

    const handleViewDetails = () => {
        if (!user){
            return toast.error("You have to log in first to view details")
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link onClick={handleViewDetails} to={`/job/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};
JobCard.propTypes = {
    job: PropTypes.object
}
export default JobCard;