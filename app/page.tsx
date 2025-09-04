import { SiteHeader } from "@/components/site-header"
import { FeatureCard } from "@/components/feature-card"
import { SummaryStat } from "@/components/attendance-summary"
import { AttendanceTrendChart } from "@/components/attendance-trend-chart"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Camera, QrCode, Pencil, BarChart3, Users, CheckCircle2, CloudUpload, FileSpreadsheet } from "lucide-react"

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              Start here: Login as Teacher (admin) or Student to continue.
            </p>
            <div className="flex gap-2">
              <a
                href="/login?role=teacher"
                className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
              >
                Teacher Login
              </a>
              <a
                href="/login?role=student"
                className="inline-flex items-center rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                Student Login
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h1 className="text-3xl font-semibold leading-tight text-balance">
              AutoAttendify — Automatic Attendance for Rural Schools
            </h1>
            <p className="mt-2 text-xs text-muted-foreground pl-3 border-l-2 border-green-600/80">
              Where Technology Meets Rural Classrooms.
            </p>
            <p className="mt-3 text-muted-foreground">
              Fast, reliable, and accessible attendance—designed for low-connectivity environments with three simple
              ways to mark presence: Face Scan, Punch (QR), or Manual Entry.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/scan">
                <Button className="bg-green-600 hover:bg-green-700">Start Face Scan</Button>
              </Link>
              <Link href="/punch">
                <Button variant="outline">Punch (QR)</Button>
              </Link>
              <Link href="/manual">
                <Button variant="outline">Manual Entry</Button>
              </Link>
            </div>
          </div>
          <Card className="w-full max-w-sm">
            <CardContent className="p-4">
              <div className="grid grid-cols-3 gap-3">
                <SummaryStat label="Today Present" value="91%" sublabel="across all classes" />
                <SummaryStat label="Students" value="342" sublabel="active" />
                <SummaryStat label="Teachers" value="18" sublabel="active" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <FeatureCard
            title="Face Scan"
            description="Open the camera and scan student faces. Plug in your face recognition logic here."
            href="/scan"
            icon={<Camera className="h-5 w-5" aria-hidden="true" />}
            accent="green"
          />
          <FeatureCard
            title="Punch (QR)"
            description="Show the student ID QR to punch in. Plug your QR scanner here."
            href="/punch"
            icon={<QrCode className="h-5 w-5" aria-hidden="true" />}
            accent="sky"
          />
          <FeatureCard
            title="Manual Entry"
            description="Fallback option to mark attendance by hand when offline or devices are unavailable."
            href="/manual"
            icon={<Pencil className="h-5 w-5" aria-hidden="true" />}
            accent="green"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <FeatureCard
            title="Overall Attendance"
            description="See attendance rates by day, class, or student."
            href="/attendance"
            icon={<BarChart3 className="h-5 w-5" aria-hidden="true" />}
            accent="sky"
          />
          <FeatureCard
            title="Manage Students"
            description="Add students, classes, and sections. Fit for multi-grade schools."
            href="/teacher/students"
            icon={<Users className="h-5 w-5" aria-hidden="true" />}
            accent="green"
          />
          <FeatureCard
            title="Reports & Export"
            description="Download attendance summaries for audits or sharing."
            href="/reports"
            icon={<FileSpreadsheet className="h-5 w-5" aria-hidden="true" />}
            accent="sky"
          />
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold">How It Works</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded bg-muted p-2">
                    <QrCode className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium">1) Choose method</p>
                    <p className="text-sm text-muted-foreground">
                      Face, Punch (QR), or Manual—whichever fits your setup today.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded bg-muted p-2">
                    <CloudUpload className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium">2) Sync when online</p>
                    <p className="text-sm text-muted-foreground">
                      Works offline; your data syncs automatically when a connection returns.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded bg-muted p-2">
                    <FileSpreadsheet className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium">3) Export reports</p>
                    <p className="text-sm text-muted-foreground">
                      One-click CSV/Excel exports for audits, sharing, and records.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-5">
              <h3 className="text-base font-semibold">Why AutoAttendify</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" aria-hidden="true" />
                  <span>Works reliably offline in low-connectivity areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" aria-hidden="true" />
                  <span>Simple CSV/Excel exports for quick sharing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" aria-hidden="true" />
                  <span>Flexible modes: Face, QR Punch, or Manual entry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" aria-hidden="true" />
                  <span>Lightweight and low-resource friendly</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <h3 className="text-base font-semibold">Weekly Snapshot</h3>
              <p className="text-sm text-muted-foreground">Sample data—swap with your live metrics.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold">This Week’s Attendance</h2>
          <p className="text-sm text-muted-foreground">Sample data for demo—replace with your real dataset.</p>
          <div className="mt-4 rounded-lg border p-4">
            <AttendanceTrendChart />
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
          <p className="text-sm text-muted-foreground">AutoAttendify • Built for rural reliability • v0.1</p>
          <div className="text-sm">
            <a className="text-sky-600 hover:underline" href="mailto:contact@example.com">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
