import Home from "@/components/pages/Home";
import { homepageApiStructure } from "@/Apis/HomePage/apis";
import { createMetadata } from "@/helper/Metadata";

export async function generateMetadata() {
  try {
    const result = await homepageApiStructure.getHeader();
    return createMetadata(result?.data, {}, "/");;
  } catch (error) {
    // Falls back to the defaults in createMetadata() — the page
    // itself still loads normally via the client-side redux fetch.
    return createMetadata(null, {}, "/");
  }
}

export default function Page() {
  return <Home />;
}