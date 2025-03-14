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
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample orders data
const orders = [
  {
    id: "ORD-1234",
    customer: "John Doe",
    product: "Financial Freedom E-Book",
    date: "2023-11-15",
    status: "Completed",
    amount: "$19.99",
  },
  {
    id: "ORD-1233",
    customer: "Jane Smith",
    product: "Career Coaching Session",
    date: "2023-11-10",
    status: "Processing",
    amount: "$99.99",
  },
  {
    id: "ORD-1232",
    customer: "Michael Chen",
    product: "Web Development Masterclass",
    date: "2023-11-05",
    status: "Completed",
    amount: "$49.99",
  },
  {
    id: "ORD-1231",
    customer: "Emily Rodriguez",
    product: "Business Plan Template",
    date: "2023-11-03",
    status: "Completed",
    amount: "$29.99",
  },
  {
    id: "ORD-1230",
    customer: "David Johnson",
    product: "Personal Development Guide",
    date: "2023-10-25",
    status: "Refunded",
    amount: "$15.99",
  },
  {
    id: "ORD-1229",
    customer: "Sarah Williams",
    product: "Leadership Coaching Package",
    date: "2023-11-01",
    status: "Completed",
    amount: "$249.99",
  },
  {
    id: "ORD-1228",
    customer: "Robert Brown",
    product: "Social Media Marketing Course",
    date: "2023-10-28",
    status: "Processing",
    amount: "$39.99",
  },
  {
    id: "ORD-1227",
    customer: "Lisa Davis",
    product: "Resume & Cover Letter Templates",
    date: "2023-10-15",
    status: "Completed",
    amount: "$12.99",
  },
]

export default function OrdersPage() {
  return (
    <div className="flex flex-col p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search orders..." className="pl-8 w-full" />
        </div>
        <div className="flex gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="refunded">Refunded</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Orders table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.status === "Completed"
                        ? "default"
                        : order.status === "Processing"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{order.amount}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Order Details</DropdownMenuItem>
                      <DropdownMenuItem>View Customer</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Change Status</DropdownMenuItem>
                      <DropdownMenuItem>Send Receipt</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Issue Refund</DropdownMenuItem>
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

