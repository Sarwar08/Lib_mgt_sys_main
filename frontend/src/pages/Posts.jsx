import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import Pagination from "../components/Pagination";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    // get the current page
    const indexOfLastPage = currentPage * postsPerPage;
    const indexOfFirstPage = indexOfLastPage - postsPerPage;


    useEffect(() => {
        setLoading(true);

        axios
            .get("https://jsonplaceholder.typicode.com/posts/")
            .then((response) => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
            })
    }, []);

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                <div className="flex justify-center items-center mb-4">
                    <table className="mt-4 w-auto border-separate border-spacing-x-8 border-spacing-2">
                        <thead>
                            <tr>
                                <th className="border border-green-600 rounded-md text-center px-4" >ID</th>
                                <th className="border border-green-700 rounded-md text-center px-4">Title</th>
                                <th className="border border-green-500 rounded-md text-center px-4">Body</th>
                            </tr>
                        </thead>
                        <tbody>
                        {posts.slice(indexOfFirstPage, indexOfLastPage).map((post, index) => (
                            <tr key={post.id} className="h-8">
                                <td className="border border-green-400 rounded-md text-center px-4">{post.id}</td>
                                <td className="border border-green-400 rounded-md text-center px-4">{post.title.slice(0, 15)}</td>
                                <td className="border border-green-400 rounded-md text-center px-4">{post.body.slice(0, 60)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>

    )
}

export default Posts