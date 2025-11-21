import React from 'react'

interface SnapchatOutlineProps {
  className?: string
}

export const SnapchatOutline: React.FC<SnapchatOutlineProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Snapchat ghost outline */}
      <path d="M12 2C8.5 2 6 4.5 6 8c0 1.5-.5 2.5-1 3.5-.3.6-.5 1-.5 1.5 0 .8.5 1.5 1.5 1.8.3.1.5.3.5.6 0 .5-.3 1-.8 1.3-.5.3-1.2.5-1.7.7-.5.2-.8.5-.8 1 0 .8.8 1.6 2.3 1.6.5 0 1-.1 1.5-.2.8-.2 1.5.3 2 1 .5.7 1.3 1.2 2.5 1.2s2-.5 2.5-1.2c.5-.7 1.2-1.2 2-1 .5.1 1 .2 1.5.2 1.5 0 2.3-.8 2.3-1.6 0-.5-.3-.8-.8-1-.5-.2-1.2-.4-1.7-.7-.5-.3-.8-.8-.8-1.3 0-.3.2-.5.5-.6 1-.3 1.5-1 1.5-1.8 0-.5-.2-.9-.5-1.5-.5-1-1-2-1-3.5 0-3.5-2.5-6-6-6z" />
    </svg>
  )
}
