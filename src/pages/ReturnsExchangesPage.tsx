import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ReturnsExchangesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-20">
        <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Returns & Exchanges Policy
        </h1>
        
        <Card className="bg-gray-800 text-white mb-8">
          <CardHeader>
            <CardTitle>Our Cosmic Guarantee</CardTitle>
            <CardDescription>We want you to be fully satisfied with your purchase</CardDescription>
          </CardHeader>
          <CardContent>
            <p>You have 30 Earth days to return or exchange your item from the date of delivery. Items must be in their original condition and packaging.</p>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I initiate a return or exchange?</AccordionTrigger>
            <AccordionContent>
              Log into your Cosmic-Bazaar account, go to your order history, and select the item you wish to return or exchange. Follow the prompts to generate a return label or exchange request.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What items are not eligible for return?</AccordionTrigger>
            <AccordionContent>
              Perishable goods, custom-made items, and products marked as final sale are not eligible for return. Additionally, any items exposed to extreme cosmic radiation or black hole environments cannot be accepted for safety reasons.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How long does the refund process take?</AccordionTrigger>
            <AccordionContent>
              Once we receive your return, we'll process it within 5-7 Earth days. Refunds are issued to the original form of payment and may take an additional 3-5 days to appear on your statement.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">Need to make a return?</h2>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Link to="/account/returns">Start Your Return</Link>
          </Button>
        </div>

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