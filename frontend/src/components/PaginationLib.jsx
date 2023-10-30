

const PaginationLib = ({totalBooks, booksPerPage, setCurrentPage}) => {
    const pageNumbers = [];
    const pages = Math.ceil(totalBooks/booksPerPage);
    for(let i = 1; i<=pages; i++){
        pageNumbers.push(i);
    }

  return (
    <div className="flex justify-center items-center">
        {
            pageNumbers.map((page)=>(
                <button key={page}
                onClick={()=>setCurrentPage(page)}
                className="border border-green-600 rounded-md text-center px-4 py-2 mr-2 hover:bg-green-600 active:bg-violet-600 focus:outline-none focus:ring focus:ring-green-300"
                >
                    {page}
                </button>
            ))
        }

    </div>
  )
}

export default PaginationLib