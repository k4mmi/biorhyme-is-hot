import { Section } from "../components/Section";
import "./AboutSection.scss"
import { useEffect, useState, useRef } from "react";
import { animate, createScope, splitText, stagger, utils, onScroll } from "animejs";

export function AboutSection() {

    const root = useRef(null);
    const scope = useRef(null);

    useEffect(() => {

        scope.current = createScope({ root }).add(self => {

            const { words } = splitText(root.current, {
                words: {
                    wrap: 'clip',
                    class: 'aboutSection__word',
                },
                includeSpaces: true,
            })

            animate(words, {
                y: ['100%', '0%'],
                duration: 750,
                ease: 'out(3)',
                delay: stagger(50),
                autoplay: onScroll({
                    enter: 'bottom-=200 top',
                    // debug: true,
                    leave: 'top+=-4000 bottom',
                })
                // loop: true,
            });

            const $aboutSectionWidth = document.getElementById("aboutSectionWidth");
            const $aboutSectionWeight = document.getElementById("aboutSectionWeight");
            const $words = document.getElementsByClassName("aboutSection__word");

            function styleUpdate() {
                console.log($aboutSectionWidth.value);
                
                Object.values($words).forEach((word) => {
                    word.style.fontStretch = `${$aboutSectionWidth.value}%`;
                    word.style.fontWeight = $aboutSectionWeight.value;
                });
            }

            $aboutSectionWidth.addEventListener('input', styleUpdate);
            $aboutSectionWeight.addEventListener('input', styleUpdate);

        });

        return () => scope.current.revert()

    }, []);

    return (
        <Section className="aboutSection">
            <div className="aboutSection__inputWrapper" id="about">
                <div className="aboutSection__fullInput">
                    <span className="aboutSection__start">100</span>
                    <input className="aboutSection__input" id="aboutSectionWidth" type="range" min="100" max="125" defaultValue="100" step={0.01} />
                    <span className="aboutSection__end aboutSection__end-weight">125</span>
                </div>
                <div className="aboutSection__fullInput">
                    <span className="aboutSection__start ">200</span>
                    <input className="aboutSection__input" id="aboutSectionWeight" type="range" min="200" max="900" defaultValue="500" step={0.01} />
                    <span className="aboutSection__end">900</span>
                </div>
            </div>
            <p className="aboutSection__text" style={{ color: "red" }} ref={root}>This is a&nbsp;slab serif family loosely based on Boston Breton and a&nbsp;sample 'R' from a&nbsp;Conner's type foundry specimen, by Aoife Mooney.</p>
        </Section>
    );
}