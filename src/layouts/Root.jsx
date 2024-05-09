import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div className="p-3 md:max-w-4xl lg:max-w-7xl mx-auto">
            <Nav></Nav>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Root;