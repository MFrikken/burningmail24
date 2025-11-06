import "../css/input-email-body.css";

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
            />
            <button
                className={"submit-button"}
                type={"submit"}
            >
                Generate
            </button>
        </div>
    );
}
