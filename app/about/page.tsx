import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Recycle, Factory, Award, MapPin } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { FloatingDecorations } from "@/components/floating-decorations"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 via-blue-50/20 to-slate-50 relative">
      <FloatingDecorations />
      <MobileNav currentPage="about" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="mb-6 md:mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About AARN Polymers</h1>
          <p className="text-base md:text-lg text-gray-600">
            Leading the transformation of plastic waste into valuable resources
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our Story</h2>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-600">
              <p>
                AARN Polymers was founded in 2018 with a vision to address the growing plastic waste crisis while
                creating valuable resources for manufacturing industries. What started as a small recycling initiative
                has grown into one of the region's leading plastic granule manufacturers.
              </p>
              <p>
                Our founder, Rinku Sharma, recognized the immense potential in transforming plastic waste into
                high-quality granules. With a background in chemical engineering and a passion for environmental
                sustainability, the company was built on the principles of circular economy and responsible
                manufacturing.
              </p>
              <p>
                Today, we process over 10,000 tons of plastic waste annually, converting it into premium-grade granules
                that serve diverse industries including automotive, packaging, construction, and consumer goods. Our
                commitment to quality and sustainability has made us a trusted partner for manufacturers across the
                country.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="AARN Polymers facility"
              width={500}
              height={400}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="text-center p-4 md:p-6">
              <CardContent className="pt-4 md:pt-6">
                <Recycle className="h-10 w-10 md:h-12 md:w-12 text-blue-400 mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Environmental Stewardship</h3>
                <p className="text-sm md:text-base text-gray-600">
                  We are committed to reducing plastic waste and promoting circular economy principles through
                  innovative recycling technologies and sustainable practices.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-4 md:p-6">
              <CardContent className="pt-4 md:pt-6">
                <Award className="h-10 w-10 md:h-12 md:w-12 text-blue-400 mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Quality Excellence</h3>
                <p className="text-sm md:text-base text-gray-600">
                  We maintain the highest quality standards in our manufacturing processes, ensuring consistent and
                  reliable products that meet international specifications.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-4 md:p-6">
              <CardContent className="pt-4 md:pt-6">
                <Factory className="h-10 w-10 md:h-12 md:w-12 text-blue-400 mx-auto mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Innovation</h3>
                <p className="text-sm md:text-base text-gray-600">
                  We continuously invest in research and development to improve our processes, develop new products, and
                  stay at the forefront of recycling technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-2xl md:text-4xl font-bold text-blue-500 mb-1 md:mb-2">10,000+</div>
              <div className="text-xs md:text-base text-gray-600">Tons Recycled Annually</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold text-green-500 mb-1 md:mb-2">50+</div>
              <div className="text-xs md:text-base text-gray-600">Manufacturing Partners</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold text-blue-500 mb-1 md:mb-2">6</div>
              <div className="text-xs md:text-base text-gray-600">Product Categories</div>
            </div>
            <div>
              <div className="text-2xl md:text-4xl font-bold text-green-500 mb-1 md:mb-2">5</div>
              <div className="text-xs md:text-base text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="text-center">
              <CardContent className="pt-4 md:pt-6 p-4 md:p-6">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Rinku Sharma"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-3 md:mb-4 w-24 h-24 md:w-32 md:h-32"
                />
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Rinku Sharma</h3>
                <p className="text-blue-600 mb-2 text-sm md:text-base">Founder & CEO</p>
                <p className="text-gray-600 text-xs md:text-sm">
                  Chemical Engineer with 15+ years in polymer science and sustainable manufacturing. Visionary leader
                  driving innovation in plastic recycling.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-4 md:pt-6 p-4 md:p-6">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Dr. Priya Patel"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-3 md:mb-4 w-24 h-24 md:w-32 md:h-32"
                />
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Dr. Priya Patel</h3>
                <p className="text-blue-600 mb-2 text-sm md:text-base">Head of R&D</p>
                <p className="text-gray-600 text-xs md:text-sm">
                  PhD in Materials Science with expertise in polymer processing and quality control. Leads our research
                  and product development initiatives.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center sm:col-span-2 lg:col-span-1">
              <CardContent className="pt-4 md:pt-6 p-4 md:p-6">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Amit Kumar"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-3 md:mb-4 w-24 h-24 md:w-32 md:h-32"
                />
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Amit Kumar</h3>
                <p className="text-blue-600 mb-2 text-sm md:text-base">Operations Director</p>
                <p className="text-gray-600 text-xs md:text-sm">
                  Industrial Engineering background with 12+ years in manufacturing operations. Ensures efficient
                  production and quality standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Certifications & Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-4">
              <CardContent className="pt-4">
                <Award className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <h4 className="font-semibold text-sm">ISO 9001:2015</h4>
                <p className="text-xs text-gray-600">Quality Management</p>
              </CardContent>
            </Card>
            <Card className="text-center p-4">
              <CardContent className="pt-4">
                <Award className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h4 className="font-semibold text-sm">ISO 14001:2015</h4>
                <p className="text-xs text-gray-600">Environmental Management</p>
              </CardContent>
            </Card>
            <Card className="text-center p-4">
              <CardContent className="pt-4">
                <Award className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <h4 className="font-semibold text-sm">BIS Certification</h4>
                <p className="text-xs text-gray-600">Bureau of Indian Standards</p>
              </CardContent>
            </Card>
            <Card className="text-center p-4">
              <CardContent className="pt-4">
                <Award className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h4 className="font-semibold text-sm">CPCB Authorization</h4>
                <p className="text-xs text-gray-600">Pollution Control Board</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location */}
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="pt-4 md:pt-6 p-4 md:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 mr-2 text-blue-500" />
                  Visit Our Facility
                </h3>
                <div className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                  <p>AARN Polymers Manufacturing Unit</p>
                  <p>Industrial Area, Sector 15</p>
                  <p>Manufacturing City, MC 12345</p>
                  <p>Phone: (555) 123-AARN</p>
                  <p>Email: rinku@aarnpolymers.com</p>
                </div>
                <Button asChild className="w-full sm:w-auto">
                  <Link href="/contact">Schedule a Visit</Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2">
                <Image
                  src="/placeholder.svg?height=250&width=350"
                  alt="AARN Polymers facility exterior"
                  width={350}
                  height={250}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
