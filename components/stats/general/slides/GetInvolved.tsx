import { Mail } from 'lucide-react';
import SlideCard from '../SlideCard';

export default function GetInvolved() {
  return (
    <SlideCard>
      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-block bg-gradient-to-r from-primary-blue to-[#00C2FF] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
          Get Involved
        </span>
        <h1 className="text-2xl sm:text-[32px] font-extrabold text-brand-navy">
          myBlueprint Career Launch
        </h1>
      </div>

      <div className="max-w-[700px] mx-auto">
        {/* Experience Section */}
        <div className="bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-2xl p-6 sm:p-7 mb-6">
          <h2 className="text-lg font-bold text-brand-navy mb-4">
            Want to experience the sessions and explore the booths for yourself?
          </h2>
          <p className="text-[15px] text-gray-600 font-semibold mb-5">
            Anyone can participate.
          </p>

          <div className="flex gap-4 mb-4">
            <div className="w-7 h-7 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              1
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Visit{' '}
              <a
                href="https://careerlaunch.myblueprint.ca"
                className="text-primary-blue font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                careerlaunch.myblueprint.ca
              </a>{' '}
              to meet the Ontario employers looking to connect with Ontario students.
            </p>
          </div>

          <div className="flex gap-4">
            <div className="w-7 h-7 rounded-full bg-primary-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              2
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Choose any session and select <strong>Watch Session</strong>. No registration or viewer details are required.
            </p>
          </div>
        </div>

        {/* 2026 Section */}
        <div className="bg-gradient-to-br from-brand-navy to-[#1a1a3e] rounded-2xl p-6 sm:p-7 text-white">
          <h2 className="text-lg font-bold mb-3">
            In 2026, Career Launch is going national. 🇨🇦
          </h2>
          <p className="text-[15px] opacity-90 mb-5">
            Want your company/organization to get involved?
          </p>

          <div className="bg-white/10 rounded-xl p-4 flex items-center gap-3">
            <Mail className="w-6 h-6 flex-shrink-0" />
            <div>
              <p className="text-sm opacity-80 mb-1">
                Email Damian to take advantage of early bird opportunities:
              </p>
              <a
                href="mailto:damian.matheson@myblueprint.ca"
                className="text-[#00C2FF] font-semibold text-[15px] hover:underline"
              >
                damian.matheson@myblueprint.ca
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-5 border-t border-neutral-2 text-center">
        <p className="text-sm text-gray-400">
          Career Launch 2025 • Powered by myBlueprint
        </p>
      </div>
    </SlideCard>
  );
}
