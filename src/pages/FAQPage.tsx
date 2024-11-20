import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-20">
        <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Frequently Asked Questions
        </h1>
        
        <Accordion type="single" collapsible className="w-full mb-8">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Cosmic-Bazaar?</AccordionTrigger>
            <AccordionContent>
              Cosmic-Bazaar is your one-stop shop for all things intergalactic. We offer a wide range of products from across the universe.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I place an order?</AccordionTrigger>
            <AccordionContent>
              To place an order, simply add items to your cart and proceed to checkout. You will need to create an account or log in to complete your purchase.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
            <AccordionContent>
              We accept various payment methods including credit/debit cards, PayPal, and Cosmic Credits.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              We offer a 30-day return policy for most items. Please check our <Link to="/returns-exchanges" className="text-purple-400 hover:text-purple-300 underline">Returns & Exchanges</Link> page for full details and exclusions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How do you handle interplanetary shipping?</AccordionTrigger>
            <AccordionContent>
              We use state-of-the-art wormhole technology for efficient interplanetary shipping. For more details on shipping times and costs, please visit our <Link to="/shipping-info" className="text-purple-400 hover:text-purple-300 underline">Shipping Information</Link> page.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-8 text-center">
          <p>Didn't find what you were looking for? Our Cosmic Customer Service is here to help!</p>
          <Link to="/contact" className="text-purple-400 hover:text-purple-300 underline">
            Contact Us
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}