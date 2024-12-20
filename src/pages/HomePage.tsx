'use client'

import { useState, useEffect } from 'react'
import { Star, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"

export default function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem('hasAcceptedPopup')
    if (!hasAccepted) {
      setIsPopupOpen(true)
    }
  }, [])

  const handlePopupClose = () => {
    localStorage.setItem('hasAcceptedPopup', 'true')
    setIsPopupOpen(false)
  }

  const featuredProducts = [
    { id: 1, name: 'Agricium', description: 'Une trouvaille rare des profondeurs de l\'espace', price: '999 UEC', rating: 4.5, image: '/img/metal.png' },
    { id: 2, name: 'Astatine', description: 'Une trouvaille rare des profondeurs de l\'espace', price: '1200 UEC', rating: 4.5, image: '/img/astatine.png' },
    { id: 3, name: 'Aphorite', description: 'Une trouvaille rare des profondeurs de l\'espace', price: '850 UEC', rating: 4.5, image: '/img/mineral.png' },
    { id: 4, name: 'Agricium', description: 'Une trouvaille rare des profondeurs de l\'espace', price: '999 UEC', rating: 4.5, image: '/img/metal.png' },
    { id: 5, name: 'Astatine', description: 'Une trouvaille rare des profondeurs de l\'espace', price: '1200 UEC', rating: 4.5, image: '/img/astatine.png' },
    { id: 6, name: 'Aphorite', description: 'Une trouvaille rare des profondeurs de l\'espace', price: '850 UEC', rating: 4.5, image: '/img/mineral.png' },
  ]

  const newArrivals = [
    { id: 7, name: 'Coda Ascension', price: '499 UEC', image: '/img/Coda_Ascension.jpg' },
    { id: 8, name: 'P8-AR', price: '599 UEC', image: '/img/P8-AR.png' },
    { id: 9, name: 'AcryliPlex', price: '699 UEC', image: '/img/AcryliPlex.jpg' },
    { id: 10, name: 'Jumping Limes', price: '799 UEC', image: '/img/Jumping_Limes.jpg' },
    { id: 11, name: 'Coda Ascension', price: '499 UEC', image: '/img/Coda_Ascension.jpg' },
    { id: 12, name: 'P8-AR', price: '599 UEC', image: '/img/P8-AR.png' },
    { id: 13, name: 'AcryliPlex', price: '699 UEC', image: '/img/AcryliPlex.jpg' },
    { id: 14, name: 'Jumping Limes', price: '799 UEC', image: '/img/Jumping_Limes.jpg' },
  ]

  const promotions = [
    { id: 15, name: 'Agricultural Supplies', description: 'Profitez de réductions incroyables sur des articles sélectionnés à travers la galaxie !', image: '/img/Agricultural_Supplies.png' },
    { id: 16, name: 'Ranta Dung', description: 'Profitez de réductions incroyables sur des articles sélectionnés à travers la galaxie !', image: '/img/Ranta_Dung.png' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />

      {/* Popup */}
      <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Attention</DialogTitle>
            <DialogDescription>
              Ce site est fictif et a été créé dans le cadre d'un projet scolaire. Aucun produit n'est réellement en vente.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handlePopupClose}>J'ai compris</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Bannière Héro */}
      <div className="relative h-[70vh] bg-cover bg-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/background_home.webm"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Bienvenue chez Cosmic-Bazaar
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">Votre portail vers le commerce intergalactique</p>
            <Link
              to="/products"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Explorer Maintenant
            </Link>
          </div>
        </div>
      </div>

      {/* Produits en Vedette */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Trésors Cosmiques en Vedette
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <Link to={`/products/${product.id}`}>
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/50 transition duration-300 ease-in-out transform hover:-translate-y-2 m-2">
                      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold mb-2 text-purple-300">{product.name}</h3>
                        <p className="text-gray-400 mb-4">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl text-purple-400 font-bold">{product.price}</span>
                          <div className="flex items-center">
                            <Star className="h-5 w-5 text-yellow-400 fill-current" />
                            <span className="ml-1 text-yellow-400">{product.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Explorer les Catégories Cosmiques
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Plantes Aliens', emoji: '🌱' },
              { name: 'Armes Rares', emoji: '🔫' },
              { name: 'Minéraux Exotiques', emoji: '💎' },
              { name: 'Pièces de Vaisseaux Spatiaux', emoji: '🚀' },
            ].map((category) => (
              <div key={category.name} className="bg-gray-700 rounded-lg p-6 text-center hover:bg-purple-600 transition duration-300 ease-in-out cursor-pointer transform hover:-translate-y-2">
                <div className="text-4xl mb-2">{category.emoji}</div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nouveautés */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Nouvelles Arrivées Cosmiques
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {newArrivals.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/3 lg:basis-1/4">
                  <Link to={`/products/${product.id}`}>
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/50 transition duration-300 ease-in-out transform hover:-translate-y-2 m-2">
                      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2 text-purple-300">{product.name}</h3>
                        <p className="text-2xl text-purple-400 font-bold">{product.price}</p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Promotions Interstellaires */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Promotions Interstellaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promotions.map((promo) => (
              <div key={promo.id} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row">
                <img src={promo.image} alt={promo.name} className="w-full md:w-1/2 h-64 object-cover" />
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-2 text-purple-300">{promo.name}</h3>
                  <p className="text-gray-400 mb-4">{promo.description}</p>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center justify-center">
                    Acheter Maintenant <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}