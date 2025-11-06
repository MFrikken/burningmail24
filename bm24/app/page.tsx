import InputEmailBody from "@/app/components/input-email-body";
import Header from "@/app/components/header";
import OutputSubjectLines from "@/app/components/output-subject-lines";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
      <div>
          <Header />
          <OutputSubjectLines />
          <InputEmailBody />
          <Footer />
      </div>
  );
}
