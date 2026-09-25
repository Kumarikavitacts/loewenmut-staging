import Datenschutz from "@/components/pages/Datenschutz";
import { getDatenschutzPage } from "@/Apis/datenschutzPage/api";
import { createMetadata } from "@/helper/Metadata";

export async function generateMetadata() {
  try {
    const data =
      await getDatenschutzPage();

    return createMetadata(data, {}, "/datenschutz");
  } catch (error) {
    console.error(
      "Error generating Datenschutz metadata:",
      error
    );

    return createMetadata(null, {}, "/datenschutz");
  }
}

export default function Page() {
  return <Datenschutz />;
}