/* eslint-disable react/no-unescaped-entities */
import { FaFacebookSquare } from "react-icons/fa";
import { FaLocationDot, FaPhoneFlip, FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";

const ContactUs = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-10">
            {/* text  */}
            <div>
                <h1 className="text-3xl lg:text-5xl font-bold Playfair-Display text-[#59C6D2] mb-4 lg:mb-8">Contact Us</h1>
                <h4 className="text-xl lg:text-4xl font-semibold Work-Sans text-[rgba(19,19,19,0.60)] mb-2 lg:mb-7">Questions and comments? Contact us!</h4>
                <p className="mb-2 lg:mb-5 text-base lg:text-xl Work-Sans text-[rgba(19,19,19,0.60)]">Questions or comments about Book Vibe? We're all ears! Feel free to reach out to our friendly team – we're here to assist you every step of the way</p>
                <p className="mb-4 lg:mb-5 text-base lg:text-lg Work-Sans text-[rgba(19,19,19,0.60)]">Whether it's about our services, website functionality, or just to say hello, we value your input and are committed to providing excellent customer support. Contact us today and let's start the conversation</p>
                <h4 className="text-xl lg:text-3xl font-bold text-center mb-3 lg:mb-8 text-[rgba(19,19,19,0.70)]">Thank you!</h4>
                <div className="space-y-0.5">
                    <div className="flex items-center gap-[6px] lg:gap-2">
                        <span className="text-[rgba(19,19,19,0.60)]"><FaLocationDot /></span>
                        <h4 className="text-base lg:text-xl font-bold text-[rgba(19,19,19,0.60)]">Address: </h4>
                        <p className="text-sm lg:text-xl lg:mt-1.5 text-[rgba(19,19,19,0.80)] ">129 W. Patrick St., Unit15 Frederick, MD 21701, USA</p>
                    </div>
                    <div className="flex items-center gap-[6px] lg:gap-2">
                        <span className="text-[rgba(19,19,19,0.60)]"><FaPhoneFlip /></span>
                        <h4 className="text-base lg:text-xl font-bold text-[rgba(19,19,19,0.60)]">Phone: </h4>
                        <p className="text-sm lg:text-xl lg:mt-1.5 text-[rgba(19,19,19,0.80)] "> 001(301)693-5991</p>
                    </div>
                    <div className="flex items-center gap-[6px] lg:gap-2">
                        <span className="text-[rgba(19,19,19,0.60)]"><MdEmail /></span>
                        <h4 className="text-base lg:text-xl font-bold text-[rgba(19,19,19,0.60)]">Email:</h4>
                        <p className="text-sm lg:text-xl text-[rgba(19,19,19,0.80)] ">info@unescobmw.org</p>
                    </div>
                </div>
                <h4 className="text-xl lg:text-3xl font-bold text-[rgba(19,19,19,0.60)] mt-2 lg:mt-7 ">Follow us on social media</h4>
                <div className="flex text-2xl lg:text-4xl gap-3 lg:gap-6 mt-3 lg:mt-5 text-[rgba(19,19,19,0.60)]">
                    <span><FaFacebookSquare /></span>
                    <span><FiInstagram /></span>
                    <span><FaSquareXTwitter /></span>
                </div>
            </div>
            {/* from  */}
            <div className=" bg-[rgba(50,142,255,0.1)] p-5 lg:p-6 rounded-2xl">
                <form className="space-y-3 lg:space-y-5">
                    <input type="text" placeholder="Type Your Name" className="input input-bordered w-full lg:h-[60px]" />
                    <input type="email" placeholder="Type Your Email" className="input input-bordered w-full lg:h-[60px]" />
                    <input type="text" placeholder="Type Your Subject" className="input input-bordered w-full lg:h-[60px]" />
                    <textarea className="textarea textarea-bordered w-full h-[150px] lg:h-[230px]" placeholder="Details"></textarea>
                    <input type="submit" value="Submit" className="bg-[#59C6D2] w-full text-white py-3 lg:py-4 rounded-lg text-xl font-bold"/>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;