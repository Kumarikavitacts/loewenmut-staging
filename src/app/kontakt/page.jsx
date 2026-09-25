import Kontakt from "@/components/pages/Kontakt";
import { getKontaktPage } from "@/Apis/kontaktPage/api";
import { createMetadata } from "@/helper/Metadata";

export async function generateMetadata() {
  try {
    const data = await getKontaktPage();

    return createMetadata(data, {}, "/kontakt");
  } catch (error) {
    console.error("Error fetching Kontakt metadata:", error);

    return createMetadata(null, {}, "/kontakt");
  }
}

export default function Page() {
  return <Kontakt />;
}
