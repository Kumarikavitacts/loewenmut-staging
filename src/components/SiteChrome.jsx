import Header from "./Header";
import Footer from "./Footer";
import CursorGlow from "./CursorGlow";

export default function SiteChrome({ children }) {
  return (
    <>
      <CursorGlow />
      <Header />
      {children}
      <Footer />
    </>
  );
}
