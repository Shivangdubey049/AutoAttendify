import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"

export default function ManualEntryPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-2xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Manual Entry</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Use this fallback when devices are unavailable or offline. Submit entries and sync later.
        </p>

        <form className="mt-6 grid gap-4">
          <div>
            <label className="text-sm font-medium">Class / Section</label>
            <input className="mt-1 w-full rounded-md border px-3 py-2 text-sm" placeholder="e.g., Grade 8 - A" />
          </div>
          <div>
            <label className="text-sm font-medium">Student ID</label>
            <input className="mt-1 w-full rounded-md border px-3 py-2 text-sm" placeholder="Enter student ID" />
          </div>
          <div>
            <label className="text-sm font-medium">Status</label>
            <select className="mt-1 w-full rounded-md border px-3 py-2 text-sm">
              <option>Present</option>
              <option>Absent</option>
              <option>Late</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <Button className="bg-green-600 hover:bg-green-700" type="button">
              Save Entry
            </Button>
            <Button variant="outline" type="button">
              Clear
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            TODO: Save to local storage for offline, then sync to server when online.
          </p>
        </form>
      </section>
    </main>
  )
}
