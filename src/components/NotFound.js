import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl">Sorry not found</h1>
      <Link
        to="/"
        className="inline-block mt-8 bg-white text-gray-700 py-2 px-6 rounded shadow hover:bg-gray-200 transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400"
      >
        &larr; Back
      </Link>
    </div>
  );
};

export default NotFound;
