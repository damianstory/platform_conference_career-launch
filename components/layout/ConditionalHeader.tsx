'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import BoothDetailHeader from '@/components/layout/BoothDetailHeader'
import { getBoothBySlug } from '@/data/sample-booths'

export default function ConditionalHeader() {
  const pathname = usePathname()
  const [boothData, setBoothData] = useState<{
    name: string
    slug: string
  } | null>(null)

  // Detect if we're on a booth detail page
  const isBoothPage = pathname?.startsWith('/booths/') && pathname !== '/booths'

  useEffect(() => {
    if (isBoothPage) {
      // Extract slug from pathname (e.g., /booths/tech-vision -> tech-vision)
      const slug = pathname.split('/').pop()

      if (slug) {
        // Fetch booth data
        const booth = getBoothBySlug(slug)

        if (booth) {
          setBoothData({
            name: booth.name,
            slug: booth.slug,
          })
        }
      }
    } else {
      setBoothData(null)
    }
  }, [pathname, isBoothPage])

  // If we're on a booth page and have booth data, show BoothDetailHeader
  if (isBoothPage && boothData) {
    return <BoothDetailHeader boothName={boothData.name} boothSlug={boothData.slug} />
  }

  // Otherwise, show the regular Header
  return <Header />
}
