"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "./auth-context"

export function RoleGuard({
  role,
  children,
  fallback,
}: {
  role: "teacher" | "student"
  children: React.ReactNode
  fallback?: React.ReactNode
}) {
  const auth = useAuth()
  if (auth.role === role) return <>{children}</>
  if (fallback) return <>{fallback}</>

  return (
    <div className="mx-auto max-w-lg space-y-4 rounded-lg border p-6">
      <h2 className="text-xl font-semibold">Access restricted</h2>
      <p className="text-muted-foreground">You must be logged in as a {role} to view this page.</p>
      <div className="flex gap-2">
        <Button asChild>
          <Link href="/login">Go to Login</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}
