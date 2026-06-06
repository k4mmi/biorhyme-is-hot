import { Section } from "../components/Section";
import "./FooterSection.scss"

export function FooterSection() {
    return (
        <footer className="footerSection">
            <Section className="footerSection__section">
                <div className="footerSection__wrapper">
                    <h2 className="footerSection__header">About this website:</h2>
                    <p className="footerSection__paragraph">This website was created as a final project at the end of the semester. Not affiliated with original author of this typeface. Made with love in React (without GenAI).</p>
                    <p className="footerSection__idk"> <a href="https://unlicense.org/#the-unlicense" target="_blank">Unlicense</a>, <a href="https://github.com/k4mmi/biorhyme-is-hot" target="_blank">GitHub_repository</a></p>
                </div>
                <div className="footerSection__wrapper">
                    <h2 className="footerSection__header">Author of this awesome typeface:</h2>
                    <p className="footerSection__author">Aoife Mooney 😊</p>
                </div>
            </Section>
        </footer>
    );
}