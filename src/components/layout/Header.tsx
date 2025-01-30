import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <svg
              className="h-8 w-8 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            <span className="text-xl font-bold text-gray-900">
              Flight Search
            </span>
          </Link>

          <nav className="flex space-x-4">
            <Link
              to="/flights"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              Search Flights
            </Link>
            <Link
              to="/bookings"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md"
            >
              My Bookings
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
