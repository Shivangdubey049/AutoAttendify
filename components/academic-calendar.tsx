"use client"

import React from "react"

type EventKind = "holiday" | "exam" | "note"

type AcademicEvent = {
  id: string
  date: string // YYYY-MM-DD
  title: string
  kind: EventKind
}

function formatYmd(d: Date) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const dd = String(d.getDate()).padStart(2, "0")
  return `${y}-${m}-${dd}`
}

function daysInMonth(year: number, monthIndex: number) {
  return new Date(year, monthIndex + 1, 0).getDate()
}

function firstDayIndex(year: number, monthIndex: number) {
  // 0 = Sunday, 1 = Monday, ...
  return new Date(year, monthIndex, 1).getDay()
}

const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export default function AcademicCalendar() {
  const [viewDate, setViewDate] = React.useState(() => new Date())
  const [events, setEvents] = React.useState<AcademicEvent[]>([])
  const [role, setRole] = React.useState<"teacher" | "student" | null>(null)

  const y = viewDate.getFullYear()
  const m = viewDate.getMonth()
  const todayYmd = formatYmd(new Date())

  // Load role from localStorage (Teacher can edit, Student view-only)
  React.useEffect(() => {
    try {
      const r = localStorage.getItem("role")
      if (r === "teacher" || r === "student") setRole(r)
    } catch {}
  }, [])

  // Load & persist events to localStorage for demo convenience
  React.useEffect(() => {
    try {
      const raw = localStorage.getItem("academic-events")
      if (raw) setEvents(JSON.parse(raw))
    } catch {}
  }, [])
  React.useEffect(() => {
    try {
      localStorage.setItem("academic-events", JSON.stringify(events))
    } catch {}
  }, [events])

  const dim = daysInMonth(y, m)
  const firstIdx = firstDayIndex(y, m)
  const totalCells = Math.ceil((firstIdx + dim) / 7) * 7

  const monthLabel = viewDate.toLocaleString(undefined, {
    month: "long",
    year: "numeric",
  })

  function gotoPrevMonth() {
    const d = new Date(y, m - 1, 1)
    setViewDate(d)
  }
  function gotoNextMonth() {
    const d = new Date(y, m + 1, 1)
    setViewDate(d)
  }
  function gotoToday() {
    setViewDate(new Date())
  }

  function addEvent(dateYmd: string, title: string, kind: EventKind) {
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`
    setEvents((prev) => [...prev, { id, date: dateYmd, title, kind }])
  }
  function removeEvent(id: string) {
    setEvents((prev) => prev.filter((e) => e.id !== id))
  }

  // Form state
  const [newDate, setNewDate] = React.useState(formatYmd(new Date()))
  const [newTitle, setNewTitle] = React.useState("")
  const [newKind, setNewKind] = React.useState<EventKind>("note")

  const canEdit = role === "teacher"

  function chipClasses(kind: EventKind) {
    switch (kind) {
      case "holiday":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200"
      case "exam":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
      default:
        return "bg-muted text-foreground/90 dark:bg-muted/50"
    }
  }

  return (
    <section className="mx-auto w-full max-w-5xl p-4 sm:p-6">
      <header className="mb-4 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-pretty">{monthLabel}</h1>
          <span className="text-muted-foreground text-sm">Academic Calendar</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={gotoPrevMonth}
            className="rounded-md border px-3 py-2 text-sm hover:bg-accent"
            aria-label="Previous month"
          >
            Prev
          </button>
          <button
            onClick={gotoToday}
            className="rounded-md border px-3 py-2 text-sm hover:bg-accent"
            aria-label="Go to today"
          >
            Today
          </button>
          <button
            onClick={gotoNextMonth}
            className="rounded-md border px-3 py-2 text-sm hover:bg-accent"
            aria-label="Next month"
          >
            Next
          </button>
        </div>
      </header>

      <div className="rounded-lg border bg-card">
        <div className="grid grid-cols-7 gap-px border-b bg-border/40">
          {weekdayLabels.map((w) => (
            <div key={w} className="bg-card px-2 py-2 text-center text-xs font-medium text-muted-foreground">
              {w}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-px">
          {Array.from({ length: totalCells }, (_, idx) => {
            const dayNum = idx - firstIdx + 1
            const inMonth = dayNum >= 1 && dayNum <= dim
            const dateObj = new Date(y, m, Math.max(1, Math.min(dim, dayNum)))
            const ymd = inMonth ? formatYmd(dateObj) : ""
            const dayEvents = inMonth ? events.filter((e) => e.date === ymd) : []
            const isToday = inMonth && ymd === todayYmd

            return (
              <div key={idx} className={`min-h-24 bg-background px-2 py-2 ${inMonth ? "" : "opacity-40"}`}>
                <div className="mb-1 flex items-center justify-between">
                  <div
                    className={`inline-flex h-7 w-7 items-center justify-center rounded ${isToday ? "bg-primary text-primary-foreground" : "text-foreground/80"}`}
                    aria-label={inMonth ? `Day ${dayNum}` : undefined}
                  >
                    {inMonth ? dayNum : ""}
                  </div>
                  {inMonth && canEdit ? (
                    <button
                      onClick={() => setNewDate(ymd)}
                      className="rounded px-2 py-1 text-xs text-muted-foreground hover:bg-accent"
                      aria-label={`Prepare to add event on ${ymd}`}
                    >
                      +
                    </button>
                  ) : null}
                </div>
                <div className="flex flex-col gap-1">
                  {dayEvents.map((ev) => (
                    <div key={ev.id} className={`truncate rounded px-2 py-1 text-xs ${chipClasses(ev.kind)}`}>
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate">{ev.title}</span>
                        {canEdit ? (
                          <button
                            onClick={() => removeEvent(ev.id)}
                            className="rounded px-1 text-[10px] text-foreground/70 hover:bg-accent"
                            aria-label={`Remove ${ev.title}`}
                            title="Remove"
                          >
                            ×
                          </button>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-6 rounded-lg border bg-card p-4">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-base font-semibold">Add Academic Event</h2>
          <span className="text-xs text-muted-foreground">
            {role === "teacher" ? "Teacher mode" : "View-only (Student)"}
          </span>
        </div>
        <form
          className="grid grid-cols-1 gap-3 sm:grid-cols-4"
          onSubmit={(e) => {
            e.preventDefault()
            if (role !== "teacher") return
            if (!newTitle.trim()) return
            addEvent(newDate, newTitle.trim(), newKind)
            setNewTitle("")
          }}
        >
          <label className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground">Date</span>
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="rounded-md border bg-background px-3 py-2 text-sm"
              disabled={role !== "teacher"}
              required
            />
          </label>

          <label className="flex flex-col gap-1 sm:col-span-2">
            <span className="text-xs text-muted-foreground">Title</span>
            <input
              type="text"
              placeholder="e.g., Midterm Exam, Independence Day (Holiday)"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="rounded-md border bg-background px-3 py-2 text-sm"
              disabled={role !== "teacher"}
              required
              minLength={2}
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground">Type</span>
            <select
              value={newKind}
              onChange={(e) => setNewKind(e.target.value as EventKind)}
              className="rounded-md border bg-background px-3 py-2 text-sm"
              disabled={role !== "teacher"}
            >
              <option value="note">Note</option>
              <option value="exam">Exam</option>
              <option value="holiday">Holiday</option>
            </select>
          </label>

          <div className="sm:col-span-4">
            <button
              type="submit"
              disabled={role !== "teacher"}
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              aria-disabled={role !== "teacher"}
            >
              Add Event
            </button>
          </div>
        </form>
        {role !== "teacher" ? (
          <p className="mt-2 text-xs text-muted-foreground">Only teachers can add or remove events.</p>
        ) : null}
      </div>
    </section>
  )
}
