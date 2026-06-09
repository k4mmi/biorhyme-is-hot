import "./HomeSection.scss"
import { Section } from "../components/Section";
import { useEffect, useState, useRef } from "react";
import { animate, createScope, splitText, stagger, utils } from "animejs";

export function HomeSection() {

    const root = useRef(null);
    const frame = useRef(null);
    const scope = useRef(null);
    
    const [frameOpacity, setFrameOpacity] = useState(1);

    useEffect(() => {

        scope.current = createScope({ root }).add(self => {

            const { chars } = splitText(root.current, {
                chars: { wrap: 'clip' },
            });

            chars.forEach((element) => {

                function mouseenterFunction() {
                    const selectedChar = Number(element.getAttribute("data-char"));
                    // console.log(chars[selectedChar]);
                    // console.log(chars[selectedChar - 1]);

                    animate(chars[selectedChar], {
                        fontStretch: `125%`,
                        fontWeight: `900`,
                        duration: 100,
                        ease: 'outIn',
                        loop: false,
                        autoplay: true,
                    });

                    animate(chars[selectedChar - 1], {
                        fontStretch: `120%`,
                        fontWeight: `550`,
                        duration: 100,
                        ease: 'outIn',
                        loop: false,
                        autoplay: true,
                    });

                    animate(chars[selectedChar + 1], {
                        fontStretch: `120%`,
                        fontWeight: `550`,
                        duration: 100,
                        ease: 'outIn',
                        loop: false,
                        autoplay: true,
                    });

                    animate(chars[selectedChar - 2], {
                        fontStretch: `115%`,
                        fontWeight: `400`,
                        duration: 100,
                        ease: 'outIn',
                        loop: false,
                        autoplay: true,
                    });

                    animate(chars[selectedChar + 2], {
                        fontStretch: `115%`,
                        fontWeight: `400`,
                        duration: 100,
                        ease: 'outIn',
                        loop: false,
                        autoplay: true,
                    });
                }
                element.addEventListener("mouseenter", mouseenterFunction);

                function mouseleaveFunction() {
                    const selectedChar = Number(element.getAttribute("data-char"));
                    // console.log(selectedChar);

                    animate(chars[selectedChar], {
                        fontStretch: `110%`,
                        fontWeight: `300`,
                        duration: 200,
                        ease: 'outIn',
                        loop: false,
                        autoplay: true,
                    });

                    animate(chars[selectedChar - 1], {
                        fontStretch: `110%`,
                        fontWeight: `300`,
                        duration: 200,
                        ease: 'outIn',
                        loop: false,
                        autoplay: true,
                    });

                    animate(chars[selectedChar + 1], {
                        fontStretch: `110%`,
                        fontWeight: `300`,
                        duration: 200,
                        ease: 'outIn',
                        loop: false,
                        autoplay: true,
                    });

                    animate(chars[selectedChar - 2], {
                        fontStretch: `110%`,
                        fontWeight: `300`,
                        duration: 200,
                        ease: 'outIn',
                        loop: false,
                        autoplay: true,
                    });

                    animate(chars[selectedChar + 2], {
                        fontStretch: `110%`,
                        fontWeight: `300`,
                        duration: 200,
                        ease: 'outIn',
                        loop: false,
                        autoplay: true,
                    });

                }
                element.addEventListener("mouseleave", mouseleaveFunction);

                // setTimeout(() => {
                //     animate(chars, {
                //         filter: ["blur(10px)", "blur(0px)"],
                //         scale: [.0, 1],
                //         opacity: [0, 1],
                //         duration: 150,
                //         ease: 'out(3)',
                //         delay: stagger(10),
                //     });
                // }, 2000)

                return () => {
                    removeEventListener("mouseleave", mouseleaveFunction);
                    removeEventListener("mouseenter", mouseenterFunction);
                }
            });

        });


        function scrollHandle() {

            if (window.scrollY <= 20) {
                setFrameOpacity(1);
            } else {
                setFrameOpacity(0);
            }

        }

        document.addEventListener("scroll", scrollHandle)

        return () => scope.current.revert()

    }, []);


    return (
        <Section className="homeSection" sidepadding={0}>
            <img className="homeSection__circle" src="./assets/circle2.svg" alt="Very cool circle effect" loading="lazy" fetchPriority="high" />
            <div className="homeSection__grid"></div>
            <h1 className="homeSection__heading" ref={root}>
                BioRhyme
            </h1>
            <a href="#about" className="homeSection__arrow" title="Scroll down">
                <img src="./assets/arrow.svg" alt="Very cool circle effect" loading="lazy" fetchPriority="high" />
            </a>

            <div className="homeSection__frame" ref={frame} style={{ opacity: frameOpacity }}>
                <div className="homeSection__subFrame">
                    <img src="./assets/corner.svg" className="homeSection__corner homeSection__corner-topLeft" loading="lazy" fetchPriority="high" />
                    <img src="./assets/corner.svg" className="homeSection__corner homeSection__corner-topRight" loading="lazy" fetchPriority="high" />
                    <img src="./assets/corner.svg" className="homeSection__corner homeSection__corner-bottomRight" loading="lazy" fetchPriority="high" />
                    <img src="./assets/corner.svg" className="homeSection__corner homeSection__corner-bottomLeft" loading="lazy" fetchPriority="high" />
                </div>
            </div>


        </Section>
    );
}