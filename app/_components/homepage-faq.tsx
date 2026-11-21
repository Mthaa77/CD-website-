import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import "./homepage-faq.css";

const FAQS = [
  {
    question: "How quickly can you start?",
    answer: "We can create a focused visual prototype within 24 hours. Once you approve the direction, a focused website can move from brief to launch in 5–7 working days when content and feedback arrive on time.",
  },
  {
    question: "How much does a website cost?",
    answer: "Custom websites start from R4,999. Larger websites, digital products and business systems are scoped around the work required. You receive a clear recommendation and price before the build begins.",
  },
  {
    question: "What do you actually build?",
    answer: "Custom websites, useful digital products and business systems, 3D logo identities, and posters for businesses and organisations. Every deliverable is built for a real business outcome—not simply to look impressive in a portfolio.",
  },
  {
    question: "Do I need a finished brief?",
    answer: "No. Bring the business problem, the audience and the outcome you need. We will help shape the scope, direction and most practical next step with you.",
  },
  {
    question: "Can I see the direction before committing?",
    answer: "Yes. We prototype first so you can respond to something real. You see the direction, challenge it and approve the thinking before committing to the full build.",
  },
  {
    question: "Do you work outside Pretoria?",
    answer: "Yes. Carter Digitals is based in Soshanguve, Pretoria, and works remotely with businesses and organisations across Gauteng and South Africa.",
  },
  {
    question: "What happens after I enquire?",
    answer: "You receive a direct response, a practical recommendation and a clear next move. If the project is a fit, we agree on the scope, price and timeline before anything moves forward.",
  },
] as const;

export function HomepageFaq() {
  return (
    <section className="homepage-faq" id="faq" aria-labelledby="homepage-faq-title">
      <div className="homepage-faq__intro" data-reveal>
        <span className="homepage-faq__kicker">FAQ / STRAIGHT ANSWERS</span>
        <h2 id="homepage-faq-title">No jargon.<br /><em>No runaround.</em></h2>
        <p>Here is what matters before you start: what it costs, how quickly we move, what you will see and what happens after you enquire.</p>
        <Link className="homepage-faq__link" href="/contact">Ask the studio directly <ArrowUpRight size={17} /></Link>
      </div>

      <div className="homepage-faq__list" data-reveal>
        {FAQS.map((faq, index) => (
          <details key={faq.question} open={index === 0}>
            <summary>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{faq.question}</strong>
              <ChevronDown size={20} aria-hidden="true" />
            </summary>
            <div className="homepage-faq__answer"><p>{faq.answer}</p></div>
          </details>
        ))}
      </div>
    </section>
  );
}

export default HomepageFaq;
