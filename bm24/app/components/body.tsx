import "../css/body.css";
import OutputSubjectLines from "@/app/components/output-subject-lines";
import InputEmailBody from "@/app/components/input-email-body";
import {useEffect, useState} from "react";
import {emails} from "../../public/emails"

export default function Body() {

    const [sampleMailbody, setSampleMailbody] = useState<string>("");
    const [subjects, setSubjects] = useState<string[]>([]);

    useEffect(() => {
        if (emails.length > 0) {
            const index = Math.floor(Math.random() * emails.length);
            setSampleMailbody(emails[index].body);
        }
    }, []);

    return (
        <div className={"body"}>
            <div className={"panel"}>
                <OutputSubjectLines subjectLines={subjects}/>
                <InputEmailBody sampleMail={sampleMailbody}/>
            </div>
        </div>
    );
}