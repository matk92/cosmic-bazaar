import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ShippingInfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Intergalactic Shipping Information
        </h1>
        
        <Card className="bg-gray-800 text-white mb-8">
          <CardHeader>
            <CardTitle>Standard Shipping</CardTitle>
            <CardDescription>For all orders within the Milky Way Galaxy</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Delivery Time: 3-5 Earth days</p>
            <p>Cost: 10 Cosmic Credits</p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 text-white mb-8">
          <CardHeader>
            <CardTitle>Express Wormhole Delivery</CardTitle>
            <CardDescription>For urgent orders across galaxies</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Delivery Time: 1-2 Earth days</p>
            <p>Cost: 25 Cosmic Credits</p>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I track my order?</AccordionTrigger>
            <AccordionContent>
              You can track your order using the tracking number provided in your order confirmation email. Visit our <Link to="/order-tracking" className="text-purple-400 hover:text-purple-300 underline">Order Tracking</Link> page for more details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What are the shipping restrictions?</AccordionTrigger>
            <AccordionContent>
              We currently do not ship to black hole regions or areas with high cosmic radiation. Please check our <Link to="/shipping-restrictions" className="text-purple-400 hover:text-purple-300 underline">Shipping Restrictions</Link> page for more details.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="text-center">
          <p>For more information or assistance, please contact our Cosmic Customer Service.</p>
          <Link to="/contact" className="text-purple-400 hover:text-purple-300 underline">
            Contact Us
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}