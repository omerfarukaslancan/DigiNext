import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import FeaturedProducts from "@/components/featured-products"
import ProductCategories from "@/components/product-categories"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 xl:py-36">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">
                  Premium Digital Products
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover exclusive digital products
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  From e-books to coaching sessions, find the digital resources you need to grow personally and
                  professionally.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button size="lg">
                    Browse Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Hero Image"
                className="aspect-square rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Browse Categories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our range of digital products across different categories
              </p>
            </div>
          </div>
          <ProductCategories />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our most popular digital products curated for you
              </p>
            </div>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-muted/50 rounded-lg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Read testimonials from satisfied customers
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {/* Testimonial 1 */}
            <Card>
              <CardHeader>
                <CardTitle>Life-Changing E-Book</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "The financial freedom e-book completely changed my perspective on money management. Highly
                  recommended!"
                </p>
              </CardContent>
              <CardFooter className="flex items-center">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="User Avatar"
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">Verified Customer</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            {/* Testimonial 2 */}
            <Card>
              <CardHeader>
                <CardTitle>Excellent Coaching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "The coaching sessions were personalized and provided actionable insights. Worth every penny!"
                </p>
              </CardContent>
              <CardFooter className="flex items-center">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="User Avatar"
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">Michael Chen</p>
                    <p className="text-xs text-muted-foreground">Verified Customer</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            {/* Testimonial 3 */}
            <Card>
              <CardHeader>
                <CardTitle>Game-Changing Course</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "The web development course was comprehensive and easy to follow. I landed a job just two months after
                  completion!"
                </p>
              </CardContent>
              <CardFooter className="flex items-center">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="User Avatar"
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">Emily Rodriguez</p>
                    <p className="text-xs text-muted-foreground">Verified Customer</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

