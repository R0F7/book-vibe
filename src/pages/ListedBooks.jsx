
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getLStoreData, getLStoreData1 } from "../Utils";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [sort, setSort] = useState([]);

    const [sort1, setSort1] = useState([]);

    const handleShort = (value) => {
        const readLSData = getLStoreData();
    
        if (value === 'rating') {
            readLSData.sort((a, b) => {
                return a.rating - b.rating;   
            });
            setSort(readLSData)
        }else if (value === 'totalPages') {
            readLSData.sort((a, b) => {
                return a.totalPages - b.totalPages;   
            });
            setSort(readLSData)
        }else if(value === 'yearOfPublishing'){
            readLSData.sort((a, b) => {
                return a.yearOfPublishing - b.yearOfPublishing;   
            });
            setSort(readLSData)
        }

        // console.log(value);
        const readLSData1 = getLStoreData1();

        if (value === 'rating') {
            readLSData1.sort((a, b) => {
                return a.rating - b.rating;   
            });
            setSort1(readLSData1)
        }else if (value === 'totalPages') {
            readLSData1.sort((a, b) => {
                return a.totalPages - b.totalPages;   
            });
            setSort1(readLSData1)
        }else if(value === 'yearOfPublishing'){
            readLSData1.sort((a, b) => {
                return a.yearOfPublishing - b.yearOfPublishing;   
            });
            setSort1(readLSData1)
        }


    }
    // console.log(rating);

    return (
        <div className="mt-8 lg:mt-16">
            <div className="text-center ">
                <h1 className="text-[#131313] Work-Sans text-3xl font-bold bg-[rgba(19,19,19,0.05)] py-9 rounded-xl">Books</h1>

                <details className="dropdown">
                    <summary className="mb-1 mt-8 btn">Short</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a onClick={() => handleShort('rating')}>Rating</a></li>
                        <li><a onClick={() => handleShort('totalPages')}>Total Pages</a></li>
                        <li><a onClick={() => handleShort('yearOfPublishing')}>Year Of Publishing</a></li>
                    </ul>
                </details>

            </div>

            <div className="flex  overflow-x-auto overflow-y-hidden flex-nowrap mt-20">

                <Link to='' onClick={() => setTabIndex(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400`}>
                    <span>Read Books</span>

                </Link>

                <Link to={`wishListBook`} onClick={() => setTabIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg  ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400`}>
                    <span>Wishlist Books</span>

                </Link>

            </div>

            <div className="mt-4 lg:mt-8">
                <Outlet context={[sort,sort1]}></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;