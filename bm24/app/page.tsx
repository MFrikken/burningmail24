import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Body from "@/app/components/body";
import "./css/page.css";

export function generateMetadata() {
  let title = "burningmail24";

  const rdm = Math.random();
  if (rdm < 0.025) {
    title = "burn your mail 24"
  }

  return {
    title
  };
}

export default function Home() {
  return (
    <div>
      <div className="page-wrapper">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}
