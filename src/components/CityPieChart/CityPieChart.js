import React, { Component } from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data01 = [
  { name: "Gdańsk", value: 410 },
  { name: "Sopot", value: 300 },
  { name: "Gdynia", value: 260 },
];
const COLORS = [
  "var(--color-blue)",
  "var(--color-blue2)",
  "var(--color-yellow)",
];

class CityPieChart extends Component {
  render() {
    return (
      <ResponsiveContainer aspect={1} width="100%">
        <PieChart
        >
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            fill="var(--color-blue)"
            label
          >
            {data01.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend iconType="circle" iconSize={18} />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default CityPieChart;
