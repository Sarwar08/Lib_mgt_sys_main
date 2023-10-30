

const Pagination = ({postsPerPage, totalPosts, setCurrentPage, currentPage}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }
  
    return (
    <div >
        <nav >
            <ul className='container flex justify-center items-center'>
                {
                    pageNumbers.map((page, index)=>
                        <div key={page} className=" flex justify-center items-center">
                            <button
                            className='mr-2 p-2 border border-green-600  hover:bg-violet-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300'
                            onClick={()=>setCurrentPage(page)}
                            > 
                                <a>
                                    {page}
                                </a>
                            </button>
                        </div>
                    )
                }
            </ul>
        </nav>
    </div>
  )
}

export default Pagination