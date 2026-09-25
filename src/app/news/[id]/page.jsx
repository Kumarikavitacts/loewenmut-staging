import NewsInner from "@/components/pages/NewsInner";
import { getNewsBySlug } from "@/Apis/NewsPage/api";
import { createMetadata } from "@/helper/Metadata";

export async function generateMetadata({ params }) {
  try {
    const { id } = await params;
    const data = await getNewsBySlug(id);

    if (!data) {
      return createMetadata(null, {}, `/news/${id}`);
    }

    return createMetadata(data, {
      title: data?.Titel,
      description: data?.Text,
    }, `/news/${id}`);
  } catch (error) {
    console.error("Error fetching News detail metadata:", error);

    return createMetadata(null, {}, `/news/${id}`);
  }
}

export default function Page() {
  return <NewsInner />;
}
