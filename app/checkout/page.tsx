"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Check, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PaymentForm } from "@/components/checkout/payment-form"
import { OrderSummary } from "@/components/checkout/order-summary"

// Sample cart items data - in a real app, this would come from a cart context or API
const cartItems = [
  {
    id: 1,
    name: "Financial Freedom E-Book",
    price: 19.99,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Career Coaching Session",
    price: 99.99,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function CheckoutPage() {
  const router = useRouter()
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error">("idle")
  const [paymentError, setPaymentError] = useState<string | null>(null)
  const [receiptData, setReceiptData] = useState<any>(null)

  // Calculate the cart summary
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0)
  const tax = subtotal * 0.05 // Assuming 5% tax
  const total = subtotal + tax

  const handlePaymentComplete = (result: { success: boolean; receipt?: any; error?: string }) => {
    if (result.success) {
      setPaymentStatus("success")
      setReceiptData(result.receipt)

      // In a real app, you would clear the cart here

      // Redirect to success page after a delay
      setTimeout(() => {
        router.push("/checkout/success")
      }, 2000)
    } else {
      setPaymentStatus("error")
      setPaymentError(result.error || "Payment failed. Please try again.")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="text-muted-foreground">Complete your purchase</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          {/* Order items */}
          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
              <CardDescription>Review your items before checkout</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-md overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">Digital Product</p>
                  </div>
                  <div className="font-bold">${item.price.toFixed(2)}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Payment form */}
          <PaymentForm
            amount={total}
            products={cartItems}
            onPaymentComplete={handlePaymentComplete}
            disabled={paymentStatus === "processing" || paymentStatus === "success"}
          />

          {/* Payment status messages */}
          {paymentStatus === "success" && (
            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="h-5 w-5" />
                  <p className="font-medium">Payment successful! Redirecting to confirmation page...</p>
                </div>
              </CardContent>
            </Card>
          )}

          {paymentStatus === "error" && (
            <Card className="bg-red-50 border-red-200">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-red-600">
                  <AlertCircle className="h-5 w-5" />
                  <p className="font-medium">{paymentError}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Order summary */}
        <div>
          <OrderSummary subtotal={subtotal} tax={tax} total={total} processing={paymentStatus === "processing"} />

          <div className="mt-6 text-sm text-muted-foreground">
            <p>
              By completing your purchase, you agree to our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

