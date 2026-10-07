import Support from "@/components/pages/Support";
import { getSupportPage } from "@/Apis/supportPage/api";
import { createMetadata } from "@/helper/Metadata";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  try {
    const data = await getSupportPage();

    return createMetadata(
      data,
      {
        title: data?.Bannerbereich?.Titel,
        description: data?.Bannerbereich?.Text,
      },
      "/support"
    );
  } catch (error) {
    console.error("Error fetching Support metadata:", error);

    return createMetadata(null, {}, "/support");
  }
}

export default async function Page() {
  let data = null;

  try {
    data = await getSupportPage();
  } catch (error) {
    console.error("Error fetching Support page:", error);
  }

  return <Support data={data} />;
}