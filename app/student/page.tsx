"use client"

import Link from "next/link"
import { RoleGuard } from "@/components/role-guard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/components/auth-context"

export default function StudentDashboardPage() {
  const { signOut } = useAuth()
  return (
    <RoleGuard role="student">
      <main className="mx-auto max-w-3xl space-y-6 p-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-pretty text-2xl font-semibold">Student Dashboard</h1>
            <p className="text-muted-foreground">View your classes and track your attendance.</p>
          </div>
          <Button variant="outline" onClick={signOut}>
            Sign out
          </Button>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>My Attendance</CardTitle>
              <CardDescription>Overview and absences</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/student/attendance">View</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Classes</CardTitle>
              <CardDescription>Subjects and schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full" variant="secondary">
                <Link href="/student/attendance">Open</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Your account details</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full bg-transparent" variant="outline">
                <Link href="/student/profile">Open</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </RoleGuard>
  )
}
