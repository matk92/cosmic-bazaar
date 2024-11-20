'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router-dom'
import { ChevronLeft, AlertCircle, CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AccountValidationPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [validationCode, setValidationCode] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...validationCode]
      newCode[index] = value
      setValidationCode(newCode)

      if (value.length === 1 && index < 5) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !validationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError('')

    const code = validationCode.join('')
    
    // Simulating API call
    setTimeout(() => {
      if (code === '123456') { // Example validation
        setSuccess(true)
      } else {
        setError('Invalid code. Please try again.')
      }
      setIsLoading(false)
    }, 1500)
  }

  const inputVariants = {
    focus: { scale: 1.05, borderColor: "#9333ea" },
    blur: { scale: 1, borderColor: "#374151" }
  }

  const dividerVariants = {
    initial: { width: 0 },
    animate: { width: "1rem", transition: { delay: 0.5, duration: 0.5 } }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-center items-center px-4">
      <motion.div 
        className="max-w-md w-full space-y-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.h2 
            className="mt-6 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Validate Your Cosmic Account
          </motion.h2>
          <motion.p 
            className="mt-2 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Enter the code we sent to your email
          </motion.p>
        </div>
        <AnimatePresence mode="wait">
          {!success ? (
            <motion.form 
              className="mt-8 space-y-6" 
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center items-center space-x-2">
                {validationCode.map((digit, index) => (
                  <React.Fragment key={index}>
                    <motion.div
                      variants={inputVariants}
                      initial="blur"
                      whileFocus="focus"
                      animate={validationCode[index] ? "focus" : "blur"}
                    >
                      <Input
                        ref={el => inputRefs.current[index] = el}
                        type="text"
                        inputMode="numeric"
                        pattern="\d*"
                        maxLength={1}
                        className="w-12 h-12 text-center text-2xl bg-gray-800 border-gray-700 rounded-md focus:ring-purple-500 focus:border-purple-500"
                        value={digit}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                      />
                    </motion.div>
                    {index === 2 && (
                      <motion.div 
                        className="h-0.5 bg-gray-700"
                        variants={dividerVariants}
                        initial="initial"
                        animate="animate"
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div 
                    className="text-red-400 text-sm flex items-center justify-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AlertCircle className="h-4 w-4 mr-2" />
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  disabled={isLoading || validationCode.some(digit => !digit)}
                >
                  {isLoading ? 'Validating...' : 'Validate Account'}
                </Button>
              </motion.div>
            </motion.form>
          ) : (
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Account Validated!
              </motion.h3>
              <motion.p 
                className="text-gray-400 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Your cosmic journey awaits.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Link to="/login">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Proceed to Login
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="mt-2 text-sm text-gray-400">
            Didn't receive the code?{' '}
            <button className="font-medium text-purple-400 hover:text-purple-300">
              Resend Code
            </button>
          </p>
        </motion.div>
        <motion.div 
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link to="/" className="inline-flex items-center text-purple-400 hover:text-purple-300">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}