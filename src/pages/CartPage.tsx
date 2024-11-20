'use client'

import { useState } from 'react'
import { Trash2, Plus, Minus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Hydrogen", price: 299.99, quantity: 1, image: "/img/astatine.png?height=100&width=100" },
    { id: 2, name: "Coda Ascension", price: 799.99, quantity: 2, image: "/img/Coda_Ascension.jpg?height=100&width=100" },
  ])

  const updateQuantity = (id: number, change: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
    ).filter(item => item.quantity > 0))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />

      <div className="container mx-auto px-4 py-16 pt-20">
        <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Votre Panier Cosmique
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-2xl mb-4">Votre panier est vide</p>
            <Link to="/products">
              <Button className="bg-purple-600 hover:bg-purple-700">Continuer vos achats</Button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center bg-gray-800 p-4 rounded-lg mb-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-purple-400">{item.price} €</p>
                  </div>
                  <div className="flex items-center">
                    <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, -1)} className="bg-gray-700 text-white hover:bg-gray-600">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, 1)} className="bg-gray-700 text-white hover:bg-gray-600">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-4" onClick={() => updateQuantity(item.id, -item.quantity)}>
                    <Trash2 className="h-5 w-5 text-red-500" />
                  </Button>
                </div>
              ))}
            </div>
            <div className="bg-gray-800 p-6 rounded-lg h-fit">
              <h2 className="text-2xl font-semibold mb-4">Résumé de la Commande</h2>
              <div className="flex justify-between mb-2">
                <span>Sous-total</span>
                <span>{total.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Livraison</span>
                <span>20,00 €</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Taxe</span>
                <span>{(total * 0.1).toFixed(2)} €</span>
              </div>
              <div className="border-t border-gray-600 pt-4 mb-4">
                <div className="flex justify-between text-xl font-semibold">
                  <span>Total</span>
                  <span>{(total + 20 + total * 0.1).toFixed(2)} €</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Passer à la caisse
              </Button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}