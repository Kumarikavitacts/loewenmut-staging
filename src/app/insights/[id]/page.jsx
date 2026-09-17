import InsightInner from "@/components/pages/InsightInner";
import { getReferenzBySlug } from "@/Apis/insightPage/api";
import { createMetadata } from "@/helper/Metadata";

export async function generateMetadata({ params }) {
  try {
    const { id } = await params;
    const data = await getReferenzBySlug(id);

    if (!data) {
      return createMetadata(null);
    }

    return createMetadata(data, {
      title: data?.Titel,
      description: data?.Text,
    });
  } catch (error) {
    console.error("Error fetching Insight detail metadata:", error);
    return createMetadata(null);
  }
}

export default function Page() {
  return <InsightInner />;
}