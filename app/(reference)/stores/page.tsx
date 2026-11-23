import { ReferencePage } from "../../_components/reference/page";
import { referenceMetadata } from "../../_components/reference/metadata";
import markup from "../../_components/reference/stores-markup";

const description = "Compare Carter Digitals e-commerce packages, checkout, shipping and store training.";
export const metadata = referenceMetadata("Online store development packages", description, "/stores");

export default function Stores() {
  return <ReferencePage route="/stores" markup={markup} service={{ name: "Online store development", description }} />;
}
