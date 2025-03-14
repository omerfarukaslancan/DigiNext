import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Mock related products data
const relatedProducts = [
  {
    id: 5,
    title: "Personal Development Guide",
    description: "A comprehensive guide to personal growth and development.",
    price: 15.99,
    category: "E-Books",
    categorySlug: "ebooks",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Career Coaching Session",
    description: "One-on-one coaching session to help you advance in your career.",
    price: 99.99,
    category: "Coaching",
    categorySlug: "coaching",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    title: "Resume & Cover Letter Templates",
    description: "Professional templates to help you land your dream job.",
    price: 12.99,
    category: "Templates",
    categorySlug: "templates",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Social Media Marketing Course",
    description: "Learn how to grow your business with effective social media marketing strategies.",
    price: 39.99,
    category: "Online Courses",
    categorySlug: "courses",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function RelatedProducts() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {relatedProducts.map((product) => (
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
            </div>
          </CardHeader>
          <CardContent className="flex-grow pt-4">
            <Link href={`/products/${product.id}`}>
              <CardTitle className="text-lg hover:text-primary transition-colors cursor-pointer">
                {product.title}
              </CardTitle>
            </Link>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{product.description}</p>
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

