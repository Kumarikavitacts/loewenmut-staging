
import { getLeistungBySlug } from "@/Apis/leistungenDetailPage/api";
import LeistungenDetail from "@/components/pages/LiestungenDetail";
import { createMetadata } from "@/helper/Metadata";

export async function generateMetadata({ params }) {
  try {
    const { id } = await params;
    const data = await getLeistungBySlug(id);

    if (!data) {
      return createMetadata(null, {}, `/leistungen/${id}`);
    }

    return createMetadata(data, {
      title: data?.Titel,
      description: data?.Text,
    }, `/leistungen/${id}`);
  } catch (error) {
    console.error("Error fetching Leistung detail metadata:", error);
    return createMetadata(null, {}, `/leistungen/${id}`);
  }
}

export default function Page() {
  return <LeistungenDetail />;
}