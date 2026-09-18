import News from "@/components/pages/News";
import { getNewsPageHeading } from "@/Apis/NewsPage/api";
import { createMetadata } from "@/helper/Metadata";

export async function generateMetadata() {
  try {
    const data = await getNewsPageHeading();
    return createMetadata(data, {
      title: data?.Bannerbereich?.Titel,
      description: data?.Bannerbereich?.Text,
    });
  } catch (error) {
    console.error("Error fetching News page metadata:", error);
    return createMetadata(null);
  }
}

export default function Page() {
  return <News />;
}