"use client";

import { useEffect, useState } from "react";
import { MessageCircle, PhoneCall } from "lucide-react";
import "./conversion-dock.css";

export function ConversionDock() {
  const [enquiryVisible,setEnquiryVisible]=useState(false);
  useEffect(()=>{const section=document.getElementById("enquiry");if(!section)return;const observer=new IntersectionObserver(([entry])=>setEnquiryVisible(entry.isIntersecting));observer.observe(section);return ()=>observer.disconnect();},[]);
  if(enquiryVisible)return null;
  return (
    <nav className="route-dock" aria-label="Quick conversion actions">
      <span className="route-dock__mark" aria-hidden="true">CD</span>
      <a className="route-dock__phone" href="tel:+27724026893" aria-label="Call Carter Digitals on 072 402 6893"><span className="route-dock__icon"><PhoneCall size={19} /></span><strong>Call</strong></a>
      <a className="route-dock__whatsapp" href="https://wa.me/27724026893?text=Hi%20Kabelo%2C%20I%20would%20like%20help%20choosing%20the%20right%20digital%20project." target="_blank" rel="noreferrer" aria-label="Chat with Kabelo on WhatsApp">
        <span className="route-dock__icon"><MessageCircle size={18} /></span>
        <span><small>FASTEST RESPONSE</small><strong>WhatsApp</strong></span>
      </a>
    </nav>
  );
}
