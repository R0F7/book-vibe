import { useEffect } from "react";
import { useState } from "react";
import { getLStoreData1 } from "../utils/Utils";
import ReadAndWish from "./ReadAndWish";
import { useOutletContext } from "react-router-dom";

const WishlistBooks = () => {
    const [books, setBooks] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [sort, sort1] = useOutletContext();

    useEffect(() => {
        const LSBooks = getLStoreData1();

        if (sort1.length > 0) {
            setBooks(sort1)
            return
        }
        setBooks(LSBooks);

    }, [sort1]);


    return (
        <div>
            {
                books.map(book => <ReadAndWish key={book.bookId} book = {book}></ReadAndWish>)
            }
        </div>
    );
};

export default WishlistBooks;