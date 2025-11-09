'use client'

import React from 'react'

export default function EngagementActivity() {
  return (
    <div className="relative w-full h-full rounded-xl shadow-md border border-blue-200 overflow-hidden transition-all duration-200 bg-gradient-to-br from-blue-50 to-blue-100">
      <iframe
        src="https://claude.site/public/artifacts/fc01fa58-a8ab-42d7-8e98-217e221deaba/embed"
        title="Claude Artifact"
        className="w-full h-full absolute inset-0"
        style={{ border: 0 }}
        allow="clipboard-write"
        allowFullScreen
      />
    </div>
  )
}
