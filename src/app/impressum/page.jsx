import Impressum from "@/components/pages/Impressum";
import { getImpressumPage } from "@/Apis/impressumPage/api";
import { createMetadata } from "@/helper/Metadata";

export async function generateMetadata() {
  try {
    const data = await getImpressumPage();

    return createMetadata(data,{}, "/impressum");
  } catch (error) {
    console.error("Error generating Impressum metadata:", error);

    return createMetadata(null, {}, "/impressum");
  }
}

export default function Page() {
  return <Impressum />;
}