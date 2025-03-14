import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl">Payment Successful!</CardTitle>
          <CardDescription>Thank you for your purchase</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Your order has been processed successfully. You will receive an email confirmation shortly.</p>
          <div className="bg-muted p-4 rounded-md text-left">
            <h3 className="font-medium mb-2">Order Details</h3>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>Order ID:</span>
                <span>ORD-{Math.floor(Math.random() * 10000)}</span>
              </div>
              <div className="flex justify-between">
                <span>Date:</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Method:</span>
                <span>Credit Card (**** 1234)</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Your digital products are now available in your account. You can access them at any time.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button asChild className="w-full">
            <Link href="/dashboard">Go to My Account</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

