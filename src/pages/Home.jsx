// import { Outlet, useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import Books from "../components/Books";
import Slider from "../components/Slider";

const Home = () => {
    // const books = useLoaderData();
    // console.log(books);

    return (
        <div>
            <Slider></Slider>
            {/* <Books books = {books}></Books> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;