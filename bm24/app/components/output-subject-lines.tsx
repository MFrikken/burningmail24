import "../css/output-subject-lines.css";

type OutputSubjectLinesProps = {
    subjectLines: string[]
}

export default function OutputSubjectLines({subjectLines}: OutputSubjectLinesProps) {
    return (
        <div className="output-subject-lines">
            {subjectLines.map((subj, i) => (
                <div className={"subject"} key={i}>{i + 1}: {subj}</div>
            ))}
        </div>

    );
}