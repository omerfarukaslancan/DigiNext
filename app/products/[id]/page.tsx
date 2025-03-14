import Image from "next/image"
import { Star, Heart, Share2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RelatedProducts from "@/components/related-products"

// Mock product data - in a real app, this would be fetched from an API
const product = {
  id: 1,
  title: "Financial Freedom E-Book",
  description: "Learn how to manage your finances effectively and achieve financial independence.",
  longDescription: `
    <p>Are you tired of living paycheck to paycheck? Do you want to build wealth and achieve financial freedom? This comprehensive e-book will teach you everything you need to know about personal finance.</p>
    
    <p>In this e-book, you'll learn:</p>
    <ul>
      <li>How to create a budget that actually works</li>
      <li>Strategies to eliminate debt quickly</li>
      <li>Investment basics for beginners</li>
      <li>How to build passive income streams</li>
      <li>Retirement planning strategies</li>
      <li>Tax optimization techniques</li>
    </ul>
    
    <p>Written by a certified financial planner with over 15 years of experience, this e-book provides practical advice that you can implement immediately.</p>
  `,
  price: 19.99,
  category: "E-Books",
  categorySlug: "ebooks",
  image: "/placeholder.svg?height=500&width=700",
  bestseller: true,
  rating: 4.8,
  reviewCount: 124,
  format: "PDF",
  pages: 175,
  language: "English",
  lastUpdated: "2023-11-15",
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product image */}
        <div className="w-full md:w-1/2">
          <div className="sticky top-20">
            <div className="relative">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                width={700}
                height={500}
                className="w-full h-auto rounded-lg"
              />
              <Badge className="absolute top-4 left-4 bg-primary hover:bg-primary/90">{product.category}</Badge>
              {product.bestseller && (
                <Badge className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600">Bestseller</Badge>
              )}
            </div>
          </div>
        </div>

        {/* Product details */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground">{product.description}</p>

          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
            <Badge variant="outline" className="text-green-600 border-green-600">
              Digital Product
            </Badge>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="flex-grow">
                Buy Now
              </Button>
              <Button size="lg" variant="outline" className="flex-grow">
                Add to Cart
              </Button>
            </div>
            <div className="flex gap-4">
              <Button size="sm" variant="ghost">
                <Heart className="h-4 w-4 mr-2" />
                Add to Wishlist
              </Button>
              <Button size="sm" variant="ghost">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h3 className="font-semibold">Product Details:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Format:</span>
                <span>{product.format}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Pages:</span>
                <span>{product.pages}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Language:</span>
                <span>{product.language}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Last Updated:</span>
                <span>{product.lastUpdated}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product tabs */}
      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: product.longDescription }} />
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Customer Reviews</h3>
                <Button>Write a Review</Button>
              </div>
              <div className="grid gap-6">
                {/* Review item */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">Excellent resource!</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This e-book has transformed the way I manage my finances. The strategies are practical and easy to
                    implement.
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <span className="font-medium">John Doe</span> - <span>October 15, 2023</span>
                  </div>
                </div>
                {/* Review item */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">Very helpful</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Great content and valuable insights. I've already started implementing some of the strategies.
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <span className="font-medium">Jane Smith</span> - <span>November 2, 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="faq" className="mt-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">What format is the e-book available in?</h3>
                <p className="text-muted-foreground">
                  The e-book is available in PDF format, which can be read on any device with a PDF reader.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">How do I access the e-book after purchase?</h3>
                <p className="text-muted-foreground">
                  After your purchase is complete, you'll receive an email with a download link. You can also access the
                  e-book from your account dashboard.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Is there a refund policy?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer a 30-day money-back guarantee if you're not satisfied with the product.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Can I share this e-book with others?</h3>
                <p className="text-muted-foreground">
                  No, the e-book is for personal use only and should not be shared or distributed.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <RelatedProducts />
      </div>
    </div>
  )
}

