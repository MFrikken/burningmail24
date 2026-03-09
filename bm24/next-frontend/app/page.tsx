import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Body from "@/app/components/body";
import "./css/page.css";

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
