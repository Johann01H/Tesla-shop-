import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/mocks/products.mock"
import { ProductsGrid } from "@/shop/components"
import { CustomJumbotron } from "@/shop/components/CustomJumbotron"

export const HomePage = () => {
    return (
        <>
            <CustomJumbotron title="Todos los productos" />
            <ProductsGrid products={products} />
            <CustomPagination totalPages={7} />
        </>

    )
}
