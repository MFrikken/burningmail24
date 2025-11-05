import Image from "next/image";
import InputEmailBody from "@/app/components/input-email-body";
import Header from "@/app/components/header";
import OutputSubjectLines from "@/app/components/output-subject-lines";

export default function Home() {
  return (
      <div>
          <Header />
          <OutputSubjectLines />
          <InputEmailBody />
      </div>
  );
}
