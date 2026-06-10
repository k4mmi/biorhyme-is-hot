import { Section } from "../components/Section";
import { useEffect, useState, useRef } from "react";
import "./ScrollAboutSection.scss"

export function ScrollAboutSection() {

    const [translateValue, setTranslateValue] = useState(0)

    useEffect(() => {

        const $scrollAboutSection = document.getElementById("scrollAboutSection");
        const $scrollAboutSectionSticky = document.getElementById("scrollAboutSectionSticky");

        function handleScroll() {
            const elementPos = -$scrollAboutSection.getBoundingClientRect().top; // How far is "$scrollAboutSection"
            const elementHeight = $scrollAboutSection.offsetHeight; // "$scrollAboutSection"' height
            const sectionElementHeight = $scrollAboutSectionSticky.offsetHeight; // "$scrollAboutSectionSticky"' height
            const timeline = elementHeight + sectionElementHeight / 2; // How long I can scroll
            const timelineCut = timeline / 3 - sectionElementHeight / 2; // Five texts

            if (elementPos >= 0 && elementPos < (timelineCut * 1)) {
                setTranslateValue(0);
            } else if (elementPos >= (timelineCut * 1) && elementPos < (timelineCut * 2)) {
                setTranslateValue(1);
            } else if (elementPos >= (timelineCut * 2) && elementPos < (timelineCut * 3)) {
                setTranslateValue(2);
            }
        };

        window.addEventListener("scroll", handleScroll);

    }, []);


    return (
        <Section className="scrollAboutSection" background="#222222" id="scrollAboutSection" sidepadding={0}>
            <div className="scrollAboutSection__sticky" id="scrollAboutSectionSticky">
                <img className="scrollAboutSection__circle" src="./assets/circle2-alt.svg" alt="Very cool circle effect" loading="lazy" fetchPriority="high" />
                <div className="scrollAboutSection__grid"></div>
                <div className="scrollAboutSection__textContainer">
                    <span className="scrollAboutSection__text" style={{ translate: `0 -${translateValue * 200}px` }}>
                        <span className="scrollAboutSection__textSpan scrollAboutSection__textSpan-1">A variable font</span>
                        <br />
                        <span className="scrollAboutSection__textSpan scrollAboutSection__textSpan-2">on two axes,</span>
                        <br />
                        <span className="scrollAboutSection__textSpan scrollAboutSection__textSpan-3">width and weignt.</span>
                    </span>
                </div>
            </div>
        </Section>
    );
}



