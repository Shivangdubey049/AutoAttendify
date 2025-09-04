import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SummaryStat({
  label,
  value,
  sublabel,
}: {
  label: string
  value: string
  sublabel?: string
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm text-muted-foreground">{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold">{value}</div>
        {sublabel ? <p className="text-xs text-muted-foreground mt-1">{sublabel}</p> : null}
      </CardContent>
    </Card>
  )
}
