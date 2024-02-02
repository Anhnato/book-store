import BookDetail from "../pages/BookDetail/BookDetail";
import BookList from "../pages/BookList/BookList";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import TypeBook from "../pages/TypeBook/TypeBook";

export const routes = [
    {
        path: '/',
        page: Home
    },
    {
        path: '/booklist',
        page: BookList
    },
    {
        path: '/:type',
        page: TypeBook
    },
    {
        path: '/signin',
        page: SignIn
    },
    {
        path: '/signup',
        page: SignUp
    },
    {
        path: '/bookdetail',
        page: BookDetail
    },
]