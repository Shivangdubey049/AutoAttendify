"use client"

import type React from "react"
import { useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth-context"
import GreetingBar from "@/components/greeting-bar"

// Simple public routes allowlist
const PUBLIC_PREFIXES = ["/", "/login"]

function isPublicPath(pathname: string | null) {
  if (!pathname) return true
  return PUBLIC_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + "/"))
}

export default function AppGuard({ children }: { children: React.ReactNode }) {
  const { role } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const isPublic = isPublicPath(pathname)

  useEffect(() => {
    // Auto-redirect unauthenticated users away from protected routes to /login
    if (!isPublic && !role) {
      // Preserve next path so login can return users to where they were heading
      const next = encodeURIComponent(pathname || "/")
      router.replace(`/login?next=${next}`)
    }
  }, [isPublic, role, pathname, router])

  if (isPublic || role) {
    const showGreeting = !!role && !pathname?.startsWith("/login")
    return (
      <>
        {showGreeting && <GreetingBar />}
        {children}
      </>
    )
  }

  // Fallback UI in case navigation isn't instantaneous
  return (
    <div className="mx-auto max-w-lg space-y-4 rounded-lg border p-6">
      <h2 className="text-xl font-semibold">Login required</h2>
      <p className="text-muted-foreground">
        Please login to access this page. Only the homepage is available without login.
      </p>
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
