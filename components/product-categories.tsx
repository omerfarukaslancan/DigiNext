import Link from "next/link"
import { Book, Laptop, FileText, MessageSquare, FileCode, File } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Define static categories for now
const categories = [
  {
    id: "ebooks",
    title: "E-Books",
    description: "Digital books on various topics",
    icon: Book,
    href: "/categories/ebooks",
  },
  {
    id: "coaching",
    title: "Coaching",
    description: "One-on-one coaching sessions",
    icon: MessageSquare,
    href: "/categories/coaching",
  },
  {
    id: "courses",
    title: "Online Courses",
    description: "In-depth courses with video lessons",
    icon: Laptop,
    href: "/categories/courses",
  },
  {
    id: "templates",
    title: "Templates",
    description: "Ready-to-use templates for various purposes",
    icon: FileCode,
    href: "/categories/templates",
  },
  {
    id: "guides",
    title: "Guides & Tutorials",
    description: "Step-by-step guides on specific topics",
    icon: FileText,
    href: "/categories/guides",
  },
  {
    id: "resources",
    title: "Other Resources",
    description: "Additional digital resources",
    icon: File,
    href: "/categories/resources",
  },
]

export default function ProductCategories() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
      {categories.map((category) => (
        <Link href={category.href} key={category.id}>
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-2 rounded-md">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>{category.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{category.description}</CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

