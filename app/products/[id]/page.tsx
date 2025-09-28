import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductDetail } from "@/components/products/product-detail"
import { RelatedProducts } from "@/components/products/related-products"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  // Chuyển đổi productId từ string sang number
  const productId = Number(params.id)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="w-full">
        {/* Breadcrumb (contained) */}
        <section className="w-full py-4">
          <div className="container mx-auto px-4">
            <Breadcrumb className="mb-0">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/products">Sản phẩm</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Chi tiết sản phẩm</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Product detail section - full bleed background with contained content */}
        <section className="w-full py-12">
          <div className="container mx-auto px-4">
            <div className="rounded-lg border border-border bg-card p-6">
              <ProductDetail productId={productId} />
            </div>
          </div>
        </section>

        {/* Related products section */}
        <section className="w-full py-12">
          <div className="container mx-auto px-4">
            <div className="rounded-lg border border-border bg-card p-6">
              <RelatedProducts />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
