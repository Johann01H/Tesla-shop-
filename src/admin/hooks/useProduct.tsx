import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getProductById } from "../actions/get-product-by-id.action"
import type { Product } from "@/interfaces/product.interface"
import { createUpdateProductAction } from "../actions/create-update-product.action"

export const useProduct = (id: string) => {

    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: ['product', id],
        queryFn: () => getProductById(id),
        retry: false,
        staleTime: 1000 * 60 * 5,
        enabled: !!id
    })


    const mutation = useMutation({
        mutationFn: createUpdateProductAction,
        onSuccess: (product: Product) => {
            //Invalidar Cache
            queryClient.invalidateQueries({ queryKey: ['products'] });
            queryClient.invalidateQueries({ queryKey: ['products', { id: product }] });
            // Actualizar Query Data
            queryClient.setQueryData(['products', { id: product.id }], product);
        }
    });


    // TODO mutación
    // const handdleSubmitForm = async (productLike: Partial<Product>) => {
    //     console.log({ productLike })
    // }

    return {
        ...query,
        mutation
    }
}
