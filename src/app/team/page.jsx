import Team from "@/components/pages/Team";
import { getTeamPageHeading } from "@/Apis/teamPage/api";
import { createMetadata } from "@/helper/Metadata";

export async function generateMetadata() {
  try {
    const data = await getTeamPageHeading();
    return createMetadata(data, {
      title: data?.Bannerbereich?.Titel,
      description: data?.Bannerbereich?.Text,
    }, "/team");
  } catch (error) {
    console.error("Error fetching Team metadata:", error);
    return createMetadata(null, {}, "/team");
  }
}

export default function Page() {
  return <Team />;
}