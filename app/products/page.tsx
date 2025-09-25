import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductCatalog } from "@/components/products/product-catalog"
import { ProductFilters } from "@/components/products/product-filters"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Sản phẩm</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Danh mục sản phẩm</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Khám phá các sản phẩm thuần thực vật, từ cơm khay ăn liền, thực phẩm đóng lon đến trà trái cây tươi mát.
          </p>
        </div>

        {/* Product Catalog with Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ProductFilters />
          </div>
          <div className="lg:col-span-3">
            <ProductCatalog />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}