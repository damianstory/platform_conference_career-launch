'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import BoothDetailHeader from '@/components/layout/BoothDetailHeader'
import SessionDetailHeader from '@/components/layout/SessionDetailHeader'
import { getBoothBySlug } from '@/data/sample-booths'

export default function ConditionalHeader() {
  const pathname = usePathname()
  const [boothData, setBoothData] = useState<{
    name: string
    slug: string
  } | null>(null)
  const [sessionData, setSessionData] = useState<{
    title: string
    slug: string
  } | null>(null)

  // Detect if we're on a booth detail page
  const isBoothPage = pathname?.startsWith('/booths/') && pathname !== '/booths'

  // Detect if we're on a session detail page
  const isSessionPage = pathname?.startsWith('/sessions/') && pathname !== '/sessions'

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

    if (isSessionPage) {
      // Extract slug from pathname (e.g., /sessions/dental-hygienist-career -> dental-hygienist-career)
      const slug = pathname.split('/').pop()

      if (slug) {
        // For sessions, we'll use the slug as a placeholder
        // The actual session title is fetched server-side in the page component
        setSessionData({
          title: '', // Title will be displayed in the page hero, not the header
          slug: slug,
        })
      }
    } else {
      setSessionData(null)
    }
  }, [pathname, isBoothPage, isSessionPage])

  // If we're on a booth page and have booth data, show BoothDetailHeader
  if (isBoothPage && boothData) {
    return <BoothDetailHeader boothName={boothData.name} />
  }

  // If we're on a session page and have session data, show SessionDetailHeader
  if (isSessionPage && sessionData) {
    return <SessionDetailHeader sessionTitle={sessionData.title} />
  }

  // Otherwise, show the regular Header
  return <Header />
}
