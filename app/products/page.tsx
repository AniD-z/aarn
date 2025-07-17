import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Recycle, Award } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { FloatingDecorations } from "@/components/floating-decorations"

export default function ProductsPage() {
  const products = [
    {
      name: "Polypropylene (PP)",
      price: "",
      quality: "Premium Grade",
      type: "Thermoplastic",
      description:
        "High-quality PP granules with excellent chemical resistance and durability. Ideal for automotive parts, packaging, and consumer goods manufacturing.",
      image: "/placeholder.svg?height=300&width=300",
      applications: ["Automotive Parts", "Food Packaging", "Textiles", "Medical Devices"],
    },
    {
      name: "Polyethylene (PE)",
      price: "",
      quality: "Industrial Grade",
      type: "Thermoplastic",
      description:
        "Versatile PE granules offering excellent flexibility and impact resistance. Perfect for film production, containers, and various molding applications.",
      image: "/placeholder.svg?height=300&width=300",
      applications: ["Plastic Bags", "Containers", "Pipes", "Wire Insulation"],
    },
    {
      name: "Polyvinyl Chloride (PVC)",
      price: "",
      quality: "Standard Grade",
      type: "Thermoplastic",
      description:
        "Durable PVC granules with good chemical resistance and flame retardancy. Suitable for construction, electrical, and plumbing applications.",
      image: "/placeholder.svg?height=300&width=300",
      applications: ["Pipes & Fittings", "Window Frames", "Electrical Cables", "Flooring"],
    },
    {
      name: "Polyethylene Terephthalate (PET)",
      price: "",
      quality: "Food Grade",
      type: "Thermoplastic",
      description:
        "Crystal-clear PET granules with excellent barrier properties. Ideal for beverage bottles, food containers, and textile fiber production.",
      image: "/placeholder.svg?height=300&width=300",
      applications: ["Beverage Bottles", "Food Containers", "Polyester Fibers", "Packaging Films"],
    },
    {
      name: "Polystyrene (PS)",
      price: "",
      quality: "Commercial Grade",
      type: "Thermoplastic",
      description:
        "Lightweight PS granules with good insulation properties. Perfect for disposable packaging, insulation, and consumer electronics.",
      image: "/placeholder.svg?height=300&width=300",
      applications: ["Disposable Cups", "Insulation", "Electronics Housing", "Toys"],
    },
    {
      name: "Acrylonitrile Butadiene Styrene (ABS)",
      price: "",
      quality: "Engineering Grade",
      type: "Thermoplastic",
      description:
        "High-performance ABS granules combining strength, toughness, and heat resistance. Excellent for automotive and electronic applications.",
      image: "/placeholder.svg?height=300&width=300",
      applications: ["Automotive Trim", "Electronic Housings", "Appliances", "3D Printing"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 via-blue-50/20 to-slate-50 relative">
      <FloatingDecorations />
      <MobileNav currentPage="products" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="mb-6 md:mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
            High-quality plastic granules manufactured from recycled materials, meeting industry standards for various
            applications.
          </p>

          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 mb-6 md:mb-8">
            <CardContent className="pt-4 md:pt-6 p-4 md:p-6">
              <div className="flex items-start mb-2">
                <Award className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">Quality Assurance</h3>
              </div>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                All our plastic granules undergo rigorous quality testing to ensure they meet international standards.
                We provide certificates of analysis and maintain consistent quality across all batches.
              </p>
              <Button asChild className="w-full sm:w-auto">
                <Link href="/contact">Request Quality Certificates</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 md:h-64 object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-xs">
                  {product.quality}
                </Badge>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-lg md:text-xl">
                  <span>{product.name}</span>
                  <span className="text-sm font-normal text-green-600 font-bold">{product.price}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-1 md:space-y-2 mb-3 md:mb-4">
                  <p className="text-xs md:text-sm">
                    <strong>Type:</strong> {product.type}
                  </p>
                  <p className="text-xs md:text-sm">
                    <strong>Quality:</strong> {product.quality}
                  </p>
                </div>
                <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-3">{product.description}</p>

                <div className="mb-3 md:mb-4">
                  <p className="text-xs md:text-sm font-semibold text-gray-700 mb-2">Applications:</p>
                  <div className="flex flex-wrap gap-1">
                    {product.applications.slice(0, 3).map((app, appIndex) => (
                      <Badge key={appIndex} variant="outline" className="text-xs">
                        {app}
                      </Badge>
                    ))}
                    {product.applications.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{product.applications.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <Button asChild className="w-full text-sm">
                  <Link href="/contact">Inquire About {product.name}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 md:mt-12">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="pt-4 md:pt-6 text-center p-4 md:p-6">
              <Recycle className="h-10 w-10 md:h-12 md:w-12 text-blue-500 mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Custom Requirements</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                Need specific grades or custom formulations? We can develop tailored solutions to meet your exact
                requirements. Contact us to discuss your specific needs and get a customized quote.
              </p>
              <Button asChild className="w-full sm:w-auto">
                <Link href="/contact">Discuss Custom Requirements</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
