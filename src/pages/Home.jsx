import { Button } from "@material-tailwind/react";
import TabCard from "../components/TabCard";
import Slider from "../components/Slider";
const Home = () => {
    return (
        <div>
            <h3>this is home</h3>
            <Slider></Slider>
            <TabCard></TabCard>
            <Button>Button</Button>
        </div>
    );
};

export default Home;