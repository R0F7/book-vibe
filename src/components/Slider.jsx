import { Link } from "react-router-dom";
import SliderImg from "../assets/pngwing 1.png"

const Slider = () => {
    return (
        <div className="hero h-[470px] lg:h-[600px] bg-[rgba(19,19,19,0.05)] rounded-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={SliderImg} className="max-w-sm max-h-[220px] lg:max-h-full rounded-lg " />
                <div>
                    <h1 className="text-4xl font-bold text-[#131313] Playfair-Display lg:text-6xl lg:mr-72 lg:mb-14 mb-8">Books to freshen up <br /> <span>your bookshelf</span></h1>
                    <Link to='/listed-books' className="p-3.5 lg:p-5  rounded-lg bg-[#23BE0A] text-white font-bold text-xl">View The List</Link>
                </div>
            </div>
        </div>
    );
};

export default Slider;