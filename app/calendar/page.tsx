import AcademicCalendar from "@/components/academic-calendar"

export const metadata = {
  title: "Academic Calendar | AutoAttendify",
}

export default function CalendarPage() {
  return (
    <main className="mx-auto w-full max-w-6xl p-4 sm:p-6">
      <AcademicCalendar />
    </main>
  )
}
