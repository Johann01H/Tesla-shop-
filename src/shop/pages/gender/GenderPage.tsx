import { CustomPagination } from '@/components/custom/CustomPagination'
import { products } from '@/mocks/products.mock'
import { CustomJumbotron, ProductsGrid } from '@/shop/components'
import { useParams } from 'react-router'


export const GenderPage = () => {

    const { gender } = useParams();

    const genderLabel = gender === "men" ? 'hombres' : gender === "woman" ? "Mujeres" : 'niños';

    return (
        <div>
            <CustomJumbotron title={`Productos para ${genderLabel}`} />
            <ProductsGrid products={products} />
            <CustomPagination totalPages={7} />
        </div>
    )
}
