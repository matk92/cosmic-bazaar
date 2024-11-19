import { useState } from 'react'
import { ShoppingCart, Search, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-gray-900 bg-opacity-80 backdrop-blur-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Cosmic-Bazaar
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <Link to="/products" className="hover:text-purple-400 transition-colors">Products</Link>
          <Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
          <Link to="/cart">
            <ShoppingCart className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
          </Link>
          <Button onClick={toggleMenu} variant="ghost" size="icon" className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4 absolute w-full z-40">
          <Link to="/" className="block py-2 hover:text-purple-400 transition-colors">Home</Link>
          <Link to="/products" className="block py-2 hover:text-purple-400 transition-colors">Products</Link>
          <Link to="/contact" className="block py-2 hover:text-purple-400 transition-colors">Contact</Link>
        </div>
      )}
    </nav>
  )
}