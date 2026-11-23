import { ReferencePage } from "../../_components/reference/page";
import { referenceMetadata } from "../../_components/reference/metadata";
import markup from "../../_components/reference/company-markup";

const description = "Meet the Carter Digitals founder and explore the studio’s procurement credentials, delivery process, work and care plans.";
export const metadata = referenceMetadata("Company and credentials", description, "/company");

export default function Company() {
  return <ReferencePage route="/company" markup={markup} />;
}
