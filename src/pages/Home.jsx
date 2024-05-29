import TabCard from "../components/TabCard";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import BlogCard from "../components/BlogCard";
import Reviews from "./Reviews";
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TabCard></TabCard>
            <BlogCard></BlogCard>
            <Reviews></Reviews>
            <Newsletter />

        </div>
    );
};

export default Home;