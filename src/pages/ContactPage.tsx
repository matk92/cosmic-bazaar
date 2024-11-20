'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4 absolute w-full z-40">
          <Link to="/" className="block py-2 hover:text-purple-400 transition-colors">Accueil</Link>
          <Link to="/products" className="block py-2 hover:text-purple-400 transition-colors">Produits</Link>
          <Link to="/contact" className="block py-2 hover:text-purple-400 transition-colors">Contact</Link>
        </div>
      )}

      <div className="container mx-auto px-4 py-16 pt-20">
        <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Contactez-Nous
        </h1>

        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Nom</label>
              <Input id="name" placeholder="Votre Nom" className="border-gray-700 focus:border-purple-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <Input id="email" type="email" placeholder="votre@email.com" className="border-gray-700 focus:border-purple-500" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Sujet</label>
              <Input id="subject" placeholder="Quel est le sujet ?" className="border-gray-700 focus:border-purple-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <Textarea id="message" placeholder="Votre message ici..." rows={5} className="border-gray-700 focus:border-purple-500" />
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Envoyer le Message
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Visitez Notre Siège Intergalactique</h2>
          <p className="text-gray-400">
            Cosmic-Bazaar Tower<br />
            42nd Nebula Street<br />
            Andromeda Galaxy, AC-42<br />
            Code Postal Universel : SPACE-9000
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}