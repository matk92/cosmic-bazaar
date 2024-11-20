'use client'

import { useState } from 'react'
import { Heart, Star, ChevronLeft, Plus, Minus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1)

  const product = {
    id: 1,
    name: "Quantum Entanglement Device",
    price: 1299.99,
    rating: 4.8,
    description: "Experience the marvels of quantum mechanics with our Quantum Entanglement Device. This cutting-edge gadget allows you to create and manipulate entangled particle pairs, opening up a world of possibilities for communication, computing, and scientific research across vast cosmic distances.",
    features: [
      "Creates and maintains stable entangled particle pairs",
      "Adjustable quantum state manipulation",
      "Built-in error correction for improved fidelity",
      "Compact design for easy transport between star systems",
      "Compatible with standard quantum encryption protocols"
    ],
    specs: {
      "Entanglement Fidelity": "99.99%",
      "Particle Types": "Photons, Electrons, Neutrons",
      "Operating Temperature": "-273°C to 1000°C",
      "Power Source": "Micro Singularity Cell",
      "Dimensions": "15cm x 10cm x 5cm",
      "Weight": "500g (Earth gravity)"
    },
    images: [
      "/img/Hydrogen.png?height=600&width=600",
      "/img/Hydrogen.png?height=600&width=600",
      "/img/Hydrogen.png?height=600&width=600",
      "/img/Hydrogen.png?height=600&width=600",
    ]
  }

  const incrementQuantity = () => setQuantity(q => q + 1)
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1))

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8 pt-20">
        <Link to="/products" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={product.images[0]} alt={product.name} className="w-full h-auto object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                  <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {product.name}
            </h1>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                ))}
              </div>
              <span className="text-gray-400">({product.rating} stars)</span>
            </div>
            <p className="text-3xl font-bold text-purple-400">${product.price}</p>
            <p className="text-gray-300">{product.description}</p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="color" className="block text-sm font-medium text-gray-400 mb-2">Color</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blue">Cosmic Blue</SelectItem>
                    <SelectItem value="purple">Nebula Purple</SelectItem>
                    <SelectItem value="green">Quantum Green</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-400 mb-2">Quantity</label>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" onClick={decrementQuantity} className="bg-gray-700 text-white hover:bg-gray-600">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 text-center bg-gray-800 border-gray-700 text-white no-arrows"
                  />
                  <Button variant="ghost" size="icon" onClick={incrementQuantity} className="bg-gray-700 text-white hover:bg-gray-600">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Add to Cart
              </Button>
              <Button variant="ghost" size="icon" className="bg-gray-700 text-white hover:bg-gray-600">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="features" className="mt-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="features" className="bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">Features</TabsTrigger>
            <TabsTrigger value="specs" className="bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">Specifications</TabsTrigger>
            <TabsTrigger value="reviews" className="bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="features" className="mt-4">
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="specs" className="mt-4">
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="font-medium">{key}:</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-4">
            <p className="text-gray-300">Reviews coming soon...</p>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}