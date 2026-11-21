import { CarterPage, ProofCards, pageMetadata } from "../../components/carter-pages";

export const metadata = pageMetadata("Selected project delivery","Explore the delivered scope of Carter Digitals projects in legal services and education.","/work");
export default function Work() {
  return <CarterPage><header className="cd-section-new cd-inner-hero"><p className="cd-kicker">Carter Digitals</p><h1>Selected work.</h1><p>Website delivery for South African organisations.</p></header><section className="cd-section-new"><h2>Project scope and delivery.</h2><ProofCards/></section></CarterPage>;
}
