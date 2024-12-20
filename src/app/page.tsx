import{ ChartOverview } from "@/components/chart";
import{ Sales } from "@/components/sales";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, Percent } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-5" >
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800">
                Total Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Total vendas em 90 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text">R$ 40.000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800">
                Novos clientes
              </CardTitle>
              <Users className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
            Novos clientes em 90 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text">234</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800">
                Pedidos hoje 
              </CardTitle>
              <Percent className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
            Total Pedidos hoje 
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text">65</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800">
                Total Pedidos
              </CardTitle>
              <Percent className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
            Total Pedidos em 30 dias 
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text">2300</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview/>
        <Sales/>
      </section>
    </main>
  );
}
