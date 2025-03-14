import type { Metadata } from "next"
import { Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductList from "@/components/product-list"

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our collection of digital products",
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Products</h1>
        <p className="text-muted-foreground">Browse our collection of digital products</p>

        {/* Filter and search */}
        <div className="flex flex-col sm:flex-row gap-4 py-4">
          <div className="relative flex-grow">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search products..." className="pl-8 w-full" />
          </div>
          <div className="flex gap-4">
            <Select defaultValue="latest">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>
        </div>

        {/* Categories filter */}
        <div className="flex gap-2 pb-6 overflow-x-auto">
          <Button variant="secondary" size="sm" className="rounded-full">
            All
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            E-Books
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Coaching
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Courses
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Templates
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            Guides
          </Button>
        </div>

        {/* Product listing */}
        <ProductList />
      </div>
    </div>
  )
}

