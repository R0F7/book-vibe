import { useEffect } from "react";
import { useState } from "react";
import { getLStoreData1 } from "../Utils";
import ReadAndWish from "./ReadAndWish";

const WishlistBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const LSBooks = getLStoreData1();
        setBooks(LSBooks)
    }, []);


    return (
        <div>
            {
                books.map(book => <ReadAndWish key={book.bookId} book = {book}></ReadAndWish>)
            }
        </div>
    );
};

export default WishlistBooks;