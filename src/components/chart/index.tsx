"use client"

import { Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ChartContainer, ChartConfig } from "../ui/chart";
import { Bar, CartesianGrid, XAxis, BarChart, Tooltip } from "recharts";

export function ChartOverview() {
    const chartData = [
        { team: "Nufilebox Reverse", integrantes: 186, mobile: 80, sprints: 16 },
        { team: "Observability Tool", integrantes: 305, mobile: 200, sprints: 16 },
        { team: "NuConect", integrantes: 237, mobile: 120, sprints: 11 },
        { team: "Micredit", integrantes: 73, mobile: 190, sprints: 6 },
        { team: "Nufinance", integrantes: 73, mobile: 190, sprints: 6 },

    ];

    // Definição do tipo para 'chartConfig'
    const chartConfig: { [key: string]: { label: string; color: string; } } = {
        integrantes: {
            label: "Integrantes",
            color: "#556B2F",
        },
        mobile: {
            label: "Mobile",
            color: " #FFDB58",
        },

        sprints: {
            label: "Sprints",
            color: " #FF0000",
        },
    };

    // Cálculo dos totais
    const totalIntegrantes = chartData.reduce((acc, item) => acc + item.integrantes, 0);
    const totalMobile = chartData.reduce((acc, item) => acc + item.mobile, 0);
    const totalSprints = chartData.reduce((acc, item) => acc + item.sprints, 0);
    const total = totalIntegrantes + totalMobile + totalSprints;

    // Cálculo dos percentuais
    const integrantesPercentage = ((totalIntegrantes / total) * 100).toFixed(2);
    const mobilePercentage = ((totalMobile / total) * 100).toFixed(2);
    const sprintsPercentage = ((totalSprints / total) * 100).toFixed(2);

    return (
        <Card className="w-full md:w-1/2 md:max-w-[800px]">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-600">
                        Metricas dos times
                    </CardTitle>
                    <Sparkles className="ml-auto w-4 h-4" />
                </div>
            </CardHeader>

            <CardContent>
                {/* Exibindo as métricas */}
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <p className="text-sm text-gray-500">Total de Integrantes</p>
                        <p className="text-xl font-bold text-gray-800">{totalIntegrantes}</p>
                        <p className="text-sm text-gray-500">({integrantesPercentage}%)</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Total Mobile</p>
                        <p className="text-xl font-bold text-gray-800">{totalMobile}</p>
                        <p className="text-sm text-gray-500">({mobilePercentage}%)</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Total Sprints</p>
                        <p className="text-xl font-bold text-gray-800">{totalSprints}</p>
                        <p className="text-sm text-gray-500">({sprintsPercentage}%)</p>
                    </div>
                </div>

                {/* Gráfico */}
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="team"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                    />
                    <Bar dataKey="integrantes" fill="var(--color-integrantes)" radius={4} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                    <Bar dataKey="sprints" fill="var(--color-sprints)" radius={4} />
                </BarChart>

                </ChartContainer>
            </CardContent>
        </Card>
    );
}

