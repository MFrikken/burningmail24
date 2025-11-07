import "../css/output-subject-lines.css";

type OutputSubjectLinesProps = {
    subjectLines: string[]
}

export default function OutputSubjectLines({subjectLines}: OutputSubjectLinesProps) {
    return (
        <div className={"output-subject-lines"}>
            if (subjectLines) {
            <ol>
                <li>{subjectLines[0] ?? ""}</li>
                <li>{subjectLines[1] ?? ""}</li>
                <li>{subjectLines[2]}?? ""</li>
            </ol>
        } else {
            // alert? oder evtl. sogar material ui alert
        }
        </div>
    );
}