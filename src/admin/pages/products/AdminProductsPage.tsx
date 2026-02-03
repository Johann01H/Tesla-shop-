import { AdminTitle } from "@/admin/components/AdminTitle"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { useProducts } from "@/shop/hooks/useProducts"
import { Edit, PlusIcon } from "lucide-react"
import { Link } from "react-router"

export const AdminProductsPage = () => {

    const { data: products } = useProducts();

    return (
        <>
            <div className="flex justify-between items-center">
                <AdminTitle
                    title="Productos"
                    subtitle="Aquí puedes ver y administrar tus productos"
                />
                <div className="flex justify-end mb-10 gap-4">
                    <Link to={"/admin/products/new"}>
                        <Button>
                            <PlusIcon />
                            Nuevo producto
                        </Button>
                    </Link>
                </div>

            </div>

            <Table className="bg-white p-10 shadow-xs border-gray-200 mb-10">
                <TableHeader>
                    <TableRow>
                        <TableHead>Image</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead className="text-right">Precio</TableHead>
                        <TableHead className="text-right">Categoria</TableHead>
                        <TableHead className="text-right">Inventario</TableHead>
                        <TableHead className="text-right">Tallas</TableHead>
                        <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {

                        products?.products.map((product) => (
                            <TableRow key={product.slug}>
                                <TableCell>
                                    <img
                                        className="w-20 h-20 object-cover rounded-md"
                                        src={product.images[0]}
                                        alt="Products"
                                    />
                                </TableCell>
                                <TableCell className="text-start">{product.title}</TableCell>
                                <TableCell className="text-right">$ {product.price}</TableCell>
                                <TableCell className="text-right">{product.tags}</TableCell>
                                <TableCell className="text-right">{product.stock}</TableCell>
                                <TableCell className="text-right">{product.sizes.join(', ')}</TableCell>
                                <TableCell className="text-start">
                                    <Link to={`/admin/products/${product.id}`}>
                                        <Edit className=" w-7 h-7 text-blue-500" />
                                    </Link>
                                </TableCell>
                            </TableRow >
                        ))

                    }
                </TableBody>
            </Table>

            <CustomPagination
                totalPages={products?.pages || 0}
            />
        </>
    )
}
