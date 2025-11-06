import "../css/output-subject-lines.css";

type OutputSubjectLinesProps = {
    sampleSubjects: string[]
}

export default function OutputSubjectLines({sampleSubjects}: OutputSubjectLinesProps) {
    return (
      <div className={"output-subject-lines"}>
          <ol>
              <li>{sampleSubjects[0]}</li>
              <li>{sampleSubjects[1]}</li>
              <li>{sampleSubjects[2]}</li>
          </ol>
      </div>
    );
}