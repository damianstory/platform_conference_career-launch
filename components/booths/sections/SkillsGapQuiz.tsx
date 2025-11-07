'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'

type SoWhat = {
  importance: string
  action: string
}

type QuizQuestion = {
  question: string
  options: string[]
  correctAnswer: string
  proTip: string
  soWhat: SoWhat
}

const questions: QuizQuestion[] = [
  {
    question: '1. Which sector in Canada faced the largest labour shortages in 2024?',
    options: ['Engineering', 'Education and Social Services', 'Skilled Trades', 'Healthcare'],
    correctAnswer: 'Healthcare',
    proTip: 'The report highlights that healthcare had some of the most significant labour shortages, driven by an aging population and increased demand for health services.',
    soWhat: {
      importance: "High demand in healthcare means strong job security, competitive wages, and opportunities for career advancement. As the population ages, the need for healthcare professionals will continue to grow.",
      action: 'Explore various healthcare careers beyond traditional nursing and medicine—like healthcare administration, medical technology, or public health—to find a role that matches your interests and skills.'
    }
  },
  {
    question: '2. What is one major challenge employers face when hiring recent graduates?',
    options: [
      'Graduates demand too high salaries',
      'Lack of work-ready skills and practical experience',
      'Too many applicants for each position',
      'Graduates prefer remote work exclusively'
    ],
    correctAnswer: 'Lack of work-ready skills and practical experience',
    proTip: 'Employers often find that graduates have strong theoretical knowledge but lack hands-on experience and soft skills needed in the workplace.',
    soWhat: {
      importance: 'Understanding this gap helps you tailor your education and training to include practical experiences, making you a more attractive candidate to employers.',
      action: 'Seek internships, co-op programs, volunteer opportunities, or part-time jobs in your field of interest to gain real-world experience and develop essential soft skills.'
    }
  },
  {
    question: '3. Which of the following is NOT mentioned as a key driver of labour market changes?',
    options: [
      'Automation and AI',
      'An aging population',
      'Climate change policies',
      'Increased consumer spending on luxury goods'
    ],
    correctAnswer: 'Increased consumer spending on luxury goods',
    proTip: 'The report focuses on structural factors like technology, demographics, and environmental policies as primary drivers of labour market changes.',
    soWhat: {
      importance: 'Being aware of these drivers helps you anticipate which industries will grow or decline, guiding your career planning and skill development.',
      action: 'Stay informed about technological advancements and policy changes affecting your industry. Consider how trends like automation or green energy might create new opportunities.'
    }
  },
  {
    question: '4. Post-secondary institutions are encouraged to focus on developing which type of skills?',
    options: [
      'Solely technical and job-specific skills',
      'A balance of technical skills and soft skills like communication and problem-solving',
      'Only theoretical and academic knowledge',
      'Skills relevant only to traditional industries'
    ],
    correctAnswer: 'A balance of technical skills and soft skills like communication and problem-solving',
    proTip: 'Employers value graduates who have both technical expertise and strong interpersonal abilities, which are essential for adapting to changing work environments.',
    soWhat: {
      importance: 'Developing both hard and soft skills makes you versatile and better equipped to handle diverse challenges in the workplace, enhancing your employability.',
      action: 'Participate in group projects, leadership roles, or extracurricular activities to build teamwork, communication, and problem-solving skills alongside your technical training.'
    }
  },
  {
    question: '5. What role does immigration play in addressing Canadas labour shortages?',
    options: [
      'It has no significant impact',
      'It helps fill gaps in sectors with high demand',
      'It only increases competition for jobs',
      'It is discouraged by the government'
    ],
    correctAnswer: 'It helps fill gaps in sectors with high demand',
    proTip: 'Immigration programs are designed to attract skilled workers to Canada, particularly in industries experiencing shortages, contributing to economic growth.',
    soWhat: {
      importance: 'Understanding immigration policies can inform you about the competitiveness of certain fields and the importance of continuous skill development to remain competitive.',
      action: 'If you are an immigrant or planning to work with diverse teams, enhance your cultural competency and language skills to collaborate effectively in multicultural workplaces.'
    }
  },
  {
    question: '6. Which of the following best describes a "skills mismatch"?',
    options: [
      'When there are more jobs than workers',
      'When workers skills do not align with the needs of available jobs',
      'When employers offer salaries below market rates',
      'When educational institutions have outdated curricula'
    ],
    correctAnswer: 'When workers skills do not align with the needs of available jobs',
    proTip: 'A skills mismatch occurs when the competencies of the workforce don\'t match what employers are seeking, leading to unfilled positions and unemployment.',
    soWhat: {
      importance: 'Recognizing skills mismatches highlights the importance of aligning your education and training with current and future market demands to enhance job prospects.',
      action: 'Regularly research industry trends and required skills for your desired career path. Consider pursuing certifications or courses that address emerging needs.'
    }
  },
  {
    question: '7. What is one strategy recommended to improve collaboration between employers and educational institutions?',
    options: [
      'Increase tuition fees to fund better facilities',
      'Establish more co-op and internship programs',
      'Reduce the length of academic programs',
      'Focus solely on online education'
    ],
    correctAnswer: 'Establish more co-op and internship programs',
    proTip: 'Co-op and internship programs bridge the gap between education and employment, providing students with practical experience and employers with trained potential hires.',
    soWhat: {
      importance: 'Participating in such programs gives you a competitive edge by offering real-world experience, networking opportunities, and a better understanding of workplace expectations.',
      action: 'Actively seek out co-op opportunities, internships, or apprenticeships. Engage with career services at your institution to find placements that align with your goals.'
    }
  },
  {
    question: '8. The report suggests that upskilling and reskilling are important because:',
    options: [
      'They allow workers to stay relevant in a changing job market',
      'They are mandatory requirements for all employees',
      'They guarantee immediate salary increases',
      'They are only necessary for older workers'
    ],
    correctAnswer: 'They allow workers to stay relevant in a changing job market',
    proTip: 'Continuous learning helps workers adapt to new technologies and industry shifts, making them more valuable and employable over time.',
    soWhat: {
      importance: 'Embracing lifelong learning ensures you can pivot as industries evolve, reducing the risk of job displacement and opening doors to new opportunities.',
      action: 'Commit to ongoing professional development through workshops, online courses, or certification programs relevant to your field or areas you wish to explore.'
    }
  },
  {
    question: '9. Which industry is highlighted as growing due to environmental and sustainability initiatives?',
    options: ['Fast fashion', 'Fossil fuel extraction', 'Green energy and clean technology', 'Traditional manufacturing'],
    correctAnswer: 'Green energy and clean technology',
    proTip: 'Investments in renewable energy and sustainable practices are creating new job opportunities in environmental sectors.',
    soWhat: {
      importance: 'Understanding emerging industries allows you to position yourself in fields with growth potential, contributing to meaningful work and societal impact.',
      action: 'Explore careers in renewable energy, environmental science, or sustainability consulting. Consider how your skills can contribute to green initiatives.'
    }
  },
  {
    question: '10. What is a consequence of an aging workforce in Canada?',
    options: [
      'Decreased demand for goods and services',
      'Increased retirements leading to talent gaps',
      'Reduced need for healthcare services',
      'Lower government spending on pensions'
    ],
    correctAnswer: 'Increased retirements leading to talent gaps',
    proTip: 'As experienced workers retire, there is a loss of knowledge and skills, creating vacancies that need to be filled by the next generation.',
    soWhat: {
      importance: 'This trend means more job openings for young workers and opportunities to advance quickly, but also highlights the need to acquire skills rapidly.',
      action: 'Take advantage of mentorship programs to learn from retiring professionals. Be proactive in your career development to fill emerging leadership roles.'
    }
  },
  {
    question: '11. Why is digital literacy emphasized in modern education and training programs?',
    options: [
      'It is only important for IT professionals',
      'Most jobs now require some level of digital proficiency',
      'It replaces the need for other skills',
      'It is a trend that will soon pass'
    ],
    correctAnswer: 'Most jobs now require some level of digital proficiency',
    proTip: 'Technology is integrated into nearly all industries, making digital skills essential for most careers.',
    soWhat: {
      importance: 'Possessing digital literacy increases your employability across a wide range of fields and enables you to adapt to technological advancements in your job.',
      action: 'Enhance your digital skills by learning common software applications, understanding data analysis basics, or even coding fundamentals relevant to your industry.'
    }
  },
  {
    question: '12. What is one benefit of microcredentials and short-term certification programs?',
    options: [
      'They replace the need for a university degree',
      'They provide quick, targeted training for specific skills',
      'They are less valuable than traditional degrees',
      'They are only available online'
    ],
    correctAnswer: 'They provide quick, targeted training for specific skills',
    proTip: 'Microcredentials offer flexible learning options to gain new competencies without committing to lengthy programs, meeting immediate market needs.',
    soWhat: {
      importance: 'These programs allow you to upskill efficiently, stay competitive, and demonstrate initiative to employers by continuously updating your skill set.',
      action: 'Identify skills in demand within your field and pursue relevant microcredentials or certifications to supplement your existing qualifications.'
    }
  },
  {
    question: '13. According to the report, which of the following is a barrier to entering skilled trades?',
    options: [
      'High starting salaries',
      'Perceptions and stereotypes about trade careers',
      'Too many training programs available',
      'Lack of demand for tradespeople'
    ],
    correctAnswer: 'Perceptions and stereotypes about trade careers',
    proTip: 'Negative stereotypes and a societal emphasis on university education can deter individuals from considering lucrative and rewarding careers in the trades.',
    soWhat: {
      importance: 'Being aware of these biases helps you make informed career choices based on your interests and aptitudes, rather than societal pressures.',
      action: 'Research skilled trades that interest you. Speak with professionals in those fields to gain accurate insights and consider apprenticeships or trade schools as viable pathways.'
    }
  },
  {
    question: '14. How can employers help reduce the skills gap?',
    options: [
      'By only hiring overqualified candidates',
      'By investing in employee training and development',
      'By lowering job requirements to fill positions faster',
      'By outsourcing all jobs overseas'
    ],
    correctAnswer: 'By investing in employee training and development',
    proTip: 'When employers provide training opportunities, they help workers develop needed skills, increasing productivity and employee satisfaction.',
    soWhat: {
      importance: 'Understanding that employers value development can encourage you to seek companies that invest in their employees, leading to better career growth.',
      action: 'When job hunting, look for employers known for strong training programs and professional development. Ask about growth opportunities during interviews.'
    }
  },
  {
    question: '15. What is the overall message of the labour market report for students and job seekers?',
    options: [
      'The job market is unpredictable, so planning is futile',
      'Being adaptable and continuously learning is key to success',
      'Only STEM careers offer viable opportunities',
      'Traditional education paths are no longer relevant'
    ],
    correctAnswer: 'Being adaptable and continuously learning is key to success',
    proTip: 'The labour market is evolving due to various factors, and those who embrace change and invest in their skills will thrive.',
    soWhat: {
      importance: 'Adopting a mindset of lifelong learning and flexibility prepares you to navigate uncertainties and seize opportunities as they arise.',
      action: 'Set personal goals for continuous improvement. Stay curious, seek new experiences, and be open to adjusting your career path as you grow and the market evolves.'
    }
  }
]

