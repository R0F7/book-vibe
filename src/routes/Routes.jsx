import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import BookDetails from "../components/BookDetails";
import ReadBooks from "../components/ReadBooks";
import WishlistBooks from "../components/WishlistBooks";
// import Books from "../components/Books";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/bookId/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../books_data.json')
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>
          },
          {
            path:'wishListBook',
            element:<WishlistBooks> </WishlistBooks>
          }
        ]
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>
      }
    ]
  },
]);