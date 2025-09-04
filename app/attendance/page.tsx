import { SiteHeader } from "@/components/site-header"
import { SummaryStat } from "@/components/attendance-summary"
import { AttendanceTrendChart } from "@/components/attendance-trend-chart"

const rows = [
  { id: "S-1001", name: "Asha Kumar", class: "8-A", present: "22/24", rate: "92%" },
  { id: "S-1002", name: "Rahul Singh", class: "8-A", present: "21/24", rate: "88%" },
  { id: "S-1003", name: "Meera Devi", class: "7-B", present: "24/24", rate: "100%" },
]

export default function OverallAttendancePage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-2xl font-semibold">Overall Attendance</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Filter by date, class, or section and view summaries. Replace demo data with live data later.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          <SummaryStat label="Attendance Today" value="91%" sublabel="all classes" />
          <SummaryStat label="This Week Avg" value="90%" sublabel="Mon—Sat" />
          <SummaryStat label="This Month Avg" value="88%" sublabel="to date" />
        </div>

        <div className="mt-8 rounded-lg border p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-end">
            <div className="flex-1">
              <label className="text-sm font-medium">Class</label>
              <input className="mt-1 w-full rounded-md border px-3 py-2 text-sm" placeholder="e.g., 8-A" />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium">From</label>
              <input type="date" className="mt-1 w-full rounded-md border px-3 py-2 text-sm" />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium">To</label>
              <input type="date" className="mt-1 w-full rounded-md border px-3 py-2 text-sm" />
            </div>
            <button className="mt-2 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 md:mt-0">
              Apply
            </button>
          </div>

          <div className="mt-6">
            <AttendanceTrendChart />
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr className="text-left">
                <th className="px-3 py-2 font-medium">Student ID</th>
                <th className="px-3 py-2 font-medium">Name</th>
                <th className="px-3 py-2 font-medium">Class</th>
                <th className="px-3 py-2 font-medium">Present</th>
                <th className="px-3 py-2 font-medium">Rate</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-t">
                  <td className="px-3 py-2">{r.id}</td>
                  <td className="px-3 py-2">{r.name}</td>
                  <td className="px-3 py-2">{r.class}</td>
                  <td className="px-3 py-2">{r.present}</td>
                  <td className="px-3 py-2">{r.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
