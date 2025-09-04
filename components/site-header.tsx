"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth-context"

const routes = [
  { href: "/", label: "Home" },
  { href: "/attendance", label: "Overall Attendance" },
  { href: "/scan", label: "Face Scan" },
  { href: "/punch", label: "Punch (QR)" },
  { href: "/manual", label: "Manual Entry" },
  { href: "/calendar", label: "Academic Calendar" },
  { href: "/reports", label: "Reports" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { role, signOut } = useAuth()

  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/images/autoattendify-logo.png"
            alt="AutoAttendify logo"
            className="h-8 w-8 rounded-md"
            width={32}
            height={32}
          />
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-foreground">AutoAttendify</span>
            <span className="text-xs italic text-muted-foreground/80">Where Technology Meets Rural Classrooms.</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {routes.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium",
                pathname === r.href
                  ? "bg-green-50 text-green-700"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted",
              )}
            >
              {r.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {role === null && (
            <>
              <Button asChild>
                <Link href="/login?role=teacher">Teacher Login</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/login?role=student">Student Login</Link>
              </Button>
            </>
          )}
          {role === "teacher" && (
            <>
              <Button asChild variant="secondary">
                <Link href="/teacher">Teacher Dashboard</Link>
              </Button>
              <Button variant="outline" onClick={signOut}>
                Sign out
              </Button>
            </>
          )}
          {role === "student" && (
            <>
              <Button asChild variant="secondary">
                <Link href="/student">Student Dashboard</Link>
              </Button>
              <Button variant="outline" onClick={signOut}>
                Sign out
              </Button>
            </>
          )}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="md:hidden bg-transparent"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {open && (
        <div id="mobile-nav" className="md:hidden border-t">
          <nav className="mx-auto flex max-w-6xl flex-col px-2 py-2">
            {routes.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium",
                  pathname === r.href
                    ? "bg-green-50 text-green-700"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted",
                )}
                onClick={() => setOpen(false)}
              >
                {r.label}
              </Link>
            ))}
            {role === null && (
              <>
                <Link
                  href="/login?role=teacher"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  Teacher Login
                </Link>
                <Link
                  href="/login?role=student"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  Student Login
                </Link>
              </>
            )}
            {role === "teacher" && (
              <>
                <Link
                  href="/teacher"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  Teacher Dashboard
                </Link>
                <button
                  className="text-left rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  onClick={() => {
                    signOut()
                    setOpen(false)
                  }}
                >
                  Sign out
                </button>
              </>
            )}
            {role === "student" && (
              <>
                <Link
                  href="/student"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  Student Dashboard
                </Link>
                <button
                  className="text-left rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  onClick={() => {
                    signOut()
                    setOpen(false)
                  }}
                >
                  Sign out
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
