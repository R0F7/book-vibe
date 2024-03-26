import { toast } from 'react-toastify';

const getLStoreData = () => {
    const storeData = localStorage.getItem('books');

    if (storeData) {
        return JSON.parse(storeData);
    }
    return [];
}

const getLStoreData1 = () =>{
    const storeData = localStorage.getItem('wish');

    if (storeData) {
        return JSON.parse(storeData);
    }
    return [];
}

const saveDataLStore = (book, text) => {
    const storedData = getLStoreData();
    const isExist = storedData.find(data => data.bookId === book.bookId);

    const storedData1 = getLStoreData1();
    const isExist1 = storedData1.find(data => data.bookId === book.bookId);

    if (!isExist && text === 'read') {
        storedData.push(book);
        localStorage.setItem('books', JSON.stringify(storedData));
        toast.success('Book Added to Read List')
    } else if (!isExist && !isExist1 && text === 'wish'){
        storedData1.push(book);
        localStorage.setItem('wish', JSON.stringify(storedData1));
        toast.success('Book Added to Wish List')
    }
    else {
        toast.error('You Have Already Read This Book')
    }

}


export { getLStoreData, saveDataLStore, getLStoreData1 }

