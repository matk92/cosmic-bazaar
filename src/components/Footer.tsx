import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">About Cosmic-Bazaar</h4>
            <p>Your one-stop shop for all things intergalactic.</p>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping-info" className="hover:text-purple-400 transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns-exchanges" className="hover:text-purple-400 transition-colors">Returns & Exchanges</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-purple-400 transition-colors">FAQ</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-purple-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Cosmic-Bazaar. All rights reserved across the universe.</p>
        </div>
      </div>
    </footer>
  )
}