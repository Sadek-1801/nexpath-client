import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthHooks from "../hooks/AuthHooks";
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';



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

    const onSubmit = (data) => {
        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                if (result.user) {
                    toast.success('Successfully Login')
                    navigate(from)
                }
            })
            .catch(() => {
                toast.error('Please Provide Correct Email & Password')
            })
    }
    const handleGoogleSignIn = () => {
        googleLogin()
            .then(() => {
                toast.success('Successfully Login')
                navigate(from)
            })
            .catch(() => {
                toast.error('Try Again')
            })
    }
    return (
        <div className="w-full max-w-md mx-auto p-4 rounded-md shadow sm:p-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">Dont have account?
                <Link to={'/register'} rel="noopener noreferrer" className="focus:underline hover:underline text-first font-bold">Sign up here</Link>
            </p>
            <div className="my-6 space-y-4">
                <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 dark:border-gray-400 focus:ring-default-600 focus:dark:ring-default-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
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