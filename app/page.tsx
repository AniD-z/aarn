"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Recycle, Factory, Leaf, Users, Menu, X, ChevronLeft, ChevronRight } from "lucide-react"
import { FloatingDecorations } from "@/components/floating-decorations"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const factoryImages = [
    { src: "/placeholder.svg?height=400&width=600", alt: "Main Production Facility" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Recycling Plant" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Quality Control Lab" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Warehouse & Distribution" },
  ]

  const clientCompanies = [
    { name: "EcoPlast Industries", logo: "/placeholder.svg?height=80&width=120" },
    { name: "GreenTech Solutions", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Sustainable Packaging Co.", logo: "/placeholder.svg?height=80&width=120" },
    { name: "RecycleCorp", logo: "/placeholder.svg?height=80&width=120" },
    { name: "PlastiTech Manufacturing", logo: "/placeholder.svg?height=80&width=120" },
    { name: "EcoFriendly Products Ltd.", logo: "/placeholder.svg?height=80&width=120" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % factoryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + factoryImages.length) % factoryImages.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 via-blue-50/20 to-slate-50 relative">
      <FloatingDecorations />

      {/* Navigation */}
      <nav className="glass-effect shadow-sm border-b border-stone-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="animate-soft-pulse">
                <Recycle className="h-7 w-7 text-blue-600" />
              </div>
              <span className="text-2xl font-light text-stone-800 tracking-wide">AARN Polymers</span>
              <span className="text-blue-500 animate-peaceful-sway">♻️</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-stone-700 font-medium px-4 py-2 rounded-full hover:bg-stone-100/50 transition-all duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-stone-600 hover:text-stone-800 px-4 py-2 rounded-full hover:bg-stone-100/50 transition-all duration-300"
                >
                  Our Products
                </Link>
                <Link
                  href="/about"
                  className="text-stone-600 hover:text-stone-800 px-4 py-2 rounded-full hover:bg-stone-100/50 transition-all duration-300"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-stone-600 hover:text-stone-800 px-4 py-2 rounded-full hover:bg-stone-100/50 transition-all duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-stone-600" />
                ) : (
                  <Menu className="h-6 w-6 text-stone-600" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-stone-200/50 glass-effect">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="text-stone-700 font-medium block px-3 py-3 rounded-lg text-base bg-stone-100/30"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className="text-stone-600 hover:text-stone-800 block px-3 py-3 rounded-lg text-base hover:bg-stone-100/30 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Products
                </Link>
                <Link
                  href="/about"
                  className="text-stone-600 hover:text-stone-800 block px-3 py-3 rounded-lg text-base hover:bg-stone-100/30 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-stone-600 hover:text-stone-800 block px-3 py-3 rounded-lg text-base hover:bg-stone-100/30 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="zen-spacing relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-stone-800 leading-tight">
                  Transforming Waste into
                  <span className="block text-blue-600 animate-soft-pulse">Valuable Resources</span>
                </h1>
                <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-2xl">
                  Leading plastic recycling company converting waste into high-quality plastic granules for sustainable
                  manufacturing.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-light shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/products">View Our Products</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-stone-300 text-stone-700 hover:bg-stone-50 px-8 py-4 rounded-full text-lg font-light transition-all duration-300 bg-transparent"
                >
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="animate-gentle-float">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="AARN Polymers recycling facility"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
              <div className="absolute -top-6 -right-6 animate-peaceful-sway text-3xl opacity-60">♻️</div>
              <div className="absolute -bottom-6 -left-6 animate-zen-breathe text-2xl opacity-60">🌱</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="zen-spacing glass-effect relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">What We Do</h2>
            <p className="text-xl text-stone-600 font-light max-w-4xl mx-auto leading-relaxed">
              AARN Polymers specializes in converting plastic waste into high-quality plastic granules through advanced
              recycling processes. We transform discarded plastic materials into valuable raw materials for
              manufacturing industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 bg-white/60 backdrop-blur-sm border-stone-200/50 hover:shadow-lg transition-all duration-500 group">
              <CardContent className="pt-8">
                <div className="animate-zen-breathe group-hover:scale-110 transition-transform duration-300">
                  <Recycle className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-stone-800">Plastic Recycling</h3>
                <p className="text-stone-600 leading-relaxed">
                  Advanced recycling processes to convert plastic waste into reusable granules with maintained quality
                  standards.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 bg-white/60 backdrop-blur-sm border-stone-200/50 hover:shadow-lg transition-all duration-500 group">
              <CardContent className="pt-8">
                <div className="animate-soft-pulse group-hover:scale-110 transition-transform duration-300">
                  <Factory className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-stone-800">Manufacturing</h3>
                <p className="text-stone-600 leading-relaxed">
                  State-of-the-art manufacturing facilities producing various types of plastic granules for diverse
                  applications.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 bg-white/60 backdrop-blur-sm border-stone-200/50 hover:shadow-lg transition-all duration-500 group">
              <CardContent className="pt-8">
                <div className="animate-peaceful-sway group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="h-12 w-12 text-green-600 mx-auto mb-6" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-stone-800">Sustainability</h3>
                <p className="text-stone-600 leading-relaxed">
                  Committed to environmental protection through circular economy principles and sustainable practices.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 bg-white/60 backdrop-blur-sm border-stone-200/50 hover:shadow-lg transition-all duration-500 group">
              <CardContent className="pt-8">
                <div className="animate-gentle-float group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-stone-800">Partnership</h3>
                <p className="text-stone-600 leading-relaxed">
                  Building strong partnerships with manufacturers and suppliers for a sustainable plastic ecosystem.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="zen-spacing relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">Our Process</h2>
            <p className="text-xl text-stone-600 font-light max-w-3xl mx-auto">
              From waste collection to high-quality granule production, our streamlined process ensures maximum
              efficiency and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-medium text-stone-800">Collection & Sorting</h3>
              <p className="text-stone-600">
                We collect plastic waste from various sources and sort them by type and quality for optimal processing.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-medium text-stone-800">Processing & Cleaning</h3>
              <p className="text-stone-600">
                Advanced cleaning and processing techniques remove contaminants and prepare materials for granulation.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-medium text-stone-800">Granule Production</h3>
              <p className="text-stone-600">
                High-quality plastic granules are produced through controlled melting and pelletizing processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Companies We Work With */}
      <section className="zen-spacing bg-gradient-to-r from-stone-100 via-blue-50/30 to-neutral-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">Trusted by Industry Leaders</h2>
            <p className="text-xl text-stone-600 font-light max-w-3xl mx-auto">
              We partner with leading companies across various industries to provide sustainable plastic solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientCompanies.map((company, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    width={120}
                    height={80}
                    className="mx-auto mb-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <p className="text-sm text-stone-600 font-medium">{company.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Showcase Slider */}
      <section className="zen-spacing relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">Our Facilities</h2>
            <p className="text-xl text-stone-600 font-light max-w-3xl mx-auto">
              State-of-the-art facilities equipped with modern technology for efficient plastic recycling and granule
              production.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative h-96 md:h-[500px]">
                <Image
                  src={factoryImages[currentSlide].src || "/placeholder.svg"}
                  alt={factoryImages[currentSlide].alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-medium mb-2">{factoryImages[currentSlide].alt}</h3>
                  <p className="text-lg opacity-90">Advanced technology for sustainable production</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-white/50"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-white/50"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {factoryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-blue-600" : "bg-stone-300 hover:bg-stone-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="zen-spacing bg-gradient-to-r from-blue-600 to-blue-700 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-white">Ready to Partner with Us?</h2>
            <p className="text-xl text-blue-100 font-light leading-relaxed max-w-2xl mx-auto">
              Join us in creating a sustainable future through innovative plastic recycling solutions. Get in touch to
              discuss your requirements.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full text-lg font-light shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800/95 backdrop-blur-sm text-stone-200 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="animate-soft-pulse">
                  <Recycle className="h-7 w-7 text-blue-400" />
                </div>
                <span className="text-2xl font-light tracking-wide">AARN Polymers</span>
              </div>
              <p className="text-stone-400 leading-relaxed">
                Transforming plastic waste into valuable resources for a sustainable future.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-stone-200">Explore</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/products" className="text-stone-400 hover:text-stone-200 transition-colors duration-300">
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-stone-400 hover:text-stone-200 transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-stone-400 hover:text-stone-200 transition-colors duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-stone-200">Contact Us</h3>
              <div className="space-y-2 text-stone-400">
                <p>NO. 3/2 Thagachaguppe Village, Kumbalagodu post</p>
                <p>Banglore, Karnataka</p>
                <p>Phone: (+91) 9535187716</p>
                <p>rinku@aarnpolymers.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-700 mt-12 pt-8 text-center">
            <p className="text-stone-500 font-light">
              &copy; 2025 AARN Polymers. Leading the way in sustainable plastic recycling.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
