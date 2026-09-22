import Datenschutz from "@/components/pages/Datenschutz";
import { getDatenschutzPage } from "@/Apis/datenschutzPage/api";
import { createMetadata } from "@/helper/Metadata";

export async function generateMetadata() {
  try {
    const data =
      await getDatenschutzPage();

    return createMetadata(data);
  } catch (error) {
    console.error(
      "Error generating Datenschutz metadata:",
      error
    );

    return createMetadata(null);
  }
}

export default function Page() {
  return <Datenschutz />;
}