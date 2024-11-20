import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16 pt-20">
        <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Terms of Service
        </h1>
        
        <Card className="bg-gray-800 text-white mb-8">
          <CardHeader>
            <CardTitle>Cosmic-Bazaar Terms of Service</CardTitle>
            <CardDescription>Last updated: {new Date().toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Welcome to Cosmic-Bazaar. By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.</p>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">1. Introduction</h2>
            <p>These Terms of Service govern your use of our website and services...</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">2. User Responsibilities</h2>
            <p>As a user, you agree to...</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">3. Account Registration</h2>
            <p>To access certain features, you may need to register an account...</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">4. Returns and Refunds</h2>
            <p>Please refer to our <Link to="/returns-exchanges" className="text-purple-400 hover:text-purple-300 underline">Returns & Exchanges</Link> policy for information on returns and refunds.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">5. Intellectual Property</h2>
            <p>All content on Cosmic-Bazaar, including text, graphics, logos, and software, is the property of Cosmic-Bazaar or its content suppliers and is protected by intergalactic copyright laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">6. Limitation of Liability</h2>
            <p>In no event shall Cosmic-Bazaar be liable for any indirect, incidental, special, or consequential damages...</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}