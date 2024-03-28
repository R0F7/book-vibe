import { useState } from "react";
import { useEffect } from "react";
import Book from "../components/Book";

const TopRatedBooks = () => {
    const [books, setBooks] = useState([]);
    // const [rated, setRated] = useState([]);
    
    useEffect(()=>{
        fetch('../books_data.json')
        .then(res => res.json())
        .then(books => setBooks(books))
    },[]);
    const topRated = books.filter( book => book.rating >= 4.5);
// console.log(books);




    return (
        <div className="mt-8 lg:mt-[100px]">
        <h1 className="text-[#131313] Playfair-Display text-[40px] font-bold text-center lg:mb-9">Our Top Rated Books </h1>
        <div className='grid gap-8 lg:grid-cols-3 mb-14 lg:mb-[100px] '>
            {
                topRated.map((book)=> <Book key={book.bookId} book = {book}></Book>)
            }
        </div>
    </div>
    );
};

export default TopRatedBooks;