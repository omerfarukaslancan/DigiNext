"use client"

import type React from "react"

import { useState } from "react"
import { CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  processPayment,
  formatCardNumber,
  formatExpiryDate,
  validateCardNumber,
  validateExpiryDate,
} from "@/lib/payment-service"

interface PaymentFormProps {
  amount: number
  products: Array<{
    id: number
    name: string
    price: number
  }>
  onPaymentComplete: (result: { success: boolean; receipt?: any; error?: string }) => void
  disabled?: boolean
}

export function PaymentForm({ amount, products, onPaymentComplete, disabled = false }: PaymentFormProps) {
  const [cardNumber, setCardNumber] = useState("")
  const [cardHolder, setCardHolder] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Handle card number input with formatting
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    setCardNumber(formatCardNumber(value))
  }

  // Handle expiry date input with formatting
  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setExpiryDate(formatExpiryDate(value))
  }

  // Handle CVV input (numbers only)
  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    if (value.length <= 3) {
      setCvv(value)
    }
  }

  // Validate form before submission
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required"
    } else if (!validateCardNumber(cardNumber)) {
      newErrors.cardNumber = "Invalid card number"
    }

    if (!cardHolder.trim()) {
      newErrors.cardHolder = "Cardholder name is required"
    }

    if (!expiryDate.trim()) {
      newErrors.expiryDate = "Expiry date is required"
    } else if (!validateExpiryDate(expiryDate)) {
      newErrors.expiryDate = "Invalid or expired date"
    }

    if (!cvv.trim()) {
      newErrors.cvv = "CVV is required"
    } else if (cvv.length !== 3) {
      newErrors.cvv = "CVV must be 3 digits"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm() || isProcessing || disabled) {
      return
    }

    setIsProcessing(true)

    try {
      // Generate a unique order ID
      const orderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`

      // Process the payment
      const result = await processPayment({
        orderId,
        amount,
        cardDetails: {
          cardNumber: cardNumber.replace(/\s/g, ""),
          cardHolder,
          expiryDate,
          cvv,
        },
        products,
      })

      // Notify parent component of the result
      onPaymentComplete(result)
    } catch (error) {
      console.error("Payment processing error:", error)
      onPaymentComplete({
        success: false,
        error: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Payment Information
        </CardTitle>
        <CardDescription>Enter your card details to complete the purchase</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="card-number">Card Number</Label>
            <Input
              id="card-number"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={handleCardNumberChange}
              maxLength={19} // 16 digits + 3 spaces
              disabled={isProcessing || disabled}
              className={errors.cardNumber ? "border-red-500" : ""}
            />
            {errors.cardNumber && <p className="text-sm text-red-500">{errors.cardNumber}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="card-holder">Cardholder Name</Label>
            <Input
              id="card-holder"
              placeholder="John Doe"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              disabled={isProcessing || disabled}
              className={errors.cardHolder ? "border-red-500" : ""}
            />
            {errors.cardHolder && <p className="text-sm text-red-500">{errors.cardHolder}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry-date">Expiry Date</Label>
              <Input
                id="expiry-date"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                maxLength={5} // MM/YY format
                disabled={isProcessing || disabled}
                className={errors.expiryDate ? "border-red-500" : ""}
              />
              {errors.expiryDate && <p className="text-sm text-red-500">{errors.expiryDate}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                placeholder="123"
                value={cvv}
                onChange={handleCvvChange}
                maxLength={3}
                disabled={isProcessing || disabled}
                className={errors.cvv ? "border-red-500" : ""}
              />
              {errors.cvv && <p className="text-sm text-red-500">{errors.cvv}</p>}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isProcessing || disabled}>
            {isProcessing ? "Processing..." : `Pay $${amount.toFixed(2)}`}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

