import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PromptsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-balance">AutoAttendify: Project Prompts & Roadmap</h1>
        <p className="text-muted-foreground mt-2 text-pretty">
          Centralized guidance derived from your ChatGPT prompts. Use this as a checklist during the hackathon.
        </p>
      </header>

      <section className="mb-6 rounded-md border bg-card p-4">
        <h2 className="text-lg font-medium">Quick Actions</h2>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Link className="rounded-md border px-3 py-2 hover:bg-accent" href="/login">
            Login (Teacher/Student)
          </Link>
          <Link className="rounded-md border px-3 py-2 hover:bg-accent" href="/punch">
            Punch (QR)
          </Link>
          <Link className="rounded-md border px-3 py-2 hover:bg-accent" href="/scan">
            Face Scan
          </Link>
          <Link className="rounded-md border px-3 py-2 hover:bg-accent" href="/teacher/upload">
            Upload Attendance (Teacher)
          </Link>
          <Link className="rounded-md border px-3 py-2 hover:bg-accent" href="/teacher/students">
            Manage Students (Teacher)
          </Link>
          <Link className="rounded-md border px-3 py-2 hover:bg-accent" href="/student/attendance">
            My Attendance (Student)
          </Link>
          <Link className="rounded-md border px-3 py-2 hover:bg-accent" href="/reports">
            Reports
          </Link>
          <Link className="rounded-md border px-3 py-2 hover:bg-accent" href="/attendance">
            Overall Attendance
          </Link>
        </div>
      </section>

      <Accordion type="multiple" className="w-full">
        <AccordionItem value="1">
          <AccordionTrigger>1) Multi-Factor Attendance Options</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc space-y-2 pl-5">
              <li>Combine face recognition and QR punch to reduce errors/fraud.</li>
              <li>Optionally require sequential steps (scan QR, then face verify).</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="2">
          <AccordionTrigger>2) Role-Based Login & Access Control</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc space-y-2 pl-5">
              <li>Teacher/Admin: add/remove students, bulk upload via CSV, edit records, download reports.</li>
              <li>Student: personal attendance summary and schedule only.</li>
              <li>Consider password reset and finer permissions (Admin vs Teacher).</li>
            </ul>
            <div className="mt-3">
              <Link className="text-primary underline" href="/login">
                Go to Login
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="3">
          <AccordionTrigger>3) Attendance Validation & Notifications</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc space-y-2 pl-5">
              <li>After QR/face scan: show “Attendance Recorded Successfully” or “Try Again.”</li>
              <li>Alerts: absent notifications via SMS/email.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="4">
          <AccordionTrigger>4) Dashboard & Analytics</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc space-y-2 pl-5">
              <li>Live counts for present/absent and recent trend.</li>
              <li>Charts: over-time lines, heatmaps, subject-wise comparisons.</li>
              <li>Filters: date, class, student, subject.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="5">
          <AccordionTrigger>5) Reports & Exports</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc space-y-2 pl-5">
              <li>PDF and CSV exports with date-range and filters.</li>
              <li>Monthly summaries and subject-wise percentages.</li>
            </ul>
            <div className="mt-3">
              <Link className="text-primary underline" href="/reports">
                Go to Reports
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="6">
          <AccordionTrigger>6) Offline Support</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc space-y-2 pl-5">
              <li>Mark attendance offline; sync when connectivity returns.</li>
              <li>Use local storage/caching for temporary scans.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="7">
          <AccordionTrigger>7) Detailed Audit Trail</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc space-y-2 pl-5">
              <li>Log who recorded attendance, when, and how (QR/Face/Manual).</li>
              <li>Use logs for transparency and debugging.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="8">
          <AccordionTrigger>8) Responsive & Accessible UI</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc space-y-2 pl-5">
              <li>Mobile-first, semantic HTML, keyboard navigable, screen-reader friendly.</li>
              <li>Maintain WCAG AA contrast and consider dark mode.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="9">
          <AccordionTrigger>9) Student Feedback Loop</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc space-y-2 pl-5">
              <li>Student dashboard shows attendance percentage and missed sessions.</li>
            </ul>
            <div className="mt-3">
              <Link className="text-primary underline" href="/student/attendance">
                My Attendance
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="10">
          <AccordionTrigger>10) Notifications & Reminders</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc space-y-2 pl-5">
              <li>SMS/email alerts to guardians for unexcused absences or low attendance.</li>
              <li>Push notifications (if wrapped as a mobile app).</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="11">
          <AccordionTrigger>11) Integration with Existing Systems</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc space-y-2 pl-5">
              <li>Sync with SIS, timetables, biometric devices, or other infrastructure.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="12">
          <AccordionTrigger>12) Configurable Settings</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc space-y-2 pl-5">
              <li>Thresholds (e.g., ≥75%), grace periods, holiday calendars/blackout dates.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="13">
          <AccordionTrigger>13) Class Scheduling & Multi-Class Support</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc space-y-2 pl-5">
              <li>Multiple classes/courses; assign students; take per-class attendance.</li>
            </ul>
            <div className="mt-3">
              <Link className="text-primary underline" href="/teacher/students">
                Manage Students
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="14">
          <AccordionTrigger>14) Security & Privacy</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc space-y-2 pl-5">
              <li>Secure passwords (hashing), HTTPS, proper sessions.</li>
              <li>Encrypt biometric/sensitive data; comply with applicable laws.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="extras">
          <AccordionTrigger>Example Feature Flow Enhancements</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc space-y-2 pl-5">
              <li>Real-Time Dashboard: present/absent stats and trendline.</li>
              <li>Early Warning Alerts for low attendance thresholds.</li>
              <li>Report Generation: PDF/CSV with filters and charts.</li>
              <li>Offline Mode: mark without internet, then sync.</li>
              <li>Multi-Class Management: per-class scanning and groups.</li>
              <li>Security Enhancements: encrypted storage and audit logs.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="priorities">
          <AccordionTrigger>What to Tackle First</AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Core functionality & security (role-based access, reliability, audit trail).</li>
              <li>User experience (clear confirmations, mobile responsiveness).</li>
              <li>Reporting & analytics (dashboards, charts, exports).</li>
              <li>Offline support for rural deployment.</li>
              <li>Integrations & scaling for classes/systems.</li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  )
}
