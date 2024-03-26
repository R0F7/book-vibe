import PropTypes from 'prop-types'
import { useLoaderData } from "react-router-dom";
import Book from './Book';

const Books = () => {
    const books = useLoaderData();

    return (
        <div className="mt-8 lg:mt-[100px]">
            <h1 className="text-[#131313] Playfair-Display text-[40px] font-bold text-center lg:mb-9">Books </h1>
            <div className='grid gap-8 lg:grid-cols-3 mb-14 lg:mb-[100px] '>
                {
                    books.map((book)=> <Book key={book.bookId} book = {book}></Book>)
                }
            </div>
        </div>
    );
};

Books.propTypes = {
    books: PropTypes.array
}

export default Books;