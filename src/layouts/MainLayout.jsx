import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayout = () => {
    return (
        <div className="container mx-auto px-5 lg:px-0">
            <div>
                <Nav></Nav>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;