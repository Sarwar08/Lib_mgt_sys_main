
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
// import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
// import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";
import Footer1 from "../components/Footer1";
// import Posts from "./Posts";
import PaginationLib from "../components/PaginationLib";
import Gallery from "./Gallery";




const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(9);

    useEffect(() => {
        setLoading(true);

        axios
            .get(`http://localhost:5555/books`)
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const indexOfLastBook = currentPage * booksPerPage
    const indexOfFirstBook = indexOfLastBook - booksPerPage

    return (

        <div className="p-4">
            <Header1 />
            {/* <Navbar1 /> */}
            <Navbar2 />
            {/* <Navbar /> */}

            {/* <Posts /> */}
            {/* <Gallery/> */}

            <div className="min-h-screen">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl my-8">Books List</h1>
                    <Link to="/books/create">
                        <MdOutlineAddBox className="text-sky-800 text-4xl" />
                    </Link>
                </div>
                {
                    loading ? (
                        <Spinner />
                    ) : (
                        <table className="w-full border-separate border-spacing-2 mb-4">
                            <thead>
                                <tr>
                                    <th className="border border-slate-600 rounded-md">No</th>
                                    <th className="border border-slate-600 rounded-md">Title</th>
                                    <th className="border border-slate-600 rounded-md max-md:hidden">Author</th>
                                    <th className="border border-slate-600 rounded-md max-md:hidden">Publish Year</th>
                                    <th className="border border-slate-600 rounded-md ">Operations</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.slice(indexOfFirstBook, indexOfLastBook).map((book, index) => (
                                    <tr key={book._id} className="h-8">
                                        <td className="border border-slate-700 rounded-md text-center">{indexOfFirstBook+index+1}</td>
                                        <td className="border border-slate-700 rounded-md text-center">{book.title}</td>
                                        <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.author}</td>
                                        <td className="border border-slate-700 rounded-md text-center max-md:hidden">{book.publishYear}</td>
                                        <td className="border border-slate-700 rounded-md text-center">
                                            <div className="flex justify-center gap-x-4">
                                                <Link to={`/books/details/${book._id}`}>
                                                    <BsInfoCircle className="text-2xl text-green-800" />
                                                </Link>
                                                <Link to={`/books/edit/${book._id}`}>
                                                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                                                </Link>
                                                <Link to={`/books/delete/${book._id}`}>
                                                    <MdOutlineDelete className="text-2xl text-red-600" />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
                }
                <PaginationLib
                totalBooks = {books.length}
                booksPerPage = {booksPerPage}
                setCurrentPage = {setCurrentPage}
                />
            </div>
            <Footer />
            <Footer1 />
        </div>
    )
}

export default Home