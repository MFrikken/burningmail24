import "../css/input-email-body.css";

export default function InputEmailBody() {
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
