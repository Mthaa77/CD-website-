import { Mail, MessageCircle } from "lucide-react";
import "./floating-contact.css";

export function FloatingContact() {
  return (
    <nav className="carter-contact-float" aria-label="Quick contact">
      <a className="carter-contact-float-email" href="mailto:kabelokadiaka4@gmail.com" aria-label="Email Kabelo" title="Email Kabelo"><Mail size={21} aria-hidden="true"/></a>
      <a href="https://wa.me/27724026893" aria-label="WhatsApp Kabelo" title="WhatsApp Kabelo"><MessageCircle size={22} aria-hidden="true"/></a>
    </nav>
  );
}
