"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

// Sample data for recent sales
const data = [
  {
    name: "Mon",
    total: 10,
  },
  {
    name: "Tue",
    total: 12,
  },
  {
    name: "Wed",
    total: 15,
  },
  {
    name: "Thu",
    total: 9,
  },
  {
    name: "Fri",
    total: 18,
  },
  {
    name: "Sat",
    total: 24,
  },
  {
    name: "Sun",
    total: 13,
  },
]

export function RecentSalesChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip formatter={(value) => [`${value} sales`, "Total"]} />
        <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

