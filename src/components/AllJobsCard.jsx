import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import AuthHooks from '../hooks/AuthHooks';
import PropTypes from "prop-types"
const AllJobsCard = ({job}) => {
    const { _id, jobTitle, date, upSalaryMin, upSalaryMax } = job;
    

   
    return (
        
    );
};
AllJobsCard.propTypes = {
    job: PropTypes.object
}
export default AllJobsCard;