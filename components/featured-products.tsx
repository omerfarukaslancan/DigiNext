import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Mock featured products data
const featuredProducts = [
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
]

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {featuredProducts.map((product) => (
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

