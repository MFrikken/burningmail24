import OutputSubjectLines from "@/app/components/output-subject-lines";
import InputEmailBody from "@/app/components/input-email-body";
import {useEffect, useMemo, useState} from "react";
import { emails } from "../../public/emails"

export default function Body() {

    type Email = {
        body: string,
        subjects: string[]
    }
    const [sampleMailbody, setSampleMailbody] = useState<string>("");
    const [sampleSubjects, setSampleSubjects] = useState([""]);

    useEffect(() => {
        if (emails.length > 0) {
            const index = Math.floor(Math.random() * emails.length);
            setSampleMailbody(emails[index].body);
            setSampleSubjects(emails[index].subjects);
        }
    }, [emails]);

    return (
      <div>
          <OutputSubjectLines sampleSubjects={sampleSubjects}/>
          <InputEmailBody sampleMail={sampleMailbody}/>
      </div>
    );
}