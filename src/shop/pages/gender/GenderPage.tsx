import { CustomPagination } from '@/components/custom/CustomPagination'
import { CustomJumbotron, ProductsGrid } from '@/shop/components'
import { useProducts } from '@/shop/hooks/useProducts'
import { useParams } from 'react-router'


export const GenderPage = () => {

    const { gender } = useParams();

    const { data } = useProducts();

    const genderLabel = gender === "men" ? 'hombres' : gender === "kid" ? "niños" : "mujeres";


    return (
        <div>
            <CustomJumbotron title={`Productos para ${genderLabel}`} />
            <ProductsGrid products={data?.products || []} />
            <CustomPagination totalPages={data?.pages || 1} />
        </div>
    )
}
