import "../css/input-email-body.css";
import {useState} from "react";

type InputEmailBodyProps = {
    sampleMail: string;
};

export default function InputEmailBody(sampleMail: InputEmailBodyProps) {
    return (
        <div className={"input-email-body"}>
            <h3 className={"input-header"}>Input your email body here</h3>
            <textarea
                className={"input-text-area"}
                placeholder={sampleMail.sampleMail}
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
