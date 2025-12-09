interface SlideCardProps {
  children: React.ReactNode;
  compact?: boolean;
}

export default function SlideCard({ children, compact = false }: SlideCardProps) {
  return (
    <div
      className={`
        bg-white rounded-3xl w-full relative
        shadow-[0_25px_80px_rgba(0,0,0,0.3)]
        ${compact ? 'p-8 sm:p-10' : 'p-8 sm:p-12'}
      `}
    >
      {/* Blue gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl"
        style={{
          background: 'linear-gradient(90deg, #0092FF 0%, #00C2FF 50%, #0092FF 100%)'
        }}
      />
      {children}
    </div>
  );
}
