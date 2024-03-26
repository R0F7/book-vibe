import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import BookDetails from "../components/BookDetails";
import Books from "../components/Books";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children:[
          {
            path:'/',
            element:<Books></Books>,
            loader: () => fetch('./books_data.json'),
          },
          {
            path:'/bookId/:id',
            element:<BookDetails></BookDetails>
          },
        ],
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead></PagesToRead>
      }
    ]
  },
]);