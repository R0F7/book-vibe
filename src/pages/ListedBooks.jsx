
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)

    // console.log(books.length);

    return (
        <div className="mt-8 lg:mt-16">
            <div className="text-center ">
                <h1 className="text-[#131313] Work-Sans text-3xl font-bold bg-[rgba(19,19,19,0.05)] py-9 rounded-xl">Books</h1>
                <button className="mt-8 btn bg-[green]">Sort By</button>
            </div>

            <div className="flex  overflow-x-auto overflow-y-hidden flex-nowrap mt-14">

                <Link to='' onClick={() => setTabIndex(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400`}>
                    <span>Read Books</span>

                </Link>

                <Link to={`wishListBook`} onClick={() => setTabIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg  ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400`}>
                    <span>Wishlist Books</span>

                </Link>

            </div>

            <div className="mt-4 lg:mt-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;