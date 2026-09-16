import Leistungen from "@/components/pages/Leistungen";
import { getLeistungenPage } from "@/Apis/leistungenDetailPage/api";
import { createMetadata } from "@/helper/Metadata";

export async function generateMetadata() {
  try {
    const data = await getLeistungenPage();
    return createMetadata(data);
  } catch (error) {
    return createMetadata(null);
  }
}

export default function Page() {
  return <Leistungen />;
}