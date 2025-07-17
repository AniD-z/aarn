"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, MapPin, Phone, Mail, Clock } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { FloatingDecorations } from "@/components/floating-decorations"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert("Message sent! We'll get back to you within 24 hours.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative">
      <FloatingDecorations />
      <MobileNav currentPage="contact" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="mb-6 md:mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-base md:text-lg text-gray-600">
            Get in touch with us for product inquiries, bulk orders, or partnership opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm md:text-base">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm md:text-base">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm md:text-base">
                      Subject *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product">Product Inquiry</SelectItem>
                        <SelectItem value="bulk">Bulk Order</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="quality">Quality Certificates</SelectItem>
                        <SelectItem value="custom">Custom Requirements</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm md:text-base">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 md:space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-base md:text-lg">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2 text-pink-500" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-1 md:space-y-2">
                  <p className="font-medium text-sm md:text-base">AARN Polymers</p>
                  <p className="text-gray-600 text-sm md:text-base">Industrial Area, Sector 15</p>
                  <p className="text-gray-600 text-sm md:text-base">Manufacturing City, MC 12345</p>
                  <Button asChild variant="outline" className="w-full mt-3 md:mt-4 text-sm bg-transparent">
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                      Get Directions
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-base md:text-lg">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2 text-purple-500" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-base md:text-lg font-medium">(555) 123-AARN</p>
                <p className="text-gray-600 text-xs md:text-sm mt-1">Call us for immediate assistance</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-base md:text-lg">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2 text-blue-500" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-base md:text-lg font-medium">rinku@aarnpolymers.com</p>
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  We respond within 24 hours for all business inquiries
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-base md:text-lg">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 mr-2 text-green-500" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardContent className="pt-4 md:pt-6 p-4 md:p-6">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Quick Tips</h3>
                <ul className="text-xs md:text-sm text-gray-600 space-y-1">
                  <li>• For bulk orders, please call directly</li>
                  <li>• Product inquiries get priority response</li>
                  <li>• Quality certificates available on request</li>
                  <li>• Custom formulations require technical discussion</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
