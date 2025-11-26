import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Toggle } from "@/components/ui/toggle"
import { GitBranchPlus, Heart } from "lucide-react"
import { useSearchParams } from "react-router"


interface Props {
    id: number
    title: string,
    subtitle: string,
    price: string
    pathImage: string
}

const products: Props[] = [
    {
        id: 1,
        title: "Camiseta Tesla Negra",
        subtitle: "CAMISETA",
        price: "$35",
        pathImage: "https://placehold.co/500x500"
    },
    {
        id: 2,
        title: "Camiseta Tesla Negra",
        subtitle: "CAMISETA",
        price: "$35",
        pathImage: "https://placehold.co/500x500"

    },
    {
        id: 3,
        title: "Camiseta Tesla Negra",
        subtitle: "CAMISETA",
        price: "$35",
        pathImage: "https://placehold.co/500x500"

    },
    {
        id: 4,
        title: "Camiseta Tesla Negra",
        subtitle: "CAMISETA",
        price: "$35",
        pathImage: "https://placehold.co/500x500"
    }
]


export const SingleProduct = () => {

    const [searchParams, setSearchParams] = useSearchParams();


    const getToggleState = searchParams.get('tab') || "description";

    const handdleTab = (tab: string) => {
        searchParams.set('tab', tab)
        setSearchParams(searchParams)

    }

    return (
        <div>
            {/* // Product Information - Tesla | Shop */}
            <div className="flex justify-center items-end my-20 mx-10">
                <div className="grid grid-cols-2 gap-10 ">
                    <div >
                        <img
                            src="/src/assets/product-black-tshirt.jpg"
                            alt="image"
                            className="rounded-md"
                        />
                    </div>
                    <div>
                        <div className="mb-6">
                            <div className="flex items-center justify-between">
                                <h1 className="font-montserrat text-2xl font-normal mb-1">White Printed Shirt</h1>
                                <img src="/src/assets/sale-icon.png" className="w-10" alt="sale-image" />
                            </div>
                            <h2 className="mb-5 font-montserrat">CAMISETA</h2>
                            <h1 className="font-montserrat text-3xl font-bold mb-6">
                                $68.00
                                <span className="mx-2 text-[20px] text-gray-300 line-through ">$
                                    95.00
                                </span>

                            </h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Iste reprehenderit unde, error iusto, minus accusantium impedit similique ipsa
                                vitae asperiores ex soluta porro fuga, quo culpa animi aspernatur eligendi incidunt.
                            </p>
                        </div>

                        <hr className="my-5 " />
                        {/* Toggle group */}
                        <div className="grid grid-cols-4     gap-3">
                            <Toggle
                                aria-label="Toggle bookmark"
                                size="sm"
                                variant="outline"
                                className=" mb-5 *:data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
                            >
                                <Heart />
                                Bookmark
                            </Toggle>
                            <Toggle
                                aria-label="Toggle bookmark"
                                size="sm"
                                variant="outline"
                                className=" mb-5 *:data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
                            >
                                <GitBranchPlus />
                                Bookmark
                            </Toggle>
                        </div>
                        <hr />

                        <Button className="border-none col-3 font-bold font-montserrat rounded-none h-15 mt-5"  >
                            AGREGAR AL CARRITO
                        </Button>
                    </div>
                </div>
            </div>
            {/* // More products - Tesla | Shop */}
            <section className="mx-10 mb-15">
                <Tabs value={getToggleState} defaultValue="account " className="  w4-[00px] rounded-none">
                    <TabsList>
                        <TabsTrigger onClick={() => handdleTab('description')} value="description">Descripción</TabsTrigger>
                        <TabsTrigger onClick={() => handdleTab('add-information')} value="add-information">Información adicional</TabsTrigger>
                        <TabsTrigger onClick={() => handdleTab('reseña')} value="reseña">Reseñas</TabsTrigger>
                    </TabsList>
                    <TabsContent value="description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic voluptatem dolorem atque quod officia ipsam ratione eligendi ipsa quasi officiis vitae voluptates tenetur dolor explicabo nesciunt ab unde, suscipit odit.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic voluptatem dolorem atque quod officia ipsam ratione eligendi ipsa quasi officiis vitae voluptates tenetur dolor explicabo nesciunt ab unde, suscipit odit.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic voluptatem dolorem atque quod officia ipsam ratione eligendi ipsa quasi officiis vitae voluptates tenetur dolor explicabo nesciunt ab unde, suscipit odit.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic voluptatem dolorem atque quod officia ipsam ratione eligendi ipsa quasi officiis vitae voluptates tenetur dolor explicabo nesciunt ab unde, suscipit odit.
                    </TabsContent>
                    <TabsContent className="" value="add-information" >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic voluptatem dolorem atque quod officia ipsam ratione eligendi ipsa quasi officiis vitae voluptates tenetur dolor explicabo nesciunt ab unde, suscipit odit.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic voluptatem dolorem atque quod officia ipsam ratione eligendi ipsa quasi officiis vitae voluptates tenetur dolor explicabo nesciunt ab unde, suscipit odit.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic voluptatem dolorem atque quod officia ipsam ratione eligendi ipsa quasi officiis vitae voluptates tenetur dolor explicabo nesciunt ab unde, suscipit odit.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic voluptatem dolorem atque quod officia ipsam ratione eligendi ipsa quasi officiis vitae voluptates tenetur dolor explicabo nesciunt ab unde, suscipit odit.
                    </TabsContent>
                    <TabsContent className="" value="reseña" >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic voluptatem dolorem atque quod officia ipsam ratione eligendi ipsa quasi officiis vitae voluptates tenetur dolor explicabo nesciunt ab unde, suscipit odit.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic voluptatem dolorem atque quod officia ipsam ratione eligendi ipsa quasi officiis vitae voluptates tenetur dolor explicabo nesciunt ab unde, suscipit odit.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic voluptatem dolorem atque quod officia ipsam ratione eligendi ipsa quasi officiis vitae voluptates tenetur dolor explicabo nesciunt ab unde, suscipit odit.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic voluptatem dolorem atque quod officia ipsam ratione eligendi ipsa quasi officiis vitae voluptates tenetur dolor explicabo nesciunt ab unde, suscipit odit.
                    </TabsContent>
                </Tabs>

            </section>

            <section className="mx-10">
                <h1 className="font-montserrat font-bold text-2xl">
                    Related product
                </h1>
                <div className="grid grid-cols-4 grid-rows-1 gap-3  ">

                    {products.map((product) => (
                        <Card key={product.id} className="group border-0 shadow-none product-card-hover cursor-pointer">
                            <CardContent className="p-0">
                                <div className="relative aspect-square overflow-hidden bg-muted rounded-none">
                                    <img
                                        src={product.pathImage}
                                        alt={product.title}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="image-overlay" />
                                </div>

                                <div className="pt-6 px-4 pb-4 space-y-3">
                                    <div className="space-y-1">
                                        <h3 className="font-medium text-sm tracking-tight">{product.title}</h3>
                                        <p className="text-xs text-muted-foreground uppercase">{product.subtitle}</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold text-lg">$35</p>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground border-primary/20 text-xs px-4 py-2 h-8"
                                        >
                                            Agregar al carrito
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )
                    )}
                </div>
            </section>
        </div >
    )
}
