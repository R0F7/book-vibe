import { useEffect, useState } from "react";
import { getLStoreData } from "../Utils";
import ReadAndWish from "./ReadAndWish";

const ReadBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const LSBooks = getLStoreData();
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

export default ReadBooks;