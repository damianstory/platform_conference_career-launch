import Accordion, { AccordionItem } from './Accordion';

const faqItems: AccordionItem[] = [
  {
    id: 'faq-16',
    title: 'Are there lesson plans to support these sessions?',
    content: (
      <p>
        Yes. Each session page has a button at the bottom where you can access a session specific pre/post type of activity. They are formatted as a Google Doc.
        <br />
        <br />
        Can&apos;t access Google Docs at your school? Download a .zip file of all lesson plans as{' '}
        <a href="/Career Launch Lesson Plans.zip" download className="text-blue hover:underline">
          Word docs here
        </a>.
        <br />
        <br />
        Want all lesson plans in one Google Drive folder?{' '}
        <a href="https://drive.google.com/drive/folders/1ud16ubaMC0o9XBIZVZxhAsKrFNjLokzX?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">
          Click here
        </a>.
      </p>
    ),
  },
  {
    id: 'faq-13',
    title: 'Are there prizes for students?',
    content: (
      <p>
        Not as part of Career Launch, however, through the <strong>Industry Immersion Series</strong> we&apos;re giving away $10,000 CAD to students EACH month this school year, in the form of 20 x $500 micro grants.
        <br />
        <br />
        You can learn more here:{' '}
        <a href="https://industryimmersionseries.myblueprint.ca/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">
          industryimmersionseries.myblueprint.ca
        </a>
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
    id: 'faq-9',
    title: 'All Sessions tab vs. Conference Schedule tab. What\'s the difference?',
    content: (
      <p>
        The difference between the two tabs is how the sessions are organized. The same 27 sessions appear in each tab.
        <br />
        <br />
        In the Conference tab, all 27 sessions have been split up evenly over the course of four different blocks. This supports the schools where everybody is watching sessions as part of a single-day delivery of Career Launch where all classes across the school watch sessions throughout the day. The blocks ensure that no student watches the same session twice in the same day. In this tab, it&apos;s set up with a similar structure to how a conference would operate in the real world.
        <br />
        <br />
        The All Sessions tab is a list of all the sessions that are available, not organized by blocks.
        <br />
        <br />
        Pro tip: Use the filter buttons to explore something new.
      </p>
    ),
  },
  {
    id: 'faq-6',
    title: 'How long do we have access to these recordings for?',
    content: (
      <p>
        You and your students will have access to all Career Launch recordings to watch
        on-demand for the remainder of the 25-26 school year.
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
    id: 'faq-18',
    title: 'Can students/families watch from home?',
    content: (
      <p>
        Absolutely. Career Launch is better with popcorn.
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
    id: 'faq-14',
    title: 'Do you have any communications we can share with families?',
    content: (
      <div>
        <p>
          You can copy and paste the content below. Please modify and update for your needs:
        </p>
        <p className="text-gray-400 my-2">--</p>
        <p>
          In collaboration with myBlueprint.ca, which students use as a tool to support their post-secondary, career, and life planning journey, &lt;OUR BOARD/SCHOOL&gt; grade 7-12 students now have access to 25+ engaging session recordings from Ontario employers looking to connect with Ontario students to speak to the types of opportunities and roles that are available to them within their organizations and industries.
        </p>
        <br />
        <p>
          Students will have opportunities to watch and reflect with this content as part of different curriculum activities, however, they are not limited to only watching at school. Students and families can access the Career Launch platform and recordings from home, using any device that has an internet connection.
        </p>
        <br />
        <p>
          These session recordings will be available throughout the remainder of the 2025-26 school year.
        </p>
        <br />
        <p>
          Families can visit{' '}
          <a href="https://careerlaunch.myblueprint.ca" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">
            careerlaunch.myblueprint.ca
          </a>{' '}
          to learn more.
        </p>
        <p className="text-gray-400 my-2">--</p>
        <p>
          You can also print a{' '}
          <a href="https://drive.google.com/file/d/1LNKjbnNJJWg3UVsY_ZMnksHRMfY8HCZd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">
            one-pager with QR code here
          </a>.
        </p>
      </div>
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
  {
    id: 'faq-15',
    title: 'Why are these sessions only for Ontario school boards?',
    content: (
      <p>
        This is our first year running this event. We wanted to start small, test the concepts,
        and use this as an opportunity to incorporate feedback in a way that will allow us to
        run an even bigger event next year.
        <br />
        <br />
        Our plan at this time is to organize a national career launch event that will take place
        on and around Take Your Kids To Work Day in November 2026.
        <br />
        <br />
        If you would like to get involved or have suggestions about who should participate,
        we would love to talk. Reach out to Damian (
        <a href="mailto:damian.matheson@myblueprint.ca" className="text-blue hover:underline">
          damian.matheson@myblueprint.ca
        </a>
        ) at any point.
      </p>
    ),
  },
  {
    id: 'faq-17',
    title: 'What is your privacy policy and terms of use?',
    content: (
      <div>
        <p>
          Because Career Launch is being run by myBlueprint, by registering for a session, you are consenting to the myBlueprint privacy policy and terms of service.
          <br />
          <br />
          If you are already a user of myBlueprint, you agreed to this when creating your account, however, by registering for a session you also consent to the privacy policy and terms of use.
          <br />
          <br />
          Access the myBlueprint{' '}
          <a href="https://myblueprint.ca/privacy" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">
            Privacy Policy
          </a>
          {' '}and{' '}
          <a href="https://myblueprint.ca/terms" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">
            Terms of Use
          </a>.
        </p>
        <p className="text-gray-400 my-2">--</p>
        <p className="font-semibold mb-2">Specific to Career Launch:</p>
        <ul className="list-disc ml-6">
          <li>We do not collect student name or email as part of registration. We ask for school board, school, and grade for reporting purposes.</li>
          <li>All Career Launch related data will be destroyed in July, 2026.</li>
          <li>Educators can request to have their registration data deleted at any point.</li>
          <li>Registration data is only being collected for reporting purposes to share with school boards and presenters.</li>
        </ul>
      </div>
    ),
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-10 md:pt-[35px]">
      <div className="max-w-[900px] mx-auto px-5">
        <h2 className="text-[32px] font-bold text-[#1a1a1a] text-center mb-[30px]">
          Frequently Asked Questions
        </h2>
        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
