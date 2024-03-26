import PropTypes from 'prop-types'
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { Link } from 'react-router-dom';


const Book = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags } = book;

    return (
        <Link to={`/bookId/${bookId}`} className="card card-compact border border-[rgba(19,19,19,0.15)] rounded-2xl p-6">
            <div className='h-[250px] flex justify-center items-center rounded-2xl bg-[#F3F3F3] '>
                <img className='h-[200px]' src={image} alt="Shoes" />
            </div>
            <div className=" mt-5">
                <div className='border-b-2 border-dashed pb-5'>
                    <div className='flex gap-3 mt-3 lg:mt-6 mb-2 lg:mb-4 Work-Sans'>
                        {
                            tags.map((tag, idx) => <button key={idx} className='bg-[rgba(35,190,10,0.05)] rounded-[30px] py-2 px-4 text-[#23BE0A] text-base font-medium'>{tag}</button>)
                        }
                    </div>
                    <h2 className="text-[#131313] Playfair-Display text-2xl font-bold mb-2 lg:mb-4">{bookName}</h2>
                    <p className='text-[rgba(19,19,19,0.80)] text-base Work-Sans font-medium'>By: {author}</p>
                </div>
                <div className='mt-5 flex justify-between'>
                    <p className='text-[rgba(19,19,19,0.80)] text-lg font-medium Work-Sans'>{category}</p>
                    <div className='flex gap-2 items-center'><span className='text-[rgba(19,19,19,0.80)] text-lg font-medium Work-Sans'>{rating}</span> <span className='text-2xl text-[#424242]'><MdOutlineStarBorderPurple500 /></span></div>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object,
}

export default Book;