import Accordion, { AccordionItem } from './Accordion';

const faqItems: AccordionItem[] = [
  {
    id: 'faq-1',
    title: 'How do I access the sessions?',
    content: (
      <p>
        Click the sessions button and then scroll, search, or use the filters to find the session
        you&apos;re most interested in watching.
        <br />
        <br />
        Watch this 2-minute video for a complete overview of how this platform works.
      </p>
    ),
  },
  {
    id: 'faq-9',
    title: 'What\'s the difference between the Conference and All Sessions tab on the Sessions page?',
    content: (
      <p>
        The difference between the two tabs is how the sessions are organized. In the Conference tab, all 27 sessions have been split up evenly over the course of four different blocks.
        <br />
        <br />
        This supports the schools where everybody is watching sessions as part of a single-day delivery of Career Launch where all classes watch concurrently throughout the day. The blocks ensure that no student watches the same session twice in the same day. In this tab, it&apos;s set up with a similar structure to how a conference would operate in the real world.
        <br />
        <br />
        The All Sessions tab is a list of all the sessions that are available, not organized by blocks. They&apos;re the same sessions in each tab.
        <br />
        <br />
        Follow your curiosity. Use the filter buttons to explore something new.
      </p>
    ),
  },
  {
    id: 'faq-2',
    title: 'Are sessions live or pre-recorded?',
    content: (
      <p>
        All sessions are pre-recorded. myBlueprint has vetted the content from each session to
        make sure that everything is applicable and appropriate for your students.
      </p>
    ),
  },
  {
    id: 'faq-3',
    title: 'Can students watch on their own devices?',
    content: (
      <p>
        Yes, absolutely. As long as students have internet access, they&apos;ll be able to watch
        any of the sessions. They&apos;ll be asked to select their school board and school but not
        enter any personally identifiable information. This is simply for reporting purposes to be
        able to report to our board partners about participation in the event.
      </p>
    ),
  },
  {
    id: 'faq-4',
    title: 'How long are the sessions?',
    content: (
      <p>
        Most sessions are going to fall somewhere between 15 and 45 minutes. Next to each session title
        you&apos;ll see the duration listed, and you&apos;ll also be able to filter by duration.
        <br />
        <br />
        Because these are pre-recorded, that also means you can split up sessions over multiple classes if needed.

      </p>
    ),
  },
  {
    id: 'faq-5',
    title: 'Do I need to register in advance?',
    content: (
      <p>
        You don&apos;t need to create an account with an email and a password to access this platform,
        but before watching a session, you will be prompted to enter some basic information.
        <br />
        <br />
        For students, we simply ask for your school board and school (if you&apos;re watching on your own)
        for reporting purposes.
        <br />
        <br />
        For educators, we ask for your name, email, school, school board, and how many students
        you&apos;re watching it with (again for reporting purposes).
      </p>
    ),
  },
  {
    id: 'faq-6',
    title: 'How long do we have access to these recordings for?',
    content: (
      <p>
        Yes. You and your students will have access to all Career Launch recordings to watch
        on-demand for the remainder of the 25-26 school year.
      </p>
    ),
  },
  {
    id: 'faq-7',
    title: 'What technology do I need?',
    content: (
      <p>
        Any device with internet connectivity should work to allow you or your students to watch
        this content.
      </p>
    ),
  },
  {
    id: 'faq-8',
    title: 'How do we contact the presenters?',
    content: (
      <p>
        Presenters and sponsors will have left any relevant contact information within their booths.
      </p>
    ),
  },
  {
    id: 'faq-10',
    title: 'Who can I contact for technical support?',
    content: (
      <p>
        You can email Damian (
        <a href="mailto:damian.matheson@myblueprint.ca" className="text-blue hover:underline">
          damian.matheson@myblueprint.ca
        </a>
        ) for any questions regarding the Career Launch event.
      </p>
    ),
  },
  {
    id: 'faq-11',
    title: 'My school board isn\'t listed in the options to select from.',
    content: (
      <p>
        If you don&apos;t see your school board listed but you want access to these recordings,
        please email Damian (
        <a href="mailto:damian.matheson@myblueprint.ca" className="text-blue hover:underline">
          damian.matheson@myblueprint.ca
        </a>
        ).
      </p>
    ),
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-10 md:pt-[70px]">
      <div className="max-w-[900px] mx-auto px-5">
        <h2 className="text-[32px] font-bold text-[#1a1a1a] text-center mb-[30px]">
          Frequently Asked Questions
        </h2>
        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
