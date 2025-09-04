"use client"

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"

const sampleData = [
  { day: "Mon", present: 86 },
  { day: "Tue", present: 91 },
  { day: "Wed", present: 88 },
  { day: "Thu", present: 93 },
  { day: "Fri", present: 89 },
  { day: "Sat", present: 80 },
]

export function AttendanceTrendChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sampleData} margin={{ left: 12, right: 12 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
          <XAxis dataKey="day" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} domain={[70, 100]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="present"
            stroke="#16a34a"
            strokeWidth={2}
            dot={{ r: 3, stroke: "#16a34a" }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
