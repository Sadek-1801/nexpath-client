import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../index.css'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Slider = () => {
    return (
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            loop={true}
            navigation={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}

            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Navigation, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <section className="bg-gray-100 dark:bg-gray-800 lg:flex lg:justify-between h-[30rem]">
                    <div
                        className="overflow-hidden bg-white dark:bg-gray-900 lg:flex lg:w-full lg:shadow-md lg:rounded-xl">
                        <div className="lg:w-1/2 py-12 pr-6 pl-12">
                            <div className="h-30 sm:h-full rounded-xl"
                                style={{
                                    backgroundImage: `url(https://res.cloudinary.com/dyssealhz/image/upload/v1715676865/rivage-Fa9b57hffnM-unsplash_bxrodn.jpg)`, backgroundSize: 'cover',
                                }}></div>
                        </div>

                        <div className="flex flex-col justify-center max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2 pr-12">
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-4xl">
                                Unleash Your Potential: Explore Jobs by Category
                            </h2>

                            <p className="mt-4 text-gray-500 dark:text-gray-300">
                                Dive into a vast selection of jobs across various industries. Whether you seek remote flexibility, a hybrid balance, or a traditional onsite environment, nexpath has it all. Find your dream job, no matter your work style preference.
                            </p>

                            <div className="inline-flex  mt-6 sm:w-auto">
                                <Link to={'/allJobs'} className="inline-flex items-center justify-center  px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                    Explore
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </SwiperSlide>
            <SwiperSlide>
            <section className="bg-gray-100 dark:bg-gray-800 lg:flex lg:justify-between h-[30rem]">
                    <div
                        className="overflow-hidden bg-white dark:bg-gray-900 lg:flex  lg:w-full lg:shadow-md lg:rounded-xl">
                        <div className="lg:w-1/2 py-12 pr-6 pl-12">
                            <div className="h-30 sm:h-full rounded-xl"
                                style={{
                                    backgroundImage: `url(https://res.cloudinary.com/dyssealhz/image/upload/v1715677054/priscilla-du-preez-XkKCui44iM0-unsplash_zpgxag.jpg)`, backgroundSize: 'cover',
                                }}>

                                </div>
                        </div>

                        <div className="max-w-xl px-6 flex flex-col justify-center py-12 lg:max-w-5xl lg:w-1/2 pr-12">
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-4xl">
                            Find Your Perfect Fit: Explore Jobs by Work Style
                            </h2>

                            <p className="mt-4 text-gray-500 dark:text-gray-300">
                            Discover remote, hybrid, onsite, and part-time opportunities to match your lifestyle and career goals. Explore job postings that fit how you want to work!
                            </p>

                            <div className="inline-flex mt-6 sm:w-auto">
                                <Link to={'/allJobs'} className="inline-flex items-center justify-center px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                    Explore
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </SwiperSlide>
            <SwiperSlide>
            <section className="bg-gray-100 dark:bg-gray-800 lg:flex lg:justify-between h-[30rem]">
                    <div
                        className="overflow-hidden bg-white dark:bg-gray-900  lg:flex  lg:w-full lg:shadow-md lg:rounded-xl">
                        <div className="lg:w-1/2 py-12 pr-6 pl-12">
                            <div className="h-30 sm:h-full rounded-xl"
                                style={{
                                    backgroundImage: `url(https://res.cloudinary.com/dyssealhz/image/upload/v1715680111/andrew-neel-cckf4TsHAuw-unsplash_trbaem.jpg)`, backgroundSize: 'cover',
                                }}></div>
                        </div>

                        <div className="max-w-xl px-6 flex flex-col justify-center py-12 lg:max-w-5xl lg:w-1/2 pr-12">
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-4xl">
                            Work from Anywhere: Explore Remote Jobs
                            </h2>

                            <p className="mt-4 text-gray-500 dark:text-gray-300">
                            Embrace the freedom and flexibility of remote work. nexpath connects you with a world of remote opportunities, allowing you to work from the comfort of your home or any inspiring location.
                            </p>

                            <div className="inline-flex mt-6 sm:w-auto">
                                <Link to={'/allJobs'} className="inline-flex items-center justify-center  px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                    Explore
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;