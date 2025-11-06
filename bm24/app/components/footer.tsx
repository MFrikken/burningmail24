import "../css/footer.css";


export default function Footer() {
    return (
        <div>
            <span className={"disclaimer"}>This site collects no personal data and uses no cookies. </span>
            <hr/>
            <div className="footer">
                <a href="https://burningmail24.live/license" target="_blank" rel="noopener noreferrer">
                    ©2025 burningmail24.live
                </a>
                <a href="https://github.com/MFrikken/burningmail24" target="_blank" rel="noopener noreferrer">
                    View Source
                </a>
                <a href="https://paypal.me/frikken" target="_blank" rel="noopener noreferrer">
                    Support us
                </a>
            </div>
        </div>
    );
}