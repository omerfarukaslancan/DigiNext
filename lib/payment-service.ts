// Types for payment processing
export interface PaymentDetails {
  orderId: string
  amount: number
  cardDetails: {
    cardNumber: string
    cardHolder: string
    expiryDate: string
    cvv: string
  }
  products: {
    id: number
    name: string
    price: number
  }[]
}

export interface PaymentResponse {
  success: boolean
  paymentId?: string
  message: string
  error?: string
  receipt?: {
    id: string
    date: Date
    amount: number
    last4: string
  }
}

// Process payment through our API
export async function processPayment(paymentDetails: PaymentDetails): Promise<PaymentResponse> {
  try {
    const response = await fetch("/api/payment/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentDetails),
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        message: data.error || "Payment processing failed",
        error: data.error,
      }
    }

    return data
  } catch (error) {
    console.error("Payment service error:", error)
    return {
      success: false,
      message: "Payment service error",
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

// Validate card number format (basic validation)
export function validateCardNumber(cardNumber: string): boolean {
  const digitsOnly = cardNumber.replace(/\s/g, "")
  return digitsOnly.length === 16 && /^\d+$/.test(digitsOnly)
}

// Format card number with spaces for display
export function formatCardNumber(cardNumber: string): string {
  const digitsOnly = cardNumber.replace(/\s/g, "")
  const groups = []

  for (let i = 0; i < digitsOnly.length; i += 4) {
    groups.push(digitsOnly.slice(i, i + 4))
  }

  return groups.join(" ")
}

// Validate expiry date format and check if expired
export function validateExpiryDate(expiryDate: string): boolean {
  if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
    return false
  }

  const [month, year] = expiryDate.split("/")
  const expiryMonth = Number.parseInt(month, 10)
  const expiryYear = Number.parseInt(`20${year}`, 10)
  const now = new Date()

  if (expiryMonth < 1 || expiryMonth > 12) {
    return false
  }

  if (expiryYear < now.getFullYear() || (expiryYear === now.getFullYear() && expiryMonth < now.getMonth() + 1)) {
    return false
  }

  return true
}

// Format expiry date input
export function formatExpiryDate(input: string): string {
  const digitsOnly = input.replace(/\D/g, "")

  if (digitsOnly.length <= 2) {
    return digitsOnly
  }

  return `${digitsOnly.slice(0, 2)}/${digitsOnly.slice(2, 4)}`
}

