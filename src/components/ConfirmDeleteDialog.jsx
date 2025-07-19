const ConfirmDeleteDialog = ({ openDialog, setOpenDialog, onConfirmDelete }) => {
  const handleCancelDelete = () => {
    setOpenDialog(false);
  };


  return (
    <div
      className={`${
        openDialog ? "visible" : "invisible"
      } flex flex-col justify-center items-center bg-white text-gray-900 p-8 rounded-2xl shadow-2xl absolute top-1/2 left-1/2 w-full max-w-md min-h-56 transform -translate-x-1/2 -translate-y-1/2 border-4 border-red-200 z-50`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-2">
          <svg
            className="w-10 h-10 text-red-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-red-600">Delete Product</h3>
        <p className="text-center text-gray-700 mb-4">
          Are you sure you want to delete this product? This action cannot be
          undone.
        </p>
        <div className="flex gap-4">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-md shadow "
            onClick={onConfirmDelete}
          >
            Yes, Delete
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-2 rounded-md shadow "
            onClick={handleCancelDelete}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteDialog;
