import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import AuthHooks from '../hooks/AuthHooks';
import axios from 'axios';
const Register = () => {
    const { createUser, updateUserProfile, setUser } = AuthHooks()
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { email, password, fullName, photoURL } = data;
        if (password.length < 6) {
            toast.error('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Za-z]/.test(password)) {
            toast.error('Your password should have at least one upper and one lower case characters.')
            return;
        }
        try {
            const result = await createUser(email, password);

            await updateUserProfile(fullName, photoURL);

            setUser({...result?.user, photoURL: photoURL, displayName: fullName})

            // jwt 
            // eslint-disable-next-line no-unused-vars
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_LINK}/jwt`,
                { email: email },
                { withCredentials: true })

            toast.success('Successfully registered');
            navigate("/");
        }catch(error){
            toast.error(error?.message);
        }
        // createUser(email, password)
        //     .then(() => {
        //         updateUserProfile(fullName, photoURL)
        //             .then(() => {
        //                 setUser({ ...user, photoURL: photoURL, displayName: fullName })
        //                 toast.success('Successfully registered')
        //                 navigate("/");
        //             });
        //     })
        //     .catch((error) => {
        //         toast.error(error?.message)
        //     })
    }
    return (
        <div className='w-full max-w-md mx-auto p-4 rounded-md shadow sm:p-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100'>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm">Name</label>
                        <input type="name" name="name" id="name" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:border-default-600 focus:dark:border-default-400" {...register("fullName", { required: true })} />
                        {errors.fullName && <span className='text-red-600'>This field is required</span>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="photo" className="block text-sm">Photo URL</label>
                        <input type="photo" name="photo" id="photo" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:border-default-600 focus:dark:border-default-400" {...register("photoURL", { required: true })} />
                        {errors.photoURL && <span className='text-red-600'>This field is required</span>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:border-default-600 focus:dark:border-default-400" {...register("email", { required: true })} />
                        {errors.email && <span className='text-red-600'>This field is required</span>}
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between relative">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <p rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600 dark:text-gray-400">Forgot password?</p>
                        </div>
                        <div className='relative'>
                            <input type={showPass ? "text" : "password"} name="password" placeholder="password" className="w-full px-3 py-2 border rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:border-default-600 focus:dark:border-default-400" {...register("password", { required: true })} />
                            {errors.password && <span className='text-red-600'>This field is required</span>}
                            <span className='absolute top-4 right-2' onClick={() => setShowPass(!showPass)}>
                                {showPass ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>}
                            </span>
                        </div>
                    </div>
                </div>
                <input type="submit" value="Sign Up" className='cursor-pointer bg-first w-full px-8 py-3 font-semibold rounded-md text-gray-50 dark:text-gray-900 bg-default-600 dark:bg-default-400' />
            </form>
            <p className="font-bold text-2xl">Already have an account? <Link to={'/login'} className="text-blue-600">Login</Link></p>
        </div>
    );
};

export default Register;