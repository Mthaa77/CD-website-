import { care, families, packages } from "../../lib/data";

export const catalogue = [
  ...families.map(family => ({
    id: family.id,
    title: family.title,
    benefit: family.copy,
    items: packages[family.id].map(item => [item.name, item.price, `${item.scope}. ${item.features.join(". ")}.`]),
  })),
  { id: "care", title: "Ongoing care", benefit: "Managed support for websites and stores.", items: care },
];
export const sectors = [
 {slug:'law-firms', name:'Law firms', headline:'Give every matter a clear first step.', intro:'Let a prospective client identify their matter, explore the relevant practice and request a consultation.', prompt:'Choose a matter',choices:['Property transfer','Commercial dispute','Business acquisition'],result:'Consultation brief',action:'Request a consultation',benefit:'An enquiry reaches the firm with the practice area already identified.',steps:['Matter','Practice','Consultation']},
 {slug:'construction', name:'Construction & engineering', headline:'Turn interest in a project into a useful brief.', intro:'Help a buyer explore your capabilities, identify a similar project and tell your estimating team what they need.',prompt:'Choose a project type',choices:['Commercial renovation','Residential build','Civil works'],result:'Quote brief',action:'Prepare quote request',benefit:'Your estimating team starts with the type of work the buyer needs.',steps:['Project','Scope','Quote request']},
 {slug:'dental-practices', name:'Dental practices',headline:'Make the first visit easier to arrange.',intro:'Let patients explore treatments and request a time with the practice. Your reception team can confirm availability directly.',prompt:'Choose a reason for visiting',choices:['Routine check-up','Teeth cleaning','Restorative consultation'],result:'Appointment request',action:'Prepare appointment request',benefit:'Reception can see why the patient wants to visit before confirming a time.',steps:['Treatment','Preference','Request']},
 {slug:'schools',name:'Schools',headline:'Give parents a clear route into admissions.',intro:'Bring grade-specific information, dates and admissions contacts together so parents know where to begin.',prompt:'Choose an entry grade',choices:['Grade R','Grade 1','Grade 8'],result:'Admissions enquiry',action:'Prepare admissions enquiry',benefit:'Parents reach the admissions office with the relevant grade already selected.',steps:['Grade','Information','Admissions']}
];
