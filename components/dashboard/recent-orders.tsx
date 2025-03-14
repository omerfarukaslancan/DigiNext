import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Sample recent orders data
const recentOrders = [
  {
    id: "ORD-1234",
    customer: {
      name: "John Doe",
      email: "john@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JD",
    },
    product: "Financial Freedom E-Book",
    status: "completed",
    date: "Today, 2:30 PM",
    amount: "$19.99",
  },
  {
    id: "ORD-1233",
    customer: {
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JS",
    },
    product: "Career Coaching Session",
    status: "processing",
    date: "Today, 11:45 AM",
    amount: "$99.99",
  },
  {
    id: "ORD-1232",
    customer: {
      name: "Michael Chen",
      email: "michael@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MC",
    },
    product: "Web Development Masterclass",
    status: "completed",
    date: "Yesterday, 3:20 PM",
    amount: "$49.99",
  },
  {
    id: "ORD-1231",
    customer: {
      name: "Emily Rodriguez",
      email: "emily@example.com",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "ER",
    },
    product: "Business Plan Template",
    status: "completed",
    date: "Yesterday, 9:15 AM",
    amount: "$29.99",
  },
]

export function RecentOrders() {
  return (
    <div className="space-y-4">
      {recentOrders.map((order) => (
        <div key={order.id} className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-9 w-9">
              <AvatarImage src={order.customer.avatar} alt={order.customer.name} />
              <AvatarFallback>{order.customer.initials}</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">{order.customer.name}</p>
              <p className="text-sm text-muted-foreground">{order.customer.email}</p>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm">{order.product}</p>
          </div>
          <div className="hidden md:block">
            <Badge variant={order.status === "completed" ? "success" : "default"}>{order.status}</Badge>
          </div>
          <div className="hidden lg:block">
            <p className="text-sm text-muted-foreground">{order.date}</p>
          </div>
          <p className="text-sm font-medium">{order.amount}</p>
        </div>
      ))}
    </div>
  )
}

