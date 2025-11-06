interface SpeakerSectionProps {
  name: string
  title: string
  company: string
}

export default function SpeakerSection({
  name,
  title,
  company,
}: SpeakerSectionProps) {
  // Extract company initials for avatar (first letter of each word, max 2)
  const getCompanyInitials = (companyName: string) => {
    const words = companyName.split(' ')
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase()
    }
    return (words[0][0] + words[1][0]).toUpperCase()
  }

  const initials = getCompanyInitials(company)

  return (
    <div className="bg-white rounded-xl border border-[#E5E9F1] p-6 mb-6 shadow-[0_4px_24px_rgba(34,34,76,0.08)]">
      {/* Header */}
      <h3 className="text-xs font-semibold uppercase tracking-wider text-navy/60 mb-4">
        Presenter
      </h3>

      {/* Content */}
      <div className="flex items-start gap-4">
        {/* Company Avatar */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-light-blue flex items-center justify-center">
            <span className="text-sm font-bold text-navy">{initials}</span>
          </div>
        </div>

        {/* Speaker Info */}
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-navy mb-1">{name}</h4>
          <p className="text-sm text-navy/80 mb-1">{title}</p>
          <p className="text-sm text-navy/60">{company}</p>
        </div>
      </div>
    </div>
  )
}
