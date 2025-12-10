import { useState } from "react";
import "../css/output-subject-lines.css";

type OutputSubjectLinesProps = {
    subjectLines: string[]
}

export default function OutputSubjectLines({ subjectLines }: OutputSubjectLinesProps) {

    const [showClipboardMsg, setShowClipboardMsg] = useState(false);

    const copyToClipboard = ((subj: string) => {
        navigator.clipboard.writeText(subj);
        setShowClipboardMsg(true);
        setTimeout(() => setShowClipboardMsg(false), 1500);
    })
    return (
        <div className="output-subject-lines">
            {subjectLines.length <= 0 ? (
                <span className="intro">
                    Enter your email body below and receive matching subject lines.
                </span>
            ) : (
                <>
                    {showClipboardMsg && <span className="clipboard-msg">Copied to clipboard!</span>}

                    {subjectLines.map((subj, i) => (
                        <div className="subject" key={i} onClick={() => copyToClipboard(subj)}>{i + 1}: {subj}</div>
                    ))}
                </>
            )}
        </div>
    );

}