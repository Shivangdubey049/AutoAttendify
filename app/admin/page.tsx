import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"

export default function AdminPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Manage Students & Classes</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Add or edit students, classes, and sections. Hook this up to your database later.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h2 className="text-lg font-medium">Add Student</h2>
            <div className="mt-3 grid gap-3">
              <input className="w-full rounded-md border px-3 py-2 text-sm" placeholder="Student Name" />
              <input className="w-full rounded-md border px-3 py-2 text-sm" placeholder="Student ID" />
              <input className="w-full rounded-md border px-3 py-2 text-sm" placeholder="Class / Section" />
              <Button className="bg-green-600 hover:bg-green-700" type="button">
                Save Student
              </Button>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h2 className="text-lg font-medium">Add Class</h2>
            <div className="mt-3 grid gap-3">
              <input className="w-full rounded-md border px-3 py-2 text-sm" placeholder="Class Name (e.g., Grade 8)" />
              <input className="w-full rounded-md border px-3 py-2 text-sm" placeholder="Section (e.g., A)" />
              <Button variant="outline" type="button">
                Save Class
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
