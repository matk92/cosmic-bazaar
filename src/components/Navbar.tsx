'use client'

import { useState, useEffect } from 'react'
import { ShoppingCart, Search, Menu, X, User, LogIn, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearchFocus = () => {
    setIsSearchFocused(true)
  }

  const handleSearchBlur = () => {
    setIsSearchFocused(false)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchValue.trim()) {
      setIsSearching(true)
      // Simulate search delay
      setTimeout(() => {
        setIsSearching(false)
        setSearchValue("")
      }, 2000)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-600 hover:to-purple-400 transition-all duration-300">
              Cosmic-Bazaar
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
              Home
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
              Products
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
              Contact
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </div>
          <form onSubmit={handleSearchSubmit} className="relative flex-grow max-w-md mx-4">
            <Input
              type="text"
              placeholder="Search the cosmos..."
              className={`pl-10 pr-4 py-2 rounded-full bg-gray-800 border-gray-700 text-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full transition-all duration-300 ${isSearchFocused ? 'bg-gray-700' : ''}`}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              value={searchValue}
              onChange={handleSearchChange}
            />
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${isSearchFocused ? 'text-purple-400' : 'text-gray-400'}`} />
            <AnimatePresence>
              {isSearching && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-2 p-4 bg-gray-800 rounded-md shadow-lg"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <p className="text-center text-gray-300 mt-2">Searching the cosmos...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative text-gray-300 hover:bg-black hover:text-white transition-colors duration-300">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-4 w-4 bg-purple-500 rounded-full text-xs flex items-center justify-center">0</span>
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:bg-black hover:text-white transition-colors duration-300">
                <Settings className="h-6 w-6" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="default" size="sm" className="text-white hover:bg-gray-800 border border-white transition-colors duration-300">
                <LogIn className="mr-2 h-4 w-4" /> Login
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                <User className="mr-2 h-4 w-4" /> Register
              </Button>
            </Link>
          </div>
          <Button onClick={toggleMenu} variant="ghost" size="icon" className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-gray-900/80 backdrop-blur-md p-4 absolute w-full z-40"
          >
            <Link to="/products" className="block py-2 text-gray-300 hover:text-white transition-colors duration-300">
              Products
            </Link>
            <div className="mt-4 space-y-2">
              <form onSubmit={handleSearchSubmit}>
                <Input
                  type="text"
                  placeholder="Search the cosmos..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800 border-gray-700 text-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={searchValue}
                  onChange={handleSearchChange}
                />
              </form>
              <Link to="/admin">
                <Button variant="ghost" size="sm" className="w-full text-left text-gray-300 hover:bg-black hover:text-white transition-colors duration-300">
                  <Settings className="mr-2 h-4 w-4" /> Admin
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="default" size="sm" className="w-full bg-black text-white hover:bg-gray-800 transition-colors duration-300">
                  <LogIn className="mr-2 h-4 w-4" /> Login
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  <User className="mr-2 h-4 w-4" /> Register
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}