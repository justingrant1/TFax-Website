import { AlertTriangle, Phone, Globe } from "lucide-react"

interface DialingFormatSectionProps {
  countryName: string
  dialPrefix: string
  faxFormat: string
  hasSpecialFormat: boolean
  requiresCountryCode: boolean
  businessLanguage: string
  timezone: string
  continent: string
}

export function DialingFormatSection({
  countryName,
  dialPrefix,
  faxFormat,
  hasSpecialFormat,
  requiresCountryCode,
  businessLanguage,
  timezone,
  continent,
}: DialingFormatSectionProps) {
  const isNonEnglish = businessLanguage !== "English"
  const isDistantTimezone = continent === "Asia" || continent === "Oceania"

  return (
    <div className="space-y-4">
      {/* Dialing format card */}
      <div className="rounded-lg border bg-muted/30 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Phone className="h-5 w-5 text-orange-500" />
          <h3 className="font-bold">Fax Number Format for {countryName}</h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Country Code</p>
            <p className="text-2xl font-bold text-orange-600">{dialPrefix}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Number Format</p>
            <p className="font-mono text-lg font-semibold">{faxFormat}</p>
          </div>
        </div>
        {requiresCountryCode && (
          <p className="mt-3 text-sm text-muted-foreground">
            Always dial the full number including <strong>{dialPrefix}</strong> when sending from outside {countryName}.
            TigerFax automatically prepends the country code when you select {countryName} as your destination.
          </p>
        )}
      </div>

      {/* Special format warning */}
      {hasSpecialFormat && (
        <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 p-4">
          <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-700 dark:text-amber-300 text-sm">Special Dialing Format</p>
            <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
              {countryName} uses a different fax number format than the US. Make sure you enter the number exactly as
              shown above — including the country code {dialPrefix} — or your fax may not be delivered.
            </p>
          </div>
        </div>
      )}

      {/* Timezone note */}
      {isDistantTimezone && (
        <div className="flex items-start gap-3 rounded-lg border p-4 text-sm text-muted-foreground">
          <Globe className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground mb-1">Timezone: {timezone}</p>
            <p>
              {countryName} is in a significantly different timezone. For time-sensitive faxes, consider sending during
              {countryName}&apos;s business hours to ensure prompt receipt and response.
            </p>
          </div>
        </div>
      )}

      {/* Business language note */}
      {isNonEnglish && (
        <div className="flex items-start gap-3 rounded-lg border p-4 text-sm text-muted-foreground">
          <Globe className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
          <p>
            The primary business language in {countryName} is <strong>{businessLanguage}</strong>. If you&apos;re faxing
            to a business contact, consider including a cover page with a brief note in {businessLanguage} if possible.
          </p>
        </div>
      )}
    </div>
  )
}
