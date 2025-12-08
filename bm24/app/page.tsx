import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Body from "@/app/components/body";
import { titles } from "@/public/titles"

export function generateMetadata() {
  let title = "burningmail24";
  
  if (titles.length > 0) {
    title = titles[Math.floor(Math.random() * titles.length)];
  }

  return {
    title
  };
}

export default function Home() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
