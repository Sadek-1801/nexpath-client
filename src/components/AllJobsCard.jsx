import toast from 'react-hot-toast';
import { Link, Navigate, useLocation } from 'react-router-dom';
import AuthHooks from '../hooks/AuthHooks';
import PropTypes from "prop-types"
const AllJobsCard = ({job}) => {
    const { _id, job_title } = job;
    const location = useLocation()
    const {user} =AuthHooks()

    const handleViewDetails = () => {
        if (!user){
            toast.error("You have to log in first to view details")
            Navigate ({ state: location?.pathname || '/'})
            return;
        }
    }
    return (
        <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                            <td className="p-3">
                                <p>{job_title}</p>
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
                            <td className="p-3 text-right">
                            <Link onClick={handleViewDetails} to={`/job/${_id}`} className="btn btn-primary">View Details</Link>
                            </td>
                        </tr>
    );
};
AllJobsCard.propTypes = {
    job: PropTypes.object
}
export default AllJobsCard;