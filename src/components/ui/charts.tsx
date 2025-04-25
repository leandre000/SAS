
import React from "react";
import {
  BarChart as ReChartsBarChart,
  LineChart as ReChartsLineChart,
  PieChart as ReChartsPieChart,
  Bar,
  Line,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { ChartTooltipContent, ChartContainer } from "@/components/ui/chart";

export interface ChartProps {
  data: any[];
  index: string;
  categories: string[];
  colors?: string[];
  valueFormatter?: (value: number) => string;
  className?: string;
}

export interface PieChartProps {
  data: any[];
  index: string;
  category: string;
  colors?: string[];
  valueFormatter?: (value: number) => string;
  className?: string;
}

export const BarChart = ({
  data,
  index,
  categories,
  colors = ["#3db4f2"],
  valueFormatter = (value: number) => `${value}`,
  className,
}: ChartProps) => {
  return (
    <ChartContainer 
      className={className}
      config={{}}
    >
      <ReChartsBarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis 
          dataKey={index}
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis 
          tickFormatter={valueFormatter}
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          content={({ active, payload, label }) => (
            <ChartTooltipContent
              active={active}
              payload={payload}
              label={label}
              formatter={(value) => valueFormatter(Number(value))}
            />
          )}
        />
        {categories.map((category, i) => (
          <Bar
            key={category}
            dataKey={category}
            fill={colors[i % colors.length]}
            radius={[4, 4, 0, 0]}
          />
        ))}
      </ReChartsBarChart>
    </ChartContainer>
  );
};

export const LineChart = ({
  data,
  index,
  categories,
  colors = ["#3db4f2"],
  valueFormatter = (value: number) => `${value}`,
  className,
}: ChartProps) => {
  return (
    <ChartContainer
      className={className}
      config={{}}
    >
      <ReChartsLineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis 
          dataKey={index}
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis 
          tickFormatter={valueFormatter}
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          content={({ active, payload, label }) => (
            <ChartTooltipContent
              active={active}
              payload={payload}
              label={label}
              formatter={(value) => valueFormatter(Number(value))}
            />
          )}
        />
        {categories.map((category, i) => (
          <Line
            key={category}
            type="monotone"
            dataKey={category}
            stroke={colors[i % colors.length]}
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        ))}
      </ReChartsLineChart>
    </ChartContainer>
  );
};

export const PieChart = ({
  data,
  index,
  category,
  colors = ["#3db4f2", "#4caf50", "#ffca28", "#ff9800", "#ff7b7b"],
  valueFormatter = (value: number) => `${value}`,
  className,
}: PieChartProps) => {
  return (
    <ChartContainer
      className={className}
      config={{}}
    >
      <ReChartsPieChart margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
        <Tooltip
          content={({ active, payload }) => (
            <ChartTooltipContent
              active={active}
              payload={payload}
              formatter={(value) => valueFormatter(Number(value))}
            />
          )}
        />
        <Pie
          data={data}
          nameKey={index}
          dataKey={category}
          cx="50%"
          cy="50%"
          outerRadius="80%"
          innerRadius="40%"
          paddingAngle={2}
          strokeWidth={2}
          stroke="#fff"
        >
          {data.map((entry, i) => (
            <Cell key={`cell-${i}`} fill={colors[i % colors.length]} />
          ))}
        </Pie>
        <Legend 
          verticalAlign="bottom" 
          height={36}
          iconType="circle"
          iconSize={8}
          formatter={(value) => (
            <span className="text-xs text-muted-foreground">{value}</span>
          )}
        />
      </ReChartsPieChart>
    </ChartContainer>
  );
};
