"use client"

import { useAuth } from "@/components/auth-context"

export default function GreetingBar() {
  const { role, id } = useAuth()

  if (!role) return null

  const roleLabel = role === "teacher" ? "Teacher" : "Student"
  const display = id || roleLabel

  return (
    <div className="w-full bg-primary/10 border-b border-border text-foreground">
      <div className="mx-auto max-w-5xl px-4 py-2 text-sm md:text-base">
        <span className="font-medium">Welcome, {display}</span>{" "}
        <span className="text-muted-foreground">({roleLabel})</span>
      </div>
    </div>
  )
}
