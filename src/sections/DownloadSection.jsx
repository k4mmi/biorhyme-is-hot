import { Section } from "../components/Section";
import "./DownloadSection.scss"

export function DownloadSection() {
    return (
        <Section className="downloadSection">
            <a href="/" className="downloadSection__download">Download</a>
            <div className="downloadSection__info">
                <span className="downloadSection__links"><a href="https://github.com/aoifemooney/makingbiorhyme">Github</a>/<a href="https://fonts.google.com/specimen/BioRhyme">Google Fonts</a></span>
                <a href="https://github.com/aoifemooney/makingbiorhyme/tree/b3c0488559ad7c42e11b71e65d255344faff63b9/fonts" className="downloadSection__license">Open SIL font license</a>
            </div>
        </Section>
    );
}