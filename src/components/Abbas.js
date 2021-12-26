import React from "react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "فروردین",
    Income: 4000,
    Spent: 2400,
    amt: 2400,
  },
  {
    name: "اردیبهشت",
    Income: 3000,
    Spent: 1398,
    amt: 2210,
  },
  {
    name: "خرداد",
    Income: 2000,
    Spent: 900,
    amt: 2290,
  },
  {
    name: "مرداد",
    Income: 2780,
    Spent: 3908,
    amt: 2000,
  },
  {
    name: "مهر",
    Income: 1890,
    Spent: 800,
    amt: 2181,
  },
  {
    name: "دی",
    Income: 2390,
    Spent: 2000,
    amt: 2500,
  },
  {
    name: "اسفند",
    Income: 3490,
    Spent: 4300,
    amt: 2100,
  },
];

const Abbas = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="" horizontal="" vertical="" />
          <XAxis dataKey="name" />
          <YAxis tickSize="5" />
          <Tooltip />

          <Bar dataKey="Spent" fill="#8884d8" />
          <Bar dataKey="Income" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Abbas;
