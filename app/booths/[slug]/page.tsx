import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { getBoothBySlug } from '@/data/sample-booths'
import BoothLayout from '@/components/booths/BoothLayout'

interface BoothPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BoothPage({ params }: BoothPageProps) {
  const { slug } = await params
  const booth = getBoothBySlug(slug)

  if (!booth) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background-light">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-neutral-2">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-compact text-neutral-5" aria-label="Breadcrumb">
            <Link
              href="/"
              className="hover:text-primary-blue transition-colors focus-visible:outline-2 focus-visible:outline-primary-blue focus-visible:outline-offset-2 rounded"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="/booths"
              className="hover:text-primary-blue transition-colors focus-visible:outline-2 focus-visible:outline-primary-blue focus-visible:outline-offset-2 rounded"
            >
              Expo Hall
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-navy font-semibold truncate" title={booth.name}>
              {booth.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Booth Content */}
      <BoothLayout booth={booth} />
    </div>
  )
}

// Generate static params for all booths at build time
export async function generateStaticParams() {
  const { allBooths } = await import('@/data/sample-booths')

  return allBooths.map((booth) => ({
    slug: booth.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BoothPageProps) {
  const { slug } = await params
  const booth = getBoothBySlug(slug)

  if (!booth) {
    return {
      title: 'Booth Not Found',
    }
  }

  return {
    title: `${booth.name} - Career Launch Booths`,
    description: booth.tagline,
  }
}
