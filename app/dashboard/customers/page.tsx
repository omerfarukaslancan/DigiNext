import { Search, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample customers data
const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "JD",
    status: "Active",
    orders: 12,
    spent: "$549.99",
    lastOrder: "2023-11-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "JS",
    status: "Active",
    orders: 8,
    spent: "$372.45",
    lastOrder: "2023-11-10",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "MC",
    status: "Active",
    orders: 5,
    spent: "$189.98",
    lastOrder: "2023-11-05",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    email: "emily@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "ER",
    status: "Active",
    orders: 3,
    spent: "$99.99",
    lastOrder: "2023-11-03",
  },
  {
    id: 5,
    name: "David Johnson",
    email: "david@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "DJ",
    status: "Inactive",
    orders: 1,
    spent: "$19.99",
    lastOrder: "2023-10-25",
  },
  {
    id: 6,
    name: "Sarah Williams",
    email: "sarah@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SW",
    status: "Active",
    orders: 7,
    spent: "$249.99",
    lastOrder: "2023-11-01",
  },
  {
    id: 7,
    name: "Robert Brown",
    email: "robert@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "RB",
    status: "Active",
    orders: 4,
    spent: "$124.99",
    lastOrder: "2023-10-28",
  },
  {
    id: 8,
    name: "Lisa Davis",
    email: "lisa@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "LD",
    status: "Suspended",
    orders: 2,
    spent: "$59.99",
    lastOrder: "2023-10-15",
  },
]

export default function CustomersPage() {
  return (
    <div className="flex flex-col p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search customers..." className="pl-8 w-full" />
        </div>
        <div className="flex gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Customers table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Orders</TableHead>
              <TableHead className="text-right">Total Spent</TableHead>
              <TableHead>Last Order</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={customer.avatar} alt={customer.name} />
                      <AvatarFallback>{customer.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-muted-foreground">{customer.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      customer.status === "Active"
                        ? "default"
                        : customer.status === "Inactive"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {customer.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{customer.orders}</TableCell>
                <TableCell className="text-right">{customer.spent}</TableCell>
                <TableCell>{customer.lastOrder}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Customer</DropdownMenuItem>
                      <DropdownMenuItem>View Orders</DropdownMenuItem>
                      <DropdownMenuItem>Send Email</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Change Status</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Suspend Account</DropdownMenuItem>
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

