import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"

export default function ReportsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Reports & Export</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Export summaries for audits or sharing with administrators. Replace with real export logic later.
        </p>

        <div className="mt-6 grid gap-4">
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium">Report Range</label>
              <div className="mt-1 grid grid-cols-2 gap-3">
                <input type="date" className="rounded-md border px-3 py-2 text-sm" />
                <input type="date" className="rounded-md border px-3 py-2 text-sm" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Class (optional)</label>
              <input className="mt-1 w-full rounded-md border px-3 py-2 text-sm" placeholder="e.g., 8-A" />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button className="bg-green-600 hover:bg-green-700" type="button">
              Export CSV
            </Button>
            <Button variant="outline" type="button">
              Export PDF
            </Button>
            <Button variant="secondary" type="button">
              Print
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            TODO: Generate data from your backend and export in the selected format.
          </p>
        </div>
      </section>
    </main>
  )
}
