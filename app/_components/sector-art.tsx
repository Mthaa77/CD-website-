import {Scale, GraduationCap, HardHat, CalendarDays, Check, FileText, MessageSquareText} from 'lucide-react';

const motifs = {
  'law-firms': Scale,
  construction: HardHat,
  'dental-practices': CalendarDays,
  schools: GraduationCap,
};

export function SectorArt({slug}:{slug:string}) {
  const Icon = motifs[slug as keyof typeof motifs];
  return <svg className="cd-engraving" viewBox="0 0 440 190" fill="none" aria-hidden="true">
    <g stroke="currentColor" opacity=".16">{Array.from({length:17},(_,i)=><path key={i} d={'M'+(20+i*25)+' 12v166'}/>)}{[25,60,95,130,165].map(y=><path key={y} d={'M12 '+y+'h416'}/>)}</g>
    <g stroke="currentColor" strokeWidth="1.5"><ellipse cx="115" cy="95" rx="78" ry="65" opacity=".24"/><circle cx="115" cy="95" r="55"/><path className="cd-signal" d="M170 95h25l28-40h48m-76 40 28 40h48M321 55h15l20 39h24m-59 41h15l20-41"/></g>
    <Icon x="80" y="60" width="70" height="70" strokeWidth="1.1"/>
    <g stroke="currentColor"><rect x="271" y="34" width="50" height="42" rx="9"/><rect x="271" y="114" width="50" height="42" rx="9"/><circle cx="395" cy="94" r="16"/></g>
    <FileText x="285" y="43" width="22"/><MessageSquareText x="285" y="123" width="22"/><Check x="384" y="83" width="22"/>
  </svg>;
}
