"use client"

import Link from "next/link"
import { RoleGuard } from "@/components/role-guard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/components/auth-context"

export default function TeacherDashboardPage() {
  const { signOut } = useAuth()
  return (
    <RoleGuard role="teacher">
      <main className="mx-auto max-w-4xl space-y-6 p-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-pretty text-2xl font-semibold">Teacher Dashboard</h1>
            <p className="text-muted-foreground">Upload attendance, manage students, and view reports.</p>
          </div>
          <Button variant="outline" onClick={signOut}>
            Sign out
          </Button>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Upload Attendance</CardTitle>
              <CardDescription>CSV or from scanner</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/teacher/upload">Open</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Manage Students</CardTitle>
              <CardDescription>Add, edit, or remove</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/teacher/students">Open</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Punch (QR)</CardTitle>
              <CardDescription>Scan ID QR to mark</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full" variant="secondary">
                <Link href="/punch">Open</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Add Teacher Profile entry */}
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Your account details</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full bg-transparent" variant="outline">
                <Link href="/teacher/profile">Open</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </RoleGuard>
  )
}
