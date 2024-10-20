
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex flex-wrap justify-center mt-6 mb-6 space-x-2">
      <button
        className={`px-4 py-2 mr-2 ${
          currentPage === 1
            ? 'bg-[#F3A939] text-[#F0FFE5] cursor-not-allowed'
            : 'bg-[#165315] text-[#F0FFE5] hover:bg-[#144D14]'
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-4 py-2 mx-1 ${
            currentPage === index + 1
              ? 'bg-[#F0FFE5] border border-[#165315] text-[#000]'
              : 'bg-[#6A6A6A] text-white hover:bg-[#575757]'
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className={`px-4 py-2 ml-2 ${
          currentPage === totalPages
            ? 'bg-[#F3A939] text-[#F0FFE5] cursor-not-allowed'
            : 'bg-[#165315] text-[#F0FFE5] hover:bg-[#144D14]'
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
