import Link from "next/link"

import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your ultimate destination for premium digital products to enhance your personal and professional growth.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/categories/ebooks"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  E-Books
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/coaching"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Coaching
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/courses"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Online Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/templates"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Templates
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Join Our Newsletter</h3>
            <p className="text-sm text-muted-foreground">Stay updated with our latest digital products and offers.</p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              />
              <button className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

