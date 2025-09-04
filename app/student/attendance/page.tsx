"use client"

import { RoleGuard } from "@/components/role-guard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockRows = [
  { date: "2025-08-01", subject: "Math", status: "Present" },
  { date: "2025-08-02", subject: "Science", status: "Absent" },
  { date: "2025-08-03", subject: "English", status: "Present" },
]

export default function StudentAttendancePage() {
  const total = mockRows.length
  const present = mockRows.filter((r) => r.status === "Present").length
  const absent = total - present
  const percent = Math.round((present / total) * 100)

  return (
    <RoleGuard role="student">
      <main className="mx-auto max-w-3xl space-y-6 p-6">
        <Card>
          <CardHeader>
            <CardTitle>Overall Attendance</CardTitle>
            <CardDescription>Your attendance summary so far</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            <div className="rounded-md border p-3">
              <div className="text-sm text-muted-foreground">Total Classes</div>
              <div className="text-2xl font-semibold">{total}</div>
            </div>
            <div className="rounded-md border p-3">
              <div className="text-sm text-muted-foreground">Present</div>
              <div className="text-2xl font-semibold">{present}</div>
            </div>
            <div className="rounded-md border p-3">
              <div className="text-sm text-muted-foreground">Absent</div>
              <div className="text-2xl font-semibold">{absent}</div>
            </div>
            <div className="md:col-span-3 rounded-md border p-3">
              <div className="text-sm text-muted-foreground">Attendance %</div>
              <div className="text-xl font-semibold">{percent}%</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>By Session</CardTitle>
            <CardDescription>Recent attendance records</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockRows.map((r, i) => (
                  <TableRow key={i}>
                    <TableCell>{r.date}</TableCell>
                    <TableCell>{r.subject}</TableCell>
                    <TableCell className={r.status === "Absent" ? "text-red-600" : "text-green-700"}>
                      {r.status}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </RoleGuard>
  )
}
