import { Section } from "../components/Section";
import "./DownloadSection.scss"

export function DownloadSection() {
    return (
        <Section className="downloadSection">
            <a href="/" className="downloadSection__download">Download</a>
            <div className="downloadSection__info">
                <span className="downloadSection__links"><a href="/">Github</a>/<a href="/">Google Fonts</a></span>
                <a href="/" className="downloadSection__license">Open SIL font license</a>
            </div>
        </Section>
    );
}