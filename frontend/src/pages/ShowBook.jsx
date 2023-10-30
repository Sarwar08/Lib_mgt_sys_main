import {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import Header1 from "../components/Header1";
import Navbar2 from "../components/Navbar2"
import Footer from "../components/Footer";
import Footer1 from "../components/Footer1";


const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(()=>{
        setLoading(true);
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((response)=>{
                setBook(response.data);
                setLoading(false)
            })
            .catch((error)=>{
                console.log(error)
                setLoading(false);
            });
    }, []);
  return (
    <div className="p-4">
        <Header1 />
      <Navbar2 />
      <div className="mt-4">
        <BackButton />
      </div>
        <h1 className="text-3xl my-4">Show Book</h1>
        {
            loading? (
                <Spinner />
            ):(
                <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 mb-4">
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Id</span>
                        <span>{book._id}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Title</span>
                        <span>{book.title}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Author</span>
                        <span>{book.author}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Publish Year</span>
                        <span>{book.publishYear}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Create Time</span>
                        <span>{new Date(book.createdAt).toString()}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
                        <span>{new Date(book.updatedAt).toString()}</span>
                    </div>
                </div>
            )
        }
        <Footer />
        <Footer1 />
    </div>
  )
}

export default ShowBook