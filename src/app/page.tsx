import{ ChartOverview } from "@/components/chart";
import{ Sales } from "@/components/sales";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Percent, Shield, Loader, HandHeart, Handshake } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-5" >
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800">
              Feedback do projeto
              </CardTitle>
              <Shield className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
            Feedback sobre o projeto
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text">4 Feedbacks</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800">
              Feedback Recente
              </CardTitle>
              <Users className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
            Feedback dos membros
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text">34 membros</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800">
              Metas e Progresso
              </CardTitle>
              <Loader className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
            Metas estabelecidas para o time e o progresso atual 
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
              Conquistas Recentes
              </CardTitle>
              <Percent className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
            Quantidade de projetos concluidos
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text">1 projeto concluido</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800">
              Ações Afirmativas
              </CardTitle>
              <HandHeart className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
           *******************
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text">1 Ação afirmativa: Mulheres</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800">
              Representatividade
              </CardTitle>
              <Handshake className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
           *******************
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text">Membros da Comunidade</p>
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
