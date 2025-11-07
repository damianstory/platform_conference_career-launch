import { notFound } from 'next/navigation'
import { getBoothBySlug } from '@/data/sample-booths'
import PlatinumBooth from '@/components/booths/PlatinumBooth'
import StandardBooth from '@/components/booths/StandardBooth'

interface BoothPageProps {
  params: {
    slug: string
  }
}

export default function BoothPage({ params }: BoothPageProps) {
  const booth = getBoothBySlug(params.slug)

  if (!booth) {
    notFound()
  }

  // Render appropriate booth template based on tier
  if (booth.tier === 'platinum') {
    return <PlatinumBooth booth={booth} />
  } else {
    return <StandardBooth booth={booth} />
  }
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
  const booth = getBoothBySlug(params.slug)

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
