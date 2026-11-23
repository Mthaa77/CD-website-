import { ReferencePage } from "../../_components/reference/page";
import { referenceMetadata } from "../../_components/reference/metadata";
import markup from "../../_components/reference/apps-markup";

const description = "Compare Carter Digitals packages for workflows, business apps, portals and software platforms.";
export const metadata = referenceMetadata("Custom web application packages", description, "/apps");

export default function Apps() {
  return <ReferencePage route="/apps" markup={markup} service={{ name: "Custom web application development", description }} />;
}
