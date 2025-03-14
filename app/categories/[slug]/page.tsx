import type { Metadata } from "next"
import { Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProductList from "@/components/product-list"

// Mock category data
const categories = {
  ebooks: {
    title: "E-Books",
    description: "Digital books on various topics to enhance your knowledge",
  },
  coaching: {
    title: "Coaching",
    description: "One-on-one coaching sessions with expert mentors",
  },
  courses: {
    title: "Online Courses",
    description: "Comprehensive courses with video lessons and resources",
  },
  templates: {
    title: "Templates",
    description: "Ready-to-use templates for various purposes",
  },
  guides: {
    title: "Guides & Tutorials",
    description: "Step-by-step guides on specific topics",
  },
  resources: {
    title: "Other Resources",
    description: "Additional digital resources for your needs",
  },
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = categories[params.slug as keyof typeof categories]
  return {
    title: category?.title || "Category",
    description: category?.description || "Browse our digital products",
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories[params.slug as keyof typeof categories]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{category?.title || "Category"}</h1>
        <p className="text-muted-foreground">{category?.description || "Browse our digital products"}</p>

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

        {/* Product listing */}
        <ProductList />
      </div>
    </div>
  )
}

