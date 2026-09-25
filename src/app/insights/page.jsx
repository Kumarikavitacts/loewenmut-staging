import Insights from "@/components/pages/Insights";
import { getInsightPageHeading } from "@/Apis/insightPage/api";
import { createMetadata } from "@/helper/Metadata";

export async function generateMetadata() {
  try {
    const result = await getInsightPageHeading();

    return createMetadata(result, {}, "/insights");
  } catch (error) {
    console.error("Error fetching Insights metadata:", error);

    return createMetadata(null, {}, "/insights");
  }
}

export default function Page() {
  return <Insights />;
}