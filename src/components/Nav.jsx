import { NavLink } from "react-router-dom";

const link = <>
    <li><NavLink to="/" className={({ isActive }) => isActive ? 'border border-[#23BE0A] text-[#23BE0A] text-lg' : 'text-[rgba(19,19,19,0.80)] text-lg'}>Home</NavLink></li>
    <li><NavLink to="/listed-books" className={({ isActive }) => isActive ? 'border border-[#23BE0A] text-[#23BE0A] text-lg' : 'text-[rgba(19,19,19,0.80)] text-lg'}>Listed Books</NavLink></li>
    <li><NavLink to="/pages-to-read" className={({ isActive }) => isActive ? 'border border-[#23BE0A] text-[#23BE0A] text-lg' : 'text-[rgba(19,19,19,0.80)] text-lg'}>Pages to Read</NavLink></li>
    <li><NavLink to="/top-rated-books" className={({ isActive }) => isActive ? 'border border-[#23BE0A] text-[#23BE0A] text-lg' : 'text-[rgba(19,19,19,0.80)] text-lg'}>Top Rated Books</NavLink></li>
    <li><NavLink to="/contact-us" className={({ isActive }) => isActive ? 'border border-[#23BE0A] text-[#23BE0A] text-lg' : 'text-[rgba(19,19,19,0.80)] text-lg'}>Contact Us</NavLink></li>
    {/* <li><NavLink to="/statistics">Statistics</NavLink></li> */}
</>

const Nav = () => {
    return (
        <div className="navbar bg-base-100 p-0 lg:my-12 my-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" mr-5 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <a className="text-xl lg:text-3xl text-[#131313] font-bold Work-Sans">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end ">
                <a className="bg-[#23BE0A] py-2 px-3 lg:py-3 lg:px-7 text-white Work-Sans text-sm lg:text-lg font-semibold rounded-lg mr-4">Sign In</a>
                <a className="bg-[#59C6D2] py-2 px-3 lg:py-3 lg:px-7 text-white Work-Sans text-sm lg:text-lg font-semibold rounded-lg ">Sign Up</a>
            </div>
        </div>
    );
};

export default Nav;