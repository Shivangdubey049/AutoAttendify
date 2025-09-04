"use client"

import { RoleGuard } from "@/components/role-guard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function TeacherUploadAttendancePage() {
  return (
    <RoleGuard role="teacher">
      <main className="mx-auto max-w-2xl p-6">
        <Card>
          <CardHeader>
            <CardTitle>Upload Attendance</CardTitle>
            <CardDescription>Upload a CSV or connect scanner output</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">CSV File</label>
              <Input type="file" accept=".csv" />
              <p className="text-xs text-muted-foreground">Columns: date, class, student_id, status.</p>
            </div>
            <div className="flex items-center gap-2">
              <Button>Upload</Button>
              <Button variant="secondary">Connect Scanner</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </RoleGuard>
  )
}
