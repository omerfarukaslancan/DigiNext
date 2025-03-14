import Link from "next/link"
import { Pencil, Plus, Search, Trash2, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

// Sample products data
const products = [
  {
    id: 1,
    name: "Financial Freedom E-Book",
    category: "E-Books",
    thumbnail: "/placeholder.svg?height=48&width=48",
    price: "$19.99",
    status: "Active",
    sales: 245,
    lastUpdated: "2023-11-15",
  },
  {
    id: 2,
    name: "Career Coaching Session",
    category: "Coaching",
    thumbnail: "/placeholder.svg?height=48&width=48",
    price: "$99.99",
    status: "Active",
    sales: 87,
    lastUpdated: "2023-11-10",
  },
  {
    id: 3,
    name: "Web Development Masterclass",
    category: "Online Courses",
    thumbnail: "/placeholder.svg?height=48&width=48",
    price: "$49.99",
    status: "Active",
    sales: 176,
    lastUpdated: "2023-11-05",
  },
  {
    id: 4,
    name: "Business Plan Template",
    category: "Templates",
    thumbnail: "/placeholder.svg?height=48&width=48",
    price: "$29.99",
    status: "Active",
    sales: 92,
    lastUpdated: "2023-11-03",
  },
  {
    id: 5,
    name: "Personal Development Guide",
    category: "E-Books",
    thumbnail: "/placeholder.svg?height=48&width=48",
    price: "$15.99",
    status: "Draft",
    sales: 0,
    lastUpdated: "2023-11-01",
  },
  {
    id: 6,
    name: "Social Media Marketing Course",
    category: "Online Courses",
    thumbnail: "/placeholder.svg?height=48&width=48",
    price: "$39.99",
    status: "Active",
    sales: 64,
    lastUpdated: "2023-10-25",
  },
  {
    id: 7,
    name: "Leadership Coaching Package",
    category: "Coaching",
    thumbnail: "/placeholder.svg?height=48&width=48",
    price: "$249.99",
    status: "Active",
    sales: 198,
    lastUpdated: "2023-10-20",
  },
  {
    id: 8,
    name: "Resume & Cover Letter Templates",
    category: "Templates",
    thumbnail: "/placeholder.svg?height=48&width=48",
    price: "$12.99",
    status: "Active",
    sales: 142,
    lastUpdated: "2023-10-15",
  },
]

export default function ProductsPage() {
  return (
    <div className="flex flex-col p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Products</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New Product
        </Button>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search products..." className="pl-8 w-full" />
        </div>
        <div className="flex gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="ebooks">E-Books</SelectItem>
              <SelectItem value="coaching">Coaching</SelectItem>
              <SelectItem value="courses">Online Courses</SelectItem>
              <SelectItem value="templates">Templates</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Products table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Sales</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md overflow-hidden">
                      <Image
                        src={product.thumbnail || "/placeholder.svg"}
                        alt={product.name}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="font-medium">{product.name}</div>
                  </div>
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  <Badge variant={product.status === "Active" ? "default" : "secondary"}>{product.status}</Badge>
                </TableCell>
                <TableCell className="text-right">{product.price}</TableCell>
                <TableCell className="text-right">{product.sales}</TableCell>
                <TableCell>{product.lastUpdated}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={`/products/${product.id}`} className="flex items-center">
                          View in store
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2">
        <Button variant="outline" size="sm">
          Previous
        </Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  )
}

