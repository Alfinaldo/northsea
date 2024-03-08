const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <div className=" mt-4 flex justify-center">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`mx-2 p-2 border ${
            currentPage === index + 1 ? "bg-gray-400" : "bg-gray-200"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
