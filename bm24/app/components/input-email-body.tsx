import "../css/input-email-body.css";
import {useState} from "react";

export default function InputEmailBody() {

    const [mailbody, setMailbody] = useState('');

    const submit = async () => {
        if (mailbody === '') {
            alert('The mailbody must not be empty! \nPlease input your mail into the textbox.');
            return;
        }

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
            alert("Success:" + subjectLines);
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className={"input-email-body"}>
            <h3 className={"input-header"}>Input your email body here</h3>
            <textarea
                className={"input-text-area"}
                placeholder={"Dear Mr. Zuckerberg, ..."}
                maxLength={500}
                autoFocus={true}
                cols={80}
                rows={20}
                required={true}
                onChange={(e) => setMailbody(e.target.value)}
            />
            <button
                className={"submit-button"}
                type={"submit"}
                onClick={submit}
            >
                Generate
            </button>
        </div>
    );
}
