export const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}: {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4">
      <ul className="flex justify-center space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`px-2 py-1 text-xs rounded-lg transition hover:bg-red-500 hover:text-white focus:outline-none ${
                currentPage === number ? "bg-red-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};