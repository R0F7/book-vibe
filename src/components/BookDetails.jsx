import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();

    const book = books.find(book => book.bookId === parseInt(id));
    const { bookName, author, image, totalPages, rating, category, review, publisher, yearOfPublishing, tags } = book;
    //    console.log(id);

    return (
        <div className="mb-5">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                <div className="lg:w-1/2 bg-base-200 flex justify-center items-center rounded-3xl py-10 lg:py-0">
                    <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[430px] ">
                        <img src={image} className="w-full h-full rounded-lg" />
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <h1 className="text-[35px] lg:text-[40px] text-[#131313] Playfair-Display font-bold mb-2 lg:mb-4">{bookName}</h1>
                    <p className="text-[rgba(19,19,19,0.80)] Work-Sans text-xl font-medium">By: {author}</p>
                    <hr className="mt-3 lg:mt-6 mb-2 lg:mb-4" />
                    <p className="text-[rgba(19,19,19,0.80)] Work-Sans text-xl font-medium mb-2 lg:mb-4">{category}</p>
                    <hr className="mb-3 lg:mb-6"/>
                    <p className="text-[rgba(19,19,19,0.70)] Work-Sans mb-4 lg:mb-8"><span className="font-bold text-[#131313] Work-Sans text-base">Review : </span>{review}</p>
                    <div className='flex gap-3 Work-Sans items-center'>
                        <span className="text-[#131313] font-bold Work-Sans">Tag</span>
                        {
                            tags.map((tag, idx) => <button key={idx} className='bg-[rgba(35,190,10,0.05)] rounded-[30px] py-2 px-4 text-[#23BE0A] text-base font-medium'>#{tag}</button>)
                        }
                    </div>
                    <hr className="my-3 lg:my-6" />
                    <div className="grid grid-cols-2 mb-4 lg:mb-8">
                        <div className="text-[rgba(19,19,19,0.70)] Work-Sans space-y-1.5 lg:space-y-3">
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>
                        <div className="text-[#131313] font-semibold space-y-1.5 lg:space-y-3">
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className="flex">
                        <button className="text-[#131313] text-lg font-semibold py-3 lg:py-4 px-7 border border-[rgba(19,19,19,0.30)] rounded-lg Work-Sans mr-4">Read</button>
                        <button className="bg-[#50B1C9] text-white text-lg font-semibold py-3 lg:py-4 px-7 border rounded-lg Work-Sans ">Wishlist</button>                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;