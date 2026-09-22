import Agentur from "@/components/pages/Agentur";
import { getAgenturPageData } from "@/Apis/agenturPage/api";
import { createMetadata } from "@/helper/Metadata";

export async function generateMetadata() {
  try {
    const data = await getAgenturPageData();
    return createMetadata(data, {
      title: data?.Bannerbereich?.Titel,
      description: data?.Bannerbereich?.Text,
    });
  } catch (error) {
    console.error("Error fetching Agentur metadata:", error);
    return createMetadata(null);
  }
}

export default function Page() {
  return <Agentur />;
}
