import Image from 'next/image'

interface SpeakerSectionProps {
  name: string
  title: string
  company: string
  logo?: string | null
}

export default function SpeakerSection({
  name,
  title,
  company,
  logo,
}: SpeakerSectionProps) {
  // Extract company initials for fallback (first letter of each word, max 2)
  const getCompanyInitials = (companyName: string) => {
    if (!companyName) return 'OR'
    const words = companyName.split(' ')
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase()
    }
    return (words[0][0] + words[1][0]).toUpperCase()
  }

  const initials = getCompanyInitials(company || name)

  return (
    <div className="bg-white rounded-xl border border-[#E5E9F1] p-6 mb-6 shadow-[0_4px_24px_rgba(34,34,76,0.08)]">
      {/* Header */}
      <h3 className="text-xs font-semibold uppercase tracking-wider text-navy/60 mb-4">
        Organization
      </h3>

      {/* Content */}
      <div className="flex items-center gap-4">
        {/* Organization Logo */}
        <div className="flex-shrink-0">
          {logo ? (
            <div className="w-20 h-20 bg-white rounded-lg border border-primary-blue/20 shadow-sm flex items-center justify-center overflow-hidden p-1">
              <Image
                src={logo}
                alt={`${name} logo`}
                width={80}
                height={80}
                className="object-contain w-full h-full"
                unoptimized
              />
            </div>
          ) : (
            <div className="w-20 h-20 rounded-lg bg-light-blue flex items-center justify-center border border-primary-blue/20">
              <span className="text-lg font-bold text-navy">{initials}</span>
            </div>
          )}
        </div>

        {/* Organization Info */}
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-navy mb-1">{name}</h4>
          {title && <p className="text-sm text-navy/80 mb-1">{title}</p>}
          {company && <p className="text-sm text-navy/60">{company}</p>}
        </div>
      </div>
    </div>
  )
}
