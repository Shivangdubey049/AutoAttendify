import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import type { ReactNode } from "react"

export function FeatureCard({
  title,
  description,
  href,
  icon,
  accent = "green",
}: {
  title: string
  description: string
  href: string
  icon: ReactNode
  accent?: "green" | "sky"
}) {
  const accentRing =
    accent === "green" ? "ring-green-600 bg-green-600/10 text-green-700" : "ring-sky-600 bg-sky-600/10 text-sky-700"

  return (
    <Link
      href={href}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600 rounded-lg"
    >
      <Card className="h-full transition-colors hover:bg-muted/50">
        <CardHeader className="space-y-3">
          <div className={`inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ${accentRing}`}>
            {icon}
          </div>
          <CardTitle className="text-balance">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-pretty">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
