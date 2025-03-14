import { type NextRequest, NextResponse } from "next/server"

// Mock database for storing payment records
// In a real application, this would be in a database
const paymentRecords: PaymentRecord[] = []

interface PaymentRecord {
  id: string
  orderId: string
  amount: number
  cardDetails: {
    cardNumber: string // We'll store last 4 digits only
    cardHolder: string
    expiryDate: string
  }
  status: "pending" | "completed" | "failed"
  timestamp: Date
  products: {
    id: number
    name: string
    price: number
  }[]
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.orderId || !body.amount || !body.cardDetails || !body.products) {
      return NextResponse.json({ error: "Missing required payment information" }, { status: 400 })
    }

    // Basic card validation (very simplified)
    const { cardNumber, cardHolder, expiryDate, cvv } = body.cardDetails

    if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
      return NextResponse.json({ error: "Invalid card details" }, { status: 400 })
    }

    // Check if card number is valid format (simplified)
    if (cardNumber.replace(/\s/g, "").length !== 16 || !/^\d+$/.test(cardNumber.replace(/\s/g, ""))) {
      return NextResponse.json({ error: "Invalid card number format" }, { status: 400 })
    }

    // Check if expiry date is valid (simplified)
    const [month, year] = expiryDate.split("/")
    const expiryMonth = Number.parseInt(month, 10)
    const expiryYear = Number.parseInt(`20${year}`, 10)
    const now = new Date()

    if (
      expiryMonth < 1 ||
      expiryMonth > 12 ||
      expiryYear < now.getFullYear() ||
      (expiryYear === now.getFullYear() && expiryMonth < now.getMonth() + 1)
    ) {
      return NextResponse.json({ error: "Card has expired" }, { status: 400 })
    }

    // Simulate payment processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Create a payment record (storing only last 4 digits of card)
    const paymentId = `PAY-${Date.now()}-${Math.floor(Math.random() * 1000)}`
    const paymentRecord: PaymentRecord = {
      id: paymentId,
      orderId: body.orderId,
      amount: body.amount,
      cardDetails: {
        cardNumber: `**** **** **** ${cardNumber.slice(-4)}`,
        cardHolder: cardHolder,
        expiryDate: expiryDate,
      },
      status: "completed", // Always succeed in this mock implementation
      timestamp: new Date(),
      products: body.products,
    }

    // Store the payment record
    paymentRecords.push(paymentRecord)

    // Return success response
    return NextResponse.json({
      success: true,
      paymentId: paymentId,
      message: "Payment processed successfully",
      receipt: {
        id: paymentId,
        date: paymentRecord.timestamp,
        amount: body.amount,
        last4: cardNumber.slice(-4),
      },
    })
  } catch (error) {
    console.error("Payment processing error:", error)
    return NextResponse.json({ error: "Payment processing failed" }, { status: 500 })
  }
}

// GET endpoint to retrieve payment history (for admin purposes)
export async function GET(request: NextRequest) {
  // In a real app, this would be protected by authentication
  return NextResponse.json({
    payments: paymentRecords,
  })
}

