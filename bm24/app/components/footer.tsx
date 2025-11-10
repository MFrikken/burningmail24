import "../css/footer.css";


export default function Footer() {
    return (
        <div>
            <hr/>
            <div className="footer">
                <span className={"disclaimer"}>This site collects no personal data and uses no cookies. </span>
                <a href="https://github.com/MFrikken/burningmail24" target="_blank" rel="noopener noreferrer">
                    ©2025 burningmail24.live | Published under MIT License
                </a>
            </div>
        </div>
    );
}