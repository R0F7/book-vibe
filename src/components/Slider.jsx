import SliderImg from "../assets/pngwing 1.png"

const Slider = () => {
    return (
        <div className="hero min-h-[65vh] bg-[rgba(19,19,19,0.05)] rounded-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={SliderImg} className="max-w-sm max-h-[300px] lg:max-h-full rounded-lg " />
                <div>
                    <h1 className="text-5xl font-bold text-[#131313] Playfair-Display lg:text-6xl lg:mr-72 lg:mb-12 mb-6">Books to freshen up <br /> <span>your bookshelf</span></h1>
                    <button className="btn bg-[#23BE0A] text-white font-bold text-xl">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Slider;