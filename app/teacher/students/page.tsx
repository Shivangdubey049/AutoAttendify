"use client"

import { RoleGuard } from "@/components/role-guard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockStudents = [
  { id: "STU001", name: "Asha Devi", class: "10-A" },
  { id: "STU002", name: "Ravi Kumar", class: "10-A" },
]

export default function TeacherStudentsPage() {
  return (
    <RoleGuard role="teacher">
      <main className="mx-auto max-w-4xl space-y-6 p-6">
        <Card>
          <CardHeader>
            <CardTitle>Add Student</CardTitle>
            <CardDescription>Register a new student</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-4">
            <Input placeholder="Student ID" className="md:col-span-1" />
            <Input placeholder="Full Name" className="md:col-span-2" />
            <Input placeholder="Class/Section" className="md:col-span-1" />
            <div className="md:col-span-4 flex justify-end">
              <Button>Add Student</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Students</CardTitle>
            <CardDescription>Manage existing records</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockStudents.map((s) => (
                  <TableRow key={s.id}>
                    <TableCell>{s.id}</TableCell>
                    <TableCell>{s.name}</TableCell>
                    <TableCell>{s.class}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="secondary" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </RoleGuard>
  )
}
