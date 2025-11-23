import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CustomLogo } from "@/components/custom/CustomLogo"
import { Link } from "react-router"

export const RegisterPage = () => {
    return (
        <div className="flex flex-col gap-6" >
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <form className="p-6 md:p-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">
                                    <CustomLogo />
                                </h1>
                                <p className="text-balance text-muted-foreground">Crea una nueva cuenta</p>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="usuario">Nombre completo: </Label>
                                <Input
                                    id="usuario"
                                    type="text"
                                    placeholder="Nombre completo"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="direccion">Dirección:</Label>
                                <Input
                                    id="email"
                                    type="text"
                                    placeholder="Bridge Market, Sector 17-D"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="correo">Correo electronico: </Label>
                                <Input
                                    id="correo"
                                    type="email"
                                    placeholder="Mail@google.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="contraseña"> Contraseña: </Label>
                                </div>
                                <Input
                                    id="contraseña"
                                    type="password"
                                    placeholder="Contraseña"
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Registrarse
                            </Button>

                            <div className="text-center text-sm">
                                ¿Tienes una cuenta? {" "}
                                <Link to="/auth/login" className="underline underline-offset-4">
                                    Ingresa ahora
                                </Link>
                            </div>
                        </div>
                    </form>
                    <div className="relative hidden bg-muted md:block">
                        <img
                            src="/placeholder.svg"
                            alt="Image"
                            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div>
                </CardContent>
            </Card>
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
                Al hacer clic en continuar, acepta nuestros <a href="#">Términos de servicio</a> y <a href="#">Política de privacidad</a>.
            </div>
        </div>
    )
}

