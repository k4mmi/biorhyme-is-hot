import { animate, createScope, splitText, stagger, utils, onScroll } from "animejs";
import { Section } from "../components/Section";
import { useEffect, useState, useRef } from "react";
import "./LoopSection.scss"

export function LoopSection() {

    const section = useRef(null);
    const scope = useRef(null);
    const picture = useRef(null);

    const [positionX, setPositionX] = useState();
    const [positionY, setPositionY] = useState();
    const [display, setDisplay] = useState("none");

    useEffect(() => {

        scope.current = createScope({ root }).add(self => {
            function rotate() {
                console.log("If you are reading this... The city is Boston.");
            }
            section.current.addEventListener("click", rotate);
        });

        function handleMove() {
            const rect = section.current.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            setDisplay("flex");
            setPositionX(`${x - 400 / 2}px`)
            setPositionY(`${y - 266 / 2 + 500}px`)
        };

        function handleLeave() {
            setDisplay("none");
        };

        section.current.addEventListener("mousemove", handleMove);
        section.current.addEventListener("mouseleave", handleLeave);

        return () => scope.current.revert()

    }, []);

    return (
        <div className="loopSection" ref={section}>
            <div className="loopSection__container">
                <_text />
                <_text />
                <_text />
                <_text />
            </div>
            <div className="loopSection__imgContainer">
                <img className="loopSection__img" ref={picture} loading="lazy" fetchPriority="high" style={{ top: positionY, left: positionX, display: display }} src="./assets/pexels-philevenphotos-21314036.webp" alt="Boston" />
            </div>
        </div>
    );
}

function _text() {
    return (
        <div className="loopSection__abc">
            abcdefghijklmnopqrstuvwxyz
        </div>
    );
}