import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import "./homepage-contact.css";

const WHATSAPP_URL = "https://wa.me/27724026893?text=Hi%20Carter%20Digitals%2C%20I%27d%20like%20to%20start%20a%20project.";

export function HomepageContact() {
  return (
    <section className="homepage-contact" id="contact" aria-labelledby="homepage-contact-title">
      <div className="homepage-contact__wash" aria-hidden="true" />

      <div className="homepage-contact__intro" data-reveal>
        <span className="homepage-contact__kicker">PRETORIA STUDIO / WORKING ACROSS SOUTH AFRICA</span>
        <h2 id="homepage-contact-title">Turn the idea into something<br /><em>customers can trust.</em></h2>
        <p>Send us the business problem, the opportunity or the rough idea. You do not need a polished brief. We will help define the right scope, price and next practical move.</p>
        <div className="homepage-contact__actions">
          <Link className="homepage-contact__cta" href="/contact">
            <span>Get my project recommendation</span><ArrowUpRight size={18} />
          </Link>
          <a className="homepage-contact__whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> Start on WhatsApp
          </a>
        </div>
      </div>

      <div className="homepage-contact__channels" data-reveal>
        <div className="homepage-contact__channels-intro">
          <span>CHOOSE YOUR CHANNEL</span>
          <strong>Speak directly to the person building the work.</strong>
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <span className="homepage-contact__channel-icon homepage-contact__channel-icon--green"><MessageCircle size={18} /></span>
          <span><small>FASTEST RESPONSE</small><b>WhatsApp the studio</b></span>
          <ArrowUpRight size={17} />
        </a>
        <a href="tel:+27724026893">
          <span className="homepage-contact__channel-icon homepage-contact__channel-icon--blue"><Phone size={18} /></span>
          <span><small>CALL DIRECT</small><b>072 402 6893</b></span>
          <ArrowUpRight size={17} />
        </a>
        <a href="mailto:kabelokadiaka4@gmail.com">
          <span className="homepage-contact__channel-icon homepage-contact__channel-icon--gold"><Mail size={18} /></span>
          <span><small>EMAIL THE BRIEF</small><b>kabelokadiaka4@gmail.com</b></span>
          <ArrowUpRight size={17} />
        </a>
        <div className="homepage-contact__location">
          <MapPin size={18} /><span><small>BUILT IN PRETORIA</small><b>Soshanguve / Pretoria · South Africa</b></span>
        </div>
      </div>

      <div className="homepage-contact__promise" data-reveal>
        <div><span><Clock3 size={15} /> WHAT HAPPENS NEXT</span><strong>A visible direction within 24 hours. Focused delivery in 5–7 working days.</strong></div>
        <Link href="/contact">Start with the business problem <ArrowUpRight size={16} /></Link>
      </div>
    </section>
  );
}

export default HomepageContact;
