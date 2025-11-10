import "../css/input-email-body.css";
import {useState} from "react";

type InputEmailBodyProps = {
    sampleMail: string;
    fetchRequest: (mailbody: string) => void;
}

export default function InputEmailBody({sampleMail, fetchRequest}: InputEmailBodyProps) {

    const [mailbody, setMailbody] = useState('');

    const submit = async () => {
        if (mailbody === '') {
            alert('The mailbody must not be empty! \nPlease input your mail into the textbox.');
            return;
        }
        try {
            fetchRequest(mailbody);
        } catch (error) {
            alert('Sorry, but an error occurred while processing your request.');
        }
    }

    return (
        <div className={"input-email-body"}>
            <h3 className={"input-header"}>Input your email body here</h3>
            <textarea
                className={"input-text-area"}
                placeholder={sampleMail}
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
