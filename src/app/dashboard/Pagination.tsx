import { IPaginationProps } from "../types/coin.data.type";

export const Pagination: React.FC <IPaginationProps> = ({totalPosts,coinPerPage, setCurrentPage, currentPage}) =>{
    const pages: number[] = [];
    for (let i = 1; i<= Math.ceil(totalPosts/coinPerPage); i++)
    pages.push(i);

    const handlePageClick = (page: number) =>{
        setCurrentPage(page)
        window.scrollTo( 0, 0);
    };

    return(
        <div className="flex justify-center mt-4">
            {pages.map((page, index) => {
                return <button 
                key={index}
                className={`${page === currentPage ? 'bg-indigo-500 text-white' : 'bg-transparent text-gray-700'} w-10 h-10 font-semibold text-base mx-2 rounded cursor-pointer transition duration-300 ease-in-out border border-gray-300 focus:outline-none focus:border-indigo-500 hover:bg-indigo-500 hover:text-white`}
                            onClick={()=>{handlePageClick(page)}}>
                            {page}
                        </button>
            })}
        </div>
    )
};