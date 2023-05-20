
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white h-screen">
      <img
        src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=740&t=st=1684608101~exp=1684608701~hmac=3af4560b7dce4d55edb51da78ca2c3057e26e009f1adabbb76cccfd622528c68"
        alt="Error"
        className="w-64 h-64 mb-8"
      />
      <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-gray-600 mb-2">We apologize for the inconvenience.</p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
