import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"

export default function PunchPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Punch (QR) Attendance</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Show a student’s ID QR to record attendance. Connect your QR scanner logic here (camera stream + decode).
        </p>

        <div className="mt-6 rounded-lg border p-4">
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium">Last QR Data</label>
              <div className="mt-1 rounded-md border bg-muted px-3 py-2 text-sm">—</div>
            </div>
            <div>
              <label className="text-sm font-medium">Detected Student</label>
              <div className="mt-1 rounded-md border bg-muted px-3 py-2 text-sm">—</div>
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium">Camera Preview</label>
            <div className="mt-1 aspect-video w-full rounded-md border bg-muted/50" />
          </div>

          <div className="mt-4 flex items-center gap-3">
            <Button className="bg-green-600 hover:bg-green-700">Start Camera</Button>
            <Button variant="outline">Stop</Button>
            <Button variant="secondary">Mark Present</Button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            TODO: Access camera, decode QR, map to student, and mark attendance.
          </p>
        </div>
      </section>
    </main>
  )
}
