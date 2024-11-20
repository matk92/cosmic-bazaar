'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ProductsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 1000])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const featuredProducts = [
    { id: 1, name: 'Agricium', description: 'Une trouvaille rare des profondeurs de l\'espace', price: '999 UEC', rating: 4.5, image: '/img/metal.png' },
    { id: 2, name: 'Astatine', description: 'Une trouvaille rare des profondeurs de l\'espace', price: '1200 UEC', rating: 4.5, image: '/img/astatine.png' },
    { id: 3, name: 'Aphorite', description: 'Une trouvaille rare des profondeurs de l\'espace', price: '850 UEC', rating: 4.5, image: '/img/mineral.png' }
  ]

  const newArrivals = [
    { id: 4, name: 'Coda Ascension', price: '499 UEC', image: '/img/Coda_Ascension.jpg' },
    { id: 5, name: 'P8-AR', price: '599 UEC', image: '/img/P8-AR.png' },
    { id: 6, name: 'AcryliPlex', price: '699 UEC', image: '/img/AcryliPlex.jpg' },
    { id: 7, name: 'Jumping Limes', price: '799 UEC', image: '/img/Jumping_Limes.jpg' }
  ]

  const products = [...featuredProducts, ...newArrivals]

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

      <div className="container mx-auto px-4 py-8 pt-20">
        <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Produits Cosmiques
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filtres */}
          <div className="w-full md:w-1/4 bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Filtres</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Gamme de Prix</label>
              <Slider
                defaultValue={[priceRange[0], priceRange[1]]}
                max={1000}
                step={10}
                onValueChange={(value) => setPriceRange(value)}
                className="mb-2"
              />
              <div className="flex justify-between text-sm">
                <span>{priceRange[0]} UEC</span>
                <span>{priceRange[1]} UEC</span>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Catégorie</label>
              {['Plantes Aliens', 'Armes Rares', 'Minéraux Exotiques', 'Pièces de Vaisseaux Spatiaux'].map((category) => (
                <div key={category} className="flex items-center mb-2">
                  <Checkbox id={category} className="mr-2" />
                  <label htmlFor={category}>{category}</label>
                </div>
              ))}
            </div>
            <Button className="w-full">Appliquer les Filtres</Button>
          </div>

          {/* Grille de Produits */}
          <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/50 transition duration-300 ease-in-out transform hover:-translate-y-2">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-purple-300">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl text-purple-400 font-bold">{product.price}</span>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-yellow-400">{product.rating}</span>
                    </div>
                  </div>
                  <Link to={`/products/${product.id}`}>
                    <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">Voir Détails</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}