import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Mock products data - in a real app, this would be fetched from an API
const products = [
  {
    id: 1,
    title: "Financial Freedom E-Book",
    description: "Learn how to manage your finances effectively and achieve financial independence.",
    price: 19.99,
    category: "E-Books",
    categorySlug: "ebooks",
    image: "/placeholder.svg?height=200&width=300",
    bestseller: true,
  },
  {
    id: 2,
    title: "Career Coaching Session",
    description: "One-on-one coaching session to help you advance in your career.",
    price: 99.99,
    category: "Coaching",
    categorySlug: "coaching",
    image: "/placeholder.svg?height=200&width=300",
    bestseller: false,
  },
  {
    id: 3,
    title: "Web Development Masterclass",
    description: "Comprehensive course on modern web development techniques.",
    price: 49.99,
    category: "Online Courses",
    categorySlug: "courses",
    image: "/placeholder.svg?height=200&width=300",
    bestseller: true,
  },
  {
    id: 4,
    title: "Business Plan Template",
    description: "Professional business plan template to help you start your business.",
    price: 29.99,
    category: "Templates",
    categorySlug: "templates",
    image: "/placeholder.svg?height=200&width=300",
    bestseller: false,
  },
  {
    id: 5,
    title: "Personal Development Guide",
    description: "A comprehensive guide to personal growth and development.",
    price: 15.99,
    category: "E-Books",
    categorySlug: "ebooks",
    image: "/placeholder.svg?height=200&width=300",
    bestseller: false,
  },
  {
    id: 6,
    title: "Social Media Marketing Course",
    description: "Learn how to grow your business with effective social media marketing strategies.",
    price: 39.99,
    category: "Online Courses",
    categorySlug: "courses",
    image: "/placeholder.svg?height=200&width=300",
    bestseller: false,
  },
  {
    id: 7,
    title: "Leadership Coaching Package",
    description: "Three coaching sessions to develop your leadership skills and potential.",
    price: 249.99,
    category: "Coaching",
    categorySlug: "coaching",
    image: "/placeholder.svg?height=200&width=300",
    bestseller: true,
  },
  {
    id: 8,
    title: "Resume & Cover Letter Templates",
    description: "Professional templates to help you land your dream job.",
    price: 12.99,
    category: "Templates",
    categorySlug: "templates",
    image: "/placeholder.svg?height=200&width=300",
    bestseller: true,
  },
]

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} className="h-full flex flex-col">
          <CardHeader className="p-0">
            <div className="relative">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <Link href={`/categories/${product.categorySlug}`} className="absolute top-2 left-2">
                <Badge variant="secondary" className="hover:bg-secondary/80">
                  {product.category}
                </Badge>
              </Link>
              {product.bestseller && (
                <Badge className="absolute top-2 right-2 bg-yellow-500 hover:bg-yellow-600">Bestseller</Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="flex-grow pt-4">
            <Link href={`/products/${product.id}`}>
              <CardTitle className="text-lg hover:text-primary transition-colors cursor-pointer">
                {product.title}
              </CardTitle>
            </Link>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{product.description}</p>
          </CardContent>
          <CardFooter className="flex items-center justify-between border-t pt-4">
            <div className="font-bold text-lg">${product.price.toFixed(2)}</div>
            <Button size="sm">
              <Link href={`/products/${product.id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

