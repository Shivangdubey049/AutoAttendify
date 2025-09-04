"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from "@/components/auth-context"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { User, GraduationCap } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const { signInWithPassword, resetPasswordToDOB } = useAuth()
  const router = useRouter()
  const search = useSearchParams()
  const [tab, setTab] = useState<"teacher" | "student">("teacher")
  const { toast } = useToast()
  const next = search.get("next") || (tab === "teacher" ? "/teacher" : "/student")

  useEffect(() => {
    const roleParam = search.get("role")
    if (roleParam === "student" || roleParam === "teacher") {
      setTab(roleParam)
    }
  }, [search])

  function onSubmit(role: "teacher" | "student", form: HTMLFormElement) {
    const fd = new FormData(form)
    const id = String(fd.get("id") || "").trim()
    const password = String(fd.get("password") || "").trim()
    const res = signInWithPassword({ role, id, password })
    if (res.ok) {
      router.push(search.get("next") || (role === "teacher" ? "/teacher" : "/student"))
    } else {
      toast({ title: "Login failed", description: res.error ?? "Please check your credentials" })
    }
  }

  function onReset(role: "teacher" | "student", form: HTMLFormElement) {
    const fd = new FormData(form)
    const id = String(fd.get("id") || "").trim()
    const dob = String(fd.get("dob") || "").trim()
    const res = resetPasswordToDOB({ role, id, dob })
    if (res.ok) {
      toast({ title: "Password reset", description: "Password set to DOB (DDMMYYYY)" })
    } else {
      toast({ title: "Reset failed", description: res.error ?? "Try again" })
    }
  }

  function switchRole(r: "teacher" | "student") {
    setTab(r)
    const nextParam = search.get("next")
    const q = new URLSearchParams()
    q.set("role", r)
    if (nextParam) q.set("next", nextParam)
    router.replace(`/login?${q.toString()}`, { scroll: false })
  }

  return (
    <main className="mx-auto max-w-xl p-6">
      <h1 className="mb-4 text-pretty text-2xl font-semibold">Login</h1>
      <p className="mb-6 text-muted-foreground">
        Teachers use Enrollment Number. Students use Roll Number. Default password is DOB in DDMMYYYY (e.g., 01012006).
      </p>

      <Tabs value={tab} onValueChange={(v) => switchRole(v as "teacher" | "student")} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="teacher" className="gap-2">
            <GraduationCap className="h-4 w-4" /> Teacher
          </TabsTrigger>
          <TabsTrigger value="student" className="gap-2">
            <User className="h-4 w-4" /> Student
          </TabsTrigger>
        </TabsList>

        <TabsContent value="teacher">
          <Card>
            <CardHeader>
              <CardTitle>Teacher Sign In</CardTitle>
              <CardDescription>Enter Enrollment Number and password</CardDescription>
            </CardHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                onSubmit("teacher", e.currentTarget as HTMLFormElement)
              }}
            >
              <CardContent className="space-y-3">
                <Input type="text" name="id" placeholder="Enrollment Number" required />
                <Input type="password" name="password" placeholder="Password (DOB e.g., 01012006)" required />
              </CardContent>
              <CardFooter className="flex w-full items-center justify-between">
                <Button type="submit">Sign in as Teacher</Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button type="button" variant="link" className="px-0">
                      Forgot password?
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Reset Teacher Password</DialogTitle>
                      <DialogDescription>Set password to DOB (DDMMYYYY)</DialogDescription>
                    </DialogHeader>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        onReset("teacher", e.currentTarget as HTMLFormElement)
                      }}
                      className="space-y-3"
                    >
                      <Input type="text" name="id" placeholder="Enrollment Number" required />
                      <Input type="text" name="dob" placeholder="DOB (DDMMYYYY)" required />
                      <DialogFooter>
                        <Button type="submit">Reset Password</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="student">
          <Card>
            <CardHeader>
              <CardTitle>Student Sign In</CardTitle>
              <CardDescription>Enter Roll Number and password</CardDescription>
            </CardHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                onSubmit("student", e.currentTarget as HTMLFormElement)
              }}
            >
              <CardContent className="space-y-3">
                <Input type="text" name="id" placeholder="Roll Number" required />
                <Input type="password" name="password" placeholder="Password (DOB e.g., 01012006)" required />
              </CardContent>
              <CardFooter className="flex w-full items-center justify-between">
                <Button type="submit">Sign in as Student</Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button type="button" variant="link" className="px-0">
                      Forgot password?
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Reset Student Password</DialogTitle>
                      <DialogDescription>Set password to DOB (DDMMYYYY)</DialogDescription>
                    </DialogHeader>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        onReset("student", e.currentTarget as HTMLFormElement)
                      }}
                      className="space-y-3"
                    >
                      <Input type="text" name="id" placeholder="Roll Number" required />
                      <Input type="text" name="dob" placeholder="DOB (DDMMYYYY)" required />
                      <DialogFooter>
                        <Button type="submit">Reset Password</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
