import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthHooks from "../hooks/AuthHooks";
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from "axios";



const Login = () => {
    const { signIn, googleLogin } = AuthHooks()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // sign in

    const onSubmit = async(data) => {
        const { email, password } = data;
        try{
          const result = await signIn(email, password)
          const { data } = await axios.post(
            `${import.meta.env.VITE_API_LINK}/jwt`,
            { email: result?.user?.email },
            { withCredentials: true })
            console.log(data);
            toast.success('Successfully Login')
            navigate(from)
        }catch(error){
            toast.error(error?.message)
        }}
           
        // google login
    const handleGoogleSignIn = async () => {
        try {
            const result = await googleLogin()
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_LINK}/jwt`,
                { email: result?.user?.email },
                { withCredentials: true })
                console.log(data);
                toast.success('Successfully Login')
                navigate(from)
        }
        catch (error) {
            toast.error(error?.message)
        }
        // googleLogin()
        //     .then(() => {
        //         toast.success('Successfully Login')
        //         navigate(from)
        //     })
        //     .catch((error) => {
        //         toast.error(error?.message)
        //     })
    }
    return (
        <div className="w-full max-w-md mx-auto p-4 rounded-md shadow sm:p-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">Dont have account?
                <Link to={'/register'} rel="noopener noreferrer" className="focus:underline hover:underline text-first font-bold">Sign up here</Link>
            </p>
            <div className="my-6 space-y-4">
                <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 dark:border-gray-400 focus:ring-default-600 focus:dark:ring-default-400">
                    <svg className="w-6 h-6" viewBox="0 0 40 40">
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                    </svg>
                    <p>Login with Google</p>
                </button>
            </div>
            <div className="flex items-center w-full my-4">
                <hr className="w-full text-gray-600 dark:text-gray-400" />
                <p className="px-3 text-gray-600 dark:text-gray-400">OR</p>
                <hr className="w-full text-gray-600 dark:text-gray-400" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:border-default-600 focus:dark:border-default-400" {...register("email", { required: true })} />
                        {errors.email && <span className='text-red-600'>This field is required</span>}
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600 dark:text-gray-400">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="password" className="w-full px-3 py-2 border rounded-md border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:border-default-600 focus:dark:border-default-400" {...register("password", { required: true })} />
                        {errors.password && <span className='text-red-600'>This field is required</span>}
                    </div>
                </div>
                <input type="submit" value="Sign In" className=" bg-first w-full px-8 py-3 font-semibold rounded-md text-gray-50 dark:text-gray-900 bg-default-600 dark:bg-default-400 cursor-pointer" />
            </form>
        </div>
    );
};

export default Login;