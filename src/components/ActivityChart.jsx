import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function ActivityChart({ data }) {
  return (
    <div className="chart-box">
      <h3>Activity Chart</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#0b63d6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}



