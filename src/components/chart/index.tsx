"use client"

import { Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ChartContainer, ChartConfig } from "../ui/chart";
import { Bar, CartesianGrid, XAxis, BarChart, Tooltip } from "recharts";

export function ChartOverview() {
    const chartData = [
        { team: "Team A", desktop: 186, mobile: 80, sprints: 5 },
        { team: "Team B", desktop: 305, mobile: 200, sprints: 8 },
        { team: "Team C", desktop: 237, mobile: 120, sprints: 7 },
        { team: "Team D", desktop: 73, mobile: 190, sprints: 6 },

    ];

    // Definição do tipo para 'chartConfig'
    const chartConfig: { [key: string]: { label: string; color: string; } } = {
        desktop: {
            label: "Desktop",
            color: "#556B2F",
        },
        mobile: {
            label: "Mobile",
            color: " #FFDB58",
        },
    };

    // Cálculo dos totais
    const totalDesktop = chartData.reduce((acc, item) => acc + item.desktop, 0);
    const totalMobile = chartData.reduce((acc, item) => acc + item.mobile, 0);
    const total = totalDesktop + totalMobile;

    // Cálculo dos percentuais
    const desktopPercentage = ((totalDesktop / total) * 100).toFixed(2);
    const mobilePercentage = ((totalMobile / total) * 100).toFixed(2);

    return (
        <Card className="w-full md:w-1/2 md:max-w-[600px]">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Metricas dos times
                    </CardTitle>
                    <Sparkles className="ml-auto w-4 h-4" />
                </div>
            </CardHeader>

            <CardContent>
                {/* Exibindo as métricas */}
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <p className="text-sm text-gray-500">Total Desktop</p>
                        <p className="text-xl font-bold text-gray-800">{totalDesktop}</p>
                        <p className="text-sm text-gray-500">({desktopPercentage}%)</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Total Mobile</p>
                        <p className="text-xl font-bold text-gray-800">{totalMobile}</p>
                        <p className="text-sm text-gray-500">({mobilePercentage}%)</p>
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
                    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                    <Bar dataKey="sprints" fill="#34d399" radius={4} />
                </BarChart>

                </ChartContainer>
            </CardContent>
        </Card>
    );
}

