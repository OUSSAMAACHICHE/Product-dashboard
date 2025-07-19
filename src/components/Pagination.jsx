const Pagination = ({ totalPages, currentPage, setCurrentPage }) => (
  <div className="flex justify-center gap-2 mt-4">
    <button
      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
      disabled={currentPage === 1}
      className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50 cursor-pointer"
    >
      Prev
    </button>
    {[...Array(totalPages)].map((_, idx) => (
      <button
        key={idx}
        onClick={() => setCurrentPage(idx + 1)}
        className={`px-3 py-1 rounded cursor-pointer ${
          currentPage === idx + 1
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        {idx + 1}
      </button>
    ))}
    <button
      onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50 cursor-pointer"
    >
      Next
    </button>
  </div>
);

export default Pagination;
