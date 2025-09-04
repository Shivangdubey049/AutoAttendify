"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { RoleGuard } from "@/components/role-guard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/components/auth-context"
import { useToast } from "@/hooks/use-toast"

export default function TeacherProfilePage() {
  return (
    <RoleGuard role="teacher">
      <main className="mx-auto max-w-xl p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-pretty">Teacher Profile</h1>
          <p className="text-muted-foreground">Manage your profile details for AutoAttendify.</p>
        </header>
        <TeacherProfileForm />
        <div className="mt-6">
          <Button asChild variant="secondary">
            <Link href="/teacher">Back to Teacher Dashboard</Link>
          </Button>
        </div>
      </main>
    </RoleGuard>
  )
}

function TeacherProfileForm() {
  const { email: authEmail } = useAuth()
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [email, setEmail] = useState(authEmail || "")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem("profile_teacher") : null
      if (raw) {
        const p = JSON.parse(raw)
        setName(p.name ?? "")
        setEmail(p.email ?? authEmail ?? "")
        setPhone(p.phone ?? "")
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function onSave() {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("profile_teacher", JSON.stringify({ name, email, phone }))
      }
      toast({ title: "Profile saved", description: "Your teacher profile has been updated." })
    } catch {
      toast({ title: "Save failed", description: "Could not save to local storage.", variant: "destructive" })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Details</CardTitle>
        <CardDescription>AutoAttendify • Role: Teacher</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="t-name">Full Name</Label>
          <Input id="t-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Priya Sharma" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="t-email">Email</Label>
          <Input
            id="t-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@school.edu"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="t-phone">Phone</Label>
          <Input id="t-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 9xxxx xxxxx" />
        </div>
        <div className="flex gap-3">
          <Button onClick={onSave}>Save Changes</Button>
          <Button asChild variant="outline">
            <Link href="/teacher/students">Manage Students</Link>
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Note: For hackathon demo, data is saved in your browser. Replace with backend API later.
        </p>
      </CardContent>
    </Card>
  )
}
