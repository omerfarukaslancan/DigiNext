import Image from "next/image"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

// Sample popular products data
const popularProducts = [
  {
    id: 1,
    name: "Financial Freedom E-Book",
    category: "E-Books",
    thumbnail: "/placeholder.svg?height=48&width=48",
    price: "$19.99",
    sales: 245,
    status: "Active",
  },
  {
    id: 7,
    name: "Leadership Coaching Package",
    category: "Coaching",
    thumbnail: "/placeholder.svg?height=48&width=48",
    price: "$249.99",
    sales: 198,
    status: "Active",
  },
  {
    id: 3,
    name: "Web Development Masterclass",
    category: "Online Courses",
    thumbnail: "/placeholder.svg?height=48&width=48",
    price: "$49.99",
    sales: 176,
    status: "Active",
  },
  {
    id: 8,
    name: "Resume & Cover Letter Templates",
    category: "Templates",
    thumbnail: "/placeholder.svg?height=48&width=48",
    price: "$12.99",
    sales: 142,
    status: "Active",
  },
  {
    id: 5,
    name: "Personal Development Guide",
    category: "E-Books",
    thumbnail: "/placeholder.svg?height=48&width=48",
    price: "$15.99",
    sales: 124,
    status: "Active",
  },
]

export function PopularProducts() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 gap-2 text-sm font-medium text-muted-foreground p-2">
        <div className="col-span-6">Product</div>
        <div className="col-span-2 text-right">Price</div>
        <div className="col-span-2 text-right">Sales</div>
        <div className="col-span-1 text-center">Status</div>
        <div className="col-span-1"></div>
      </div>
      {popularProducts.map((product) => (
        <div key={product.id} className="grid grid-cols-12 items-center gap-2 rounded-lg border p-3">
          <div className="col-span-6 flex items-center gap-3">
            <div className="h-12 w-12 rounded-md overflow-hidden">
              <Image
                src={product.thumbnail || "/placeholder.svg"}
                alt={product.name}
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="font-medium">{product.name}</div>
              <div className="text-sm text-muted-foreground">{product.category}</div>
            </div>
          </div>
          <div className="col-span-2 text-right font-medium">{product.price}</div>
          <div className="col-span-2 text-right font-medium">{product.sales}</div>
          <div className="col-span-1 flex justify-center">
            <Badge variant="outline" className="text-green-600 border-green-600">
              {product.status}
            </Badge>
          </div>
          <div className="col-span-1 flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit Product</DropdownMenuItem>
                <DropdownMenuItem>View Analytics</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">Remove Product</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  )
}

