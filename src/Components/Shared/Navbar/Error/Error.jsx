import { Link } from "react-router-dom";


const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-4">404 Error</h1>
      <p className="text-gray-600 text-lg mb-8">Oops! The page you're looking for does not exist.</p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Home
      </Link>
    </div>
  );
};

export default Error404;
