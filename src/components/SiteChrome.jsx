import Header from "./Header";
import Footer from "./Footer";

export default function SiteChrome({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
