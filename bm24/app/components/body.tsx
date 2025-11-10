import "../css/body.css";
import OutputSubjectLines from "@/app/components/output-subject-lines";
import InputEmailBody from "@/app/components/input-email-body";
import {useEffect, useState} from "react";
import {emails} from "../../public/emails"

export default function Body() {

    const [sampleMailbody, setSampleMailbody] = useState<string>("");
    const [subjects, setSubjects] = useState<string[]>([]);

    const generateSubjects = async (mailbody: string) => {
        try {
            const response = await fetch('/api/subject/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    mailbody: mailbody,
                }),
            });

            if (!response.ok) {
                const error = await response.json().catch(() => ({
                    error: "Unknown error"
                }));
                throw new Error("An error occurred while processing your request: \n" + "[" + response.status + "] " + error.error);
            }
            const subjectLines = await response.json();

            // display subject lines
            setSubjects(subjectLines.subjects);
        } catch (error) {
            alert(error instanceof Error ? error.message : String(error));
        }
    };

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
                <InputEmailBody sampleMail={sampleMailbody} fetchRequest={generateSubjects}/>
            </div>
        </div>
    );
}