import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineGroup } from 'react-icons/md';
import { LuFileBarChart } from "react-icons/lu";
import { Link } from 'react-router-dom';

const ReadAndWish = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags, publisher, yearOfPublishing, totalPages } = book;

    return (
        <div className='flex flex-col lg:flex-row items-center border-2 lg:border border-[rgba(19,19,19,0.15)] rounded-2xl mb-6 p-6 box-border gap-6 lg:-[295px]'>
            <div className='h-[250px] w-full lg:w-[230px] flex justify-center items-center bg-[rgba(19,19,19,0.05)] rounded-2xl p-7 '>
                <img className='w-[50%] lg:w-full h-full' src={image} alt="" />
            </div>
            <div className='lg:flex-1'>
                <h4 className='text-[#131313] Playfair-Display lg:text-2xl font-bold mb-2 lg:mb-4'>{bookName}</h4>
                <h4 className='text-[rgba(19,19,19,0.80)] Work-Sans text-base font-medium mb-3 lg:mb-4'>By: {author}</h4>
                <div className='flex flex-col lg:flex-row gap-2 lg:gap-4 items-center mb-2 lg:mb-4'>
                    <div className='flex  gap-4 items-center'>
                        <h5 className='text-[#131313] Work-Sans text-base font-bold'>Tag</h5>
                        {
                            tags.map((tag, idx) => <h5 key={idx} className='text-[#23BE0A] rounded-2xl bg-[rgba(35,190,10,0.05)] Work-Sans text-base font-medium py-1.5 px-4'>#{tag}</h5>)
                        }
                    </div>
                    <div className='flex w-full gap-1 items-center text-[rgba(19,19,19,0.80)] Work-Sans font-normal text-base '>
                        <span><IoLocationOutline className='text-xl' /></span>
                        <h4>Year of Publishing: {yearOfPublishing}</h4>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='flex gap-1 items-center text-[rgba(19,19,19,0.60)] Work-Sans font-normal text-base '>
                        <span><MdOutlineGroup /></span>
                        <h4>Publisher: {publisher}</h4>
                    </div>
                    <div className='flex gap-1 items-center text-[rgba(19,19,19,0.60)] Work-Sans font-normal text-base '>
                        <span><LuFileBarChart /></span>
                        <h4>Page: {totalPages}</h4>
                    </div>
                </div>
                <hr className='my-3 lg:my-4' />
                <div className='flex flex-col lg:flex-row gap-[10px]'>
                    <div className='flex gap-[10px]'>
                        <h4 className='text-[#328EFF] Work-Sans font-normal bg-[rgba(50,142,255,0.15)] py-3 px-4 rounded-[30px]'>Category: {category}</h4>
                        <h4 className='text-[#FFAC33] Work-Sans font-normal bg-[rgba(255,172,51,0.15)] py-3 px-4 rounded-[30px]'>Rating: {rating}</h4>
                    </div>
                    <div className='flex items-center'>
                        <Link to={`/bookId/${bookId}`} className='text-white Work-Sans font-normal bg-[#23BE0A] py-3 px-4 rounded-[30px]'>View Details</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

ReadAndWish.propTypes = {
    book: PropTypes.object,
}

export default ReadAndWish;