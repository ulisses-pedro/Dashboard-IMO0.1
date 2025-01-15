import { Boxes } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Sales() {
    return(
        <Card className="flex-1">
            <CardHeader>
                <div className= "flex items-center justfy-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Nossos Times
                    </CardTitle>
                    <Boxes className="ml-auto w-4 h-4"/>
                </div>
                <CardDescription>
                    Novos clientes mas ultimas 24 horas
                </CardDescription>
            </CardHeader>

            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="Adicionar o link da foto ou o camionho da imagem"/>
                        <AvatarFallback>NR</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Nufilebox Reverse</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">nufileboxreverse@gmail.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="Adicionar o link da foto ou o camionho da imagem"/>
                        <AvatarFallback>OT</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Observability Tool</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">observabilitytool@gmail.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="Adicionar o link da foto ou o camionho da imagem"/>
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">NuConect</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">nuconect.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="Adicionar o link da foto ou o camionho da imagem"/>
                        <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Micreditt</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">esg@gmail.com</span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="Adicionar o link da foto ou o camionho da imagem"/>
                        <AvatarFallback>NF</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Nufinance</p>
                        <span className="text-[12px] sm:text-sm text-gray-400">Nufinance@gmail.com</span>
                    </div>
                </article>
            </CardContent>
        </Card>
    )
}