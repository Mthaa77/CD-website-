import { ReferencePage } from "../../_components/reference/page";
import { referenceMetadata } from "../../_components/reference/metadata";
import markup from "../../_components/reference/websites-markup";

const description = "Compare Carter Digitals website design, enquiry, CMS and hosting options for South African businesses.";
export const metadata = referenceMetadata("Website design packages", description, "/websites");

export default function Websites() {
  return <ReferencePage route="/websites" markup={markup} service={{ name: "Custom website development", description }} />;
}
