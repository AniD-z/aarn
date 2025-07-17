"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Recycle, Menu, X } from "lucide-react"

interface MobileNavProps {
  currentPage?: string
}

export function MobileNav({ currentPage = "home" }: MobileNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", key: "home" },
    { href: "/products", label: "Our Products", key: "products" },
    { href: "/about", label: "About", key: "about" },
    { href: "/contact", label: "Contact", key: "contact" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="glass-effect shadow-sm border-b border-stone-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="animate-soft-pulse">
              <Recycle className="h-7 w-7 text-blue-600" />
            </div>
            <span className="text-2xl font-light text-stone-800 tracking-wide">AARN Polymers</span>
            <span className="text-blue-500 animate-peaceful-sway">♻️</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-stone-700 font-medium bg-stone-100/50"
                      : "text-stone-600 hover:text-stone-800 hover:bg-stone-100/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-stone-600" /> : <Menu className="h-6 w-6 text-stone-600" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-stone-200/50 glass-effect">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`block px-3 py-3 rounded-lg text-base transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-stone-700 font-medium bg-stone-100/30"
                      : "text-stone-600 hover:text-stone-800 hover:bg-stone-100/30"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
