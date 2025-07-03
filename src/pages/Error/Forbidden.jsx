
import { FaBan } from 'react-icons/fa';
import { Link } from 'react-router';


const Forbidden = () => {
  return (
<>
    <div className="min-h-screen flex flex-col items-center mb-20 justify-center bg-gray-100 px-4 text-center">
      <FaBan className="text-red-500 text-6xl mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">403 - Forbidden</h1>
      <p className="text-gray-600 mb-6">
        You don't have permission to access this page.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
      
    </div>
   
</>
  );
};

export default Forbidden;
