import { ReferencePage } from "../../_components/reference/page";
import { referenceMetadata } from "../../_components/reference/metadata";
import markup from "../../_components/reference/work-markup";

const description = "Explore the delivered scope of Carter Digitals projects in legal services and education.";
export const metadata = referenceMetadata("Selected project delivery", description, "/work");

export default function Work() {
  return <ReferencePage route="/work" markup={markup} />;
}
