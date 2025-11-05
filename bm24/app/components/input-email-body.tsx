

export default function InputEmailBody() {
    return (
        <div>
            <h3>Input your emails body here</h3>
            <textarea
                   placeholder={"Dear Mr. Zuckerberg, ..."}
                   maxLength={500}
                   autoFocus={true}
                   cols={80}
                   rows={20}
                   required={true}
            />
            <button
            type={"submit"}
            >
            Generate
            </button>
        </div>
    );
}
