import Accordion, { AccordionItem } from './Accordion';

const faqItems: AccordionItem[] = [
  {
    id: 'faq-1',
    title: 'How do I access the career sessions?',
    content: (
      <p>
        Simply browse the sessions on this platform, click on any session that interests you,
        and you'll be able to watch the video content directly in your browser. No special
        software or downloads required.
      </p>
    ),
  },
  {
    id: 'faq-2',
    title: 'Are sessions live or pre-recorded?',
    content: (
      <p>
        All sessions are pre-recorded, which means you can watch them at any time that fits
        your school schedule during the event week. This flexibility allows you to integrate
        career education seamlessly into your classroom.
      </p>
    ),
  },
  {
    id: 'faq-3',
    title: 'Can students watch on their own devices?',
    content: (
      <p>
        Yes! The platform is fully responsive and works on desktops, tablets, and smartphones.
        Students can watch on their own devices in class or you can project the sessions on
        your classroom display.
      </p>
    ),
  },
  {
    id: 'faq-4',
    title: 'How long are the sessions?',
    content: (
      <p>
        Session lengths vary, but most are between 30-45 minutes. Each session page displays
        the exact duration so you can plan accordingly. You can also pause and resume sessions
        as needed.
      </p>
    ),
  },
  {
    id: 'faq-5',
    title: 'Do I need to register in advance?',
    content: (
      <p>
        You can browse all session content without registration. When you're ready to watch a
        session with your class, you'll be asked to provide some quick information about your
        viewing context. This helps us measure the program's reach and impact.
      </p>
    ),
  },
  {
    id: 'faq-6',
    title: 'Are sessions available after the event?',
    content: (
      <p>
        Session availability after the event week depends on each presenter's preferences.
        Check back for updates on extended access, or contact us for more information about
        specific sessions you'd like to revisit.
      </p>
    ),
  },
  {
    id: 'faq-7',
    title: 'What technology do I need?',
    content: (
      <p>
        All you need is a device with internet access and a modern web browser (Chrome, Firefox,
        Safari, or Edge). For classroom viewing, you may want to connect to a projector or large
        display for better visibility.
      </p>
    ),
  },
  {
    id: 'faq-8',
    title: 'Can I download session materials?',
    content: (
      <p>
        Some sessions may include downloadable resources or supplementary materials. These will
        be available on the individual session pages. Virtual expo booths may also provide
        additional resources from sponsor organizations.
      </p>
    ),
  },
  {
    id: 'faq-9',
    title: 'How do I get a certificate of participation?',
    content: (
      <p>
        Certificates of participation may be available for educators who engage with the platform
        during the event week. Contact your school board administrator or reach out to us directly
        for information about professional development recognition.
      </p>
    ),
  },
  {
    id: 'faq-10',
    title: 'Who can I contact for technical support?',
    content: (
      <p>
        If you experience any technical issues or have questions about using the platform,
        please contact us at{' '}
        <a href="mailto:support@careerlaunch.ca" className="text-blue hover:underline">
          support@careerlaunch.ca
        </a>
        . We're here to help ensure your experience is smooth and successful.
      </p>
    ),
  },
];

export default function FAQ() {
  return (
    <section className="bg-gray-50 py-8 md:py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-2xl md:text-3xl text-navy text-center mb-8 md:mb-12">
              Frequently Asked Questions
            </h3>
            <Accordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
