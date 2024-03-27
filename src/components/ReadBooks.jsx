import { useEffect, useState } from "react";
import { getLStoreData } from "../Utils";
import ReadAndWish from "./ReadAndWish";
import { useOutletContext } from "react-router-dom";

const ReadBooks = () => {
    const [books, setBooks] = useState([]);
    const [sort] = useOutletContext();

    useEffect(() => {
        const LSBooks = getLStoreData();

        if (sort.length > 0) {
            setBooks(sort)
            return
        }
        setBooks(LSBooks);

    }, [sort]);

    return (
        <div>
            {
                books.map(book => <ReadAndWish key={book.bookId} book = {book}></ReadAndWish>)
            }
        </div>
    );
};

export default ReadBooks;