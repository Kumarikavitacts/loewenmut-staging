import LeistungenDetail from "@/components/pages/LiestungenDetail";
import { getLeistungBySlug } from "@/Apis/leistungenDetailPage/api";
import { createMetadata } from "@/helper/Metadata";

export async function generateMetadata({ params }) {
  try {
    const { id } = await params;
    const data = await getLeistungBySlug(id);
    return createMetadata(data);
  } catch (error) {
    return createMetadata(null);
  }
}

export default function Page() {
  return <LeistungenDetail />;
}