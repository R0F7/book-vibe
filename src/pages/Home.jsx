// import { Outlet, useLoaderData } from "react-router-dom";
import Books from "../components/Books";
import Slider from "../components/Slider";

const Home = () => {
    // const books = useLoaderData();
    // console.log(books);

    return (
        <div>
            <Slider></Slider>
            <Books ></Books>
        </div>
    );
};

export default Home;