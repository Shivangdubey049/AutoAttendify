"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { RoleGuard } from "@/components/role-guard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth-context"

export default function StudentProfilePage() {
  return (
    <RoleGuard role="student">
      <main className="mx-auto max-w-xl p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-pretty">Student Profile</h1>
          <p className="text-muted-foreground">View your profile and enrollment details.</p>
        </header>
        <StudentProfileView />
        <div className="mt-6">
          <Button asChild variant="secondary">
            <Link href="/student">Back to Student Dashboard</Link>
          </Button>
        </div>
      </main>
    </RoleGuard>
  )
}

function StudentProfileView() {
  const { email } = useAuth()
  const [name, setName] = useState<string>("")
  const [roll, setRoll] = useState<string>("")
  const [className, setClassName] = useState<string>("")
  const [subjects, setSubjects] = useState<string[]>([])

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem("profile_student") : null
      if (raw) {
        const p = JSON.parse(raw)
        setName(p.name ?? "")
        setRoll(p.roll ?? "")
        setClassName(p.className ?? "")
        setSubjects(Array.isArray(p.subjects) ? p.subjects : [])
      }
    } catch {}
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Details</CardTitle>
        <CardDescription>AutoAttendify • Role: Student</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-1">
          <span className="text-sm text-muted-foreground">Full Name</span>
          <span className="text-base">{name || "—"}</span>
        </div>
        <div className="grid gap-1">
          <span className="text-sm text-muted-foreground">Email</span>
          <span className="text-base">{email || "—"}</span>
        </div>
        <div className="grid gap-1">
          <span className="text-sm text-muted-foreground">Roll No.</span>
          <span className="text-base">{roll || "—"}</span>
        </div>
        <div className="grid gap-1">
          <span className="text-sm text-muted-foreground">Class / Section</span>
          <span className="text-base">{className || "—"}</span>
        </div>
        <div className="grid gap-1">
          <span className="text-sm text-muted-foreground">Subjects</span>
          <span className="text-base">{subjects.length ? subjects.join(", ") : "—"}</span>
        </div>
        <p className="text-xs text-muted-foreground">
          These values are read from your browser for demo only. Teachers update official records.
        </p>
      </CardContent>
    </Card>
  )
}
