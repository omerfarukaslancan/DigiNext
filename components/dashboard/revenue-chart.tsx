"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts"

// Sample data for revenue
const data = [
  { name: "Jan", revenue: 4500, expenses: 2500 },
  { name: "Feb", revenue: 6000, expenses: 2800 },
  { name: "Mar", revenue: 5500, expenses: 2600 },
  { name: "Apr", revenue: 7000, expenses: 3000 },
  { name: "May", revenue: 9000, expenses: 3200 },
  { name: "Jun", revenue: 8500, expenses: 3100 },
  { name: "Jul", revenue: 10000, expenses: 3500 },
  { name: "Aug", revenue: 11000, expenses: 3800 },
  { name: "Sep", revenue: 10500, expenses: 3700 },
  { name: "Oct", revenue: 12000, expenses: 4000 },
  { name: "Nov", revenue: 15000, expenses: 4500 },
  { name: "Dec", revenue: 16500, expenses: 5000 },
]

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip formatter={(value) => [`$${value}`, "Amount"]} />
        <Legend verticalAlign="top" height={40} />
        <Line type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={2} dot={false} name="Revenue" />
        <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} dot={false} name="Expenses" />
      </LineChart>
    </ResponsiveContainer>
  )
}

