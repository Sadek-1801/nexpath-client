import TabCard from "../components/TabCard";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import BlogCard from "../components/BlogCard";
import Reviews from "./Reviews";
import PostReview from "../components/PostReview";
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TabCard></TabCard>
            <BlogCard></BlogCard>
            <Reviews></Reviews>
            <PostReview></PostReview>
            <Newsletter />

        </div>
    );
};

export default Home;