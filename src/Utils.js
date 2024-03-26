import { toast } from 'react-toastify';

const getLStoreData = () => {
    const storeData = localStorage.getItem('books');

    if (storeData) {
        return JSON.parse(storeData);
    }
    return [];
}

const saveDataLStore = (book) => {
    const storedData = getLStoreData();
    const isExist = storedData.find(data => data.bookId === book.bookId);

    if (!isExist) {
       storedData.push(book);
       localStorage.setItem('books',JSON.stringify(storedData));

       toast.success('Book Added to Read List')

    }else{
        toast.error('You Have Already Read This Book')
    }

}

export { getLStoreData, saveDataLStore }

 