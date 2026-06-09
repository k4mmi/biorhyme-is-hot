import { Section } from "../components/Section";
import "./DownloadSection.scss"

export function DownloadSection() {
    return (
        <Section className="downloadSection" sidepadding={0}>
            <img className="downloadSection__circle" src="./assets/circle2-alt2.svg" alt="Very cool circle effect" loading="lazy" fetchPriority="high" />
            <div className="downloadSection__grid"></div>
            <a href="https://github.com/aoifemooney/makingbiorhyme/tree/b3c0488559ad7c42e11b71e65d255344faff63b9/fonts" target="_blank" className="downloadSection__download">Download</a>
            <div className="downloadSection__info">
                <span className="downloadSection__links"><a href="https://github.com/aoifemooney/makingbiorhyme" target="_blank">Github</a>/<a href="https://fonts.google.com/specimen/BioRhyme">Google Fonts</a></span>
                <a href="https://raw.githubusercontent.com/aoifemooney/makingbiorhyme/refs/heads/gh-pages/OFL.txt" target="_blank" className="downloadSection__license">Open SIL font license</a>
            </div>
        </Section>
    );
}