import { Check, Layers3, MessageSquare, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Define the job.", copy: "Tell me who needs the site and what you want them to do. We agree on the pages, features and price in writing." },
  { icon: Layers3, title: "Try the experience.", copy: "Review the design and try the main customer journey on your phone. Give feedback before the build goes live." },
  { icon: Rocket, title: "Launch with confidence.", copy: "We check the agreed forms, links and mobile layouts, then hand over the site and any included training." },
];

export function StudioProcess() {
  return (
    <section className="studio-process" aria-labelledby="process-heading">
      <div className="studio-width">
        <p className="studio-kicker">How we work</p>
        <h2 id="process-heading" className="studio-display">Know what <em>happens next.</em></h2>
        <ol className="studio-process-steps">
          {steps.map(({ icon: Icon, title, copy }) => (
            <li key={title}>
              <svg viewBox="0 0 120 64" width="120" height="64" aria-hidden="true" fill="none">
                <path className="studio-process-line" pathLength="1" d="M5 35h24C33 22 39 16 54 16h9m9 16h43" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="51" cy="34" r="23" stroke="currentColor" opacity=".3"/>
                <Icon x="39" y="22" size={24} strokeWidth={1.4}/>
                <Check x="101" y="15" size={15} strokeWidth={1.5}/>
              </svg>
              <h3>{title}</h3><p>{copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
