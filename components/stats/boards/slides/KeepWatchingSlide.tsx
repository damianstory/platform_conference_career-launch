import { BoardData } from '../data/boardsData';

interface KeepWatchingSlideProps {
  board: BoardData;
}

export default function KeepWatchingSlide({ board }: KeepWatchingSlideProps) {
  return (
    <div className="bg-white rounded-3xl p-12 shadow-2xl w-full relative">
      {/* Top accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-blue via-light-blue to-primary-blue rounded-t-3xl" />

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-primary-blue to-light-blue text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
          Keep Watching
        </div>
        <h1 className="text-4xl font-extrabold text-brand-navy leading-tight">
          The Week Is Over.<br />The Sessions Aren&apos;t.
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Info Box */}
        <div className="bg-gradient-to-br from-primary-blue to-light-blue/80 rounded-2xl p-8">
          <h2 className="text-lg font-bold text-white mb-4">
            Your board has access to all 27 Career Launch sessions for the remainder of the 2025–26 school year.
          </h2>
          <p className="text-base text-white/90 leading-relaxed">
            Perfect for students, families, and educators to watch when it works for them — in class, at home, or on the go.
          </p>
        </div>

        {/* Instructions Box */}
        <div className="bg-gradient-to-br from-brand-navy to-brand-navy/90 rounded-2xl p-8 text-white">
          <h2 className="text-lg font-bold mb-6">Watch Anytime</h2>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-7 h-7 bg-primary-blue rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <p className="text-sm leading-relaxed opacity-90">
                Visit{' '}
                <a
                  href="https://careerlaunch.myblueprint.ca"
                  className="text-light-blue font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  careerlaunch.myblueprint.ca
                </a>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-7 h-7 bg-primary-blue rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <p className="text-sm leading-relaxed opacity-90">
                Choose any session and select <strong>Watch Session</strong>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-7 h-7 bg-primary-blue rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <p className="text-sm leading-relaxed opacity-90">
                Explore sessions, booths, and resources at your own pace
              </p>
            </div>
          </div>
        </div>

        {/* Sessions explored note */}
        {board.sessions_explored < 27 && (
          <div className="text-center text-sm text-gray-600">
            You explored <span className="font-bold text-primary-blue">{board.sessions_explored} of 27</span> sessions during Career Launch week.
            <br />
            There&apos;s still more to discover!
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-xs text-gray-500">
        Career Launch 2025 • Powered by myBlueprint
      </div>
    </div>
  );
}
