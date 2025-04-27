
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-pulse-dark text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-xl font-bold">PulsePlace.ai</span>
            </div>
            <p className="text-gray-400 text-sm">
              Build Trust. Certify Culture. Benchmark Transparency.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">Features</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">Pricing</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">Integrations</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">PulseBot</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">Documentation</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">Case Studies</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">Support</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">Careers</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">Contact</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 PulsePlace.ai. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
