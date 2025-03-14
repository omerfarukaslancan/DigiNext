"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

// Sample data for website visitors
const data = [
  { day: "Mon", visitors: 420 },
  { day: "Tue", visitors: 380 },
  { day: "Wed", visitors: 510 },
  { day: "Thu", visitors: 490 },
  { day: "Fri", visitors: 600 },
  { day: "Sat", visitors: 720 },
  { day: "Sun", visitors: 550 },
]

export function VisitorsChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
        <XAxis dataKey="day" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip formatter={(value) => [`${value} visitors`, "Visitors"]} />
        <Area type="monotone" dataKey="visitors" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.2} strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  )
}