const buttonBaseClasses = 'w-full bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-4 rounded-lg border border-gray-300 transition duration-200 ease-in-out text-left shadow-sm'

export default function SkillsGapQuiz() {
  const [started, setStarted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [nextEnabled, setNextEnabled] = useState(false)
  const [showFeedbackPanel, setShowFeedbackPanel] = useState(false)

  const progressRef = useRef<HTMLDivElement | null>(null)
  const timerRef = useRef<number | null>(null)

  const currentQuestion = useMemo(() => questions[currentIndex], [currentIndex])

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current)
      }
    }
  }, [])

  const resetProgressBar = () => {
    const el = progressRef.current
    if (!el) return
    el.style.transition = 'none'
    el.style.width = '0%'
    void el.offsetWidth
    el.style.transition = 'width 10s linear'
  }

  const startTimer = () => {
    const el = progressRef.current
    if (!el) return
    resetProgressBar()
    el.style.width = '100%'
    timerRef.current = window.setTimeout(() => {
      setNextEnabled(true)
      timerRef.current = null
    }, 10000)
  }

  const startQuiz = () => {
    setStarted(true)
    setCurrentIndex(0)
    setScore(0)
    setSelected(null)
    setShowFeedbackPanel(false)
    setNextEnabled(false)
  }

  const handleAnswer = (option: string) => {
    if (selected) return
    const isCorrect = option === currentQuestion.correctAnswer
    if (isCorrect) setScore((s) => s + 1)
    setSelected(option)
    setShowFeedbackPanel(true)
    setNextEnabled(false)
    startTimer()
  }

  const nextQuestion = () => {
    if (!nextEnabled) return
    if (timerRef.current) {
      window.clearTimeout(timerRef.current)
      timerRef.current = null
    }
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((i) => i + 1)
      setSelected(null)
      setShowFeedbackPanel(false)
      setNextEnabled(false)
      resetProgressBar()
    } else {
      setStarted(false)
    }
  }

  const restartQuiz = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current)
      timerRef.current = null
    }
    setStarted(false)
    setCurrentIndex(0)
    setScore(0)
    setSelected(null)
    setShowFeedbackPanel(false)
    setNextEnabled(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-xl w-full h-full text-gray-800 overflow-hidden">
      {/* Welcome/Start Screen */}
      {!started ? (
        <div className="p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Welcome to the Skills Gap Quiz!
          </h1>
          <p className="text-gray-600 mb-2">
            This quiz is based on a recent report analyzing Canada&apos;s labour market.
          </p>
          <p className="text-gray-600 mb-2">
            The report identifies key sectors facing worker shortages, highlights post-secondary training needs,
            and examines skill mismatches impacting the economy.
          </p>
          <p className="text-gray-600 mb-6">
            Test your understanding with 15 multiple-choice questions. Receive immediate feedback after each answer.
          </p>
          <button
            onClick={startQuiz}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Start Quiz
          </button>
        </div>
      ) : (
        /* Quiz Question Screen */
        <div className="p-6 md:p-8 h-full flex flex-col overflow-hidden min-h-0">
          <div className="flex-1">
            <div className="flex w-full flex-1 min-h-0 overflow-hidden" id="quiz-content-area">
              {/* Question Section */}
              <div
                id="question-area"
                className="pr-0 h-full overflow-auto"
                style={{
                  flexShrink: 0,
                  flexBasis: showFeedbackPanel ? '50%' : '100%',
                  transition: 'flex-basis 0.6s ease-in-out',
                  paddingRight: showFeedbackPanel ? '1.5rem' : 0
                }}
              >
                <div className="mb-6">
                  <p className="text-sm font-medium text-indigo-600">
                    {`Question ${currentIndex + 1} of ${questions.length}`}
                  </p>
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mt-1">
                    {currentQuestion.question}
                  </h2>
                </div>
                <div className="space-y-3 pr-2">
                  {currentQuestion.options.map((opt) => {
                    const isSelected = selected === opt
                    const isCorrect = opt === currentQuestion.correctAnswer
                    const base = buttonBaseClasses
                    const visual =
                      selected == null
                        ? ''
                        : isSelected && isCorrect
                        ? ' bg-green-500 text-white border-green-600'
                        : isSelected && !isCorrect
                        ? ' bg-red-500 text-white border-red-600'
                        : isCorrect
                        ? ' bg-green-500 text-white border-green-600 opacity-75'
                        : ''
                    return (
                      <button
                        key={opt}
                        className={base + visual}
                        onClick={() => handleAnswer(opt)}
                        disabled={selected !== null}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>
                {selected && (
                  <div
                    id="feedback-message"
                    className={`mt-4 p-4 rounded-md text-sm font-medium ${
                      selected === currentQuestion.correctAnswer
                        ? 'bg-green-100 border-l-4 border-green-500'
                        : 'bg-red-100 border-l-4 border-red-500'
                    }`}
                  >
                    {selected === currentQuestion.correctAnswer ? (
                      <span>Correct!</span>
                    ) : (
                      <span>
                        Incorrect. The correct answer was:{' '}
                        <strong className="font-semibold">
                          {currentQuestion.correctAnswer}
                        </strong>
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Feedback Panel */}
              <div
                id="feedback-section"
                style={{
                  flexShrink: 0,
                  flexBasis: showFeedbackPanel ? '50%' : '0%'
                }}
                className="opacity-0 md:pl-6 h-full overflow-auto"
              >
                <div
                  className="h-full"
                  style={{
                    opacity: showFeedbackPanel ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out 0.3s'
                  }}
                >
                  <div className="bg-indigo-100 border-l-4 border-indigo-500 p-4 rounded-md text-sm">
                    <strong className="font-semibold block mb-1">
                      Follow-up Information:
                    </strong>
                    <span>{currentQuestion.proTip}</span>
                  </div>
                  <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded-md text-sm mt-3">
                    <strong className="font-semibold block mb-1 text-orange-700">
                      Why it Matters:
                    </strong>
                    <p className="mb-2">{currentQuestion.soWhat.importance}</p>
                    <strong className="font-semibold block mb-1 text-orange-700">
                      What You Can Do:
                    </strong>
                    <p>{currentQuestion.soWhat.action}</p>
                  </div>
                  {selected && (
                    <div className="text-center mt-6">
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          ref={progressRef}
                          className="h-full bg-indigo-600 rounded-full"
                          style={{ width: '0%' }}
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Take a moment to review the information...
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-6 flex-shrink-0">
            {currentIndex + 1 < questions.length ? (
              <button
                onClick={nextQuestion}
                disabled={!nextEnabled}
                className={`w-full font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out shadow-md ${
                  nextEnabled
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-gray-500 text-white cursor-not-allowed'
                }`}
              >
                Next Question
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                disabled={!nextEnabled}
                className={`w-full font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out shadow-md ${
                  nextEnabled
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-gray-500 text-white cursor-not-allowed'
                }`}
              >
                Finish Quiz
              </button>
            )}
          </div>
        </div>
      )}

      {/* Results Screen */}
      {started === false && currentIndex === questions.length && (
        <div className="p-6 md:p-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Congratulations!
          </h1>
          <p className="text-gray-600 mb-4">You have completed the quiz.</p>
          <p className="text-lg font-semibold text-gray-700 mb-6">
            {`Your score: ${score} out of ${questions.length}`}
          </p>
          <button
            onClick={restartQuiz}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  )
}
