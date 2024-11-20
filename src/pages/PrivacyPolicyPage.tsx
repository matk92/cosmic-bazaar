import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-20">
        <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Privacy Policy
        </h1>
        
        <Card className="bg-gray-800 text-white mb-8">
          <CardHeader>
            <CardTitle>Cosmic-Bazaar Privacy Policy</CardTitle>
            <CardDescription>Last updated: {new Date().toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Welcome to Cosmic-Bazaar. By accessing or using our website, you agree to be bound by this Privacy Policy and all applicable laws and regulations. If you do not agree with any part of this policy, you may not use our services.</p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Data Collection</h2>
            <p>We collect various types of information in connection with the services we provide...</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Data Usage</h2>
            <p>We use the data we collect for various purposes, including to provide and improve our services...</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Data Security</h2>
            <p>We implement advanced quantum encryption and multi-dimensional firewalls to protect your data from unauthorized access or interception during transmission across the cosmos.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to the processing of your personal data</li>
              <li>Data portability</li>
            </ul>
          </section>
        </div>

        <div className="mt-8 text-center">
          <p>If you have any questions about our Privacy Policy, please contact our Data Protection Officer.</p>
          <Link to="/contact" className="text-purple-400 hover:text-purple-300 underline">
            Contact Us
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}