import { Navigate, useLocation } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import AuthHooks from '../hooks/AuthHooks';

const PrivateRouts = ({ children }) => {
    const { user, loader } = AuthHooks()
    const location = useLocation()
    if (loader) {
        return <div className='flex items-center justify-center my-32'><RingLoader color="#FD5056" size={200} /></div>
    }
    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>;
    }
    return (
        <div>
            {children}
        </div>
    );


};
PrivateRouts.propTypes = {
    children: PropTypes.node
}
export default PrivateRouts;