import { notFound } from 'next/navigation'
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
