export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Find the best flight deals across all airlines with our advanced flight search engine.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Search Flights</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Flight Status</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@flightsearch.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Flight Street, NY 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Flight Search. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
