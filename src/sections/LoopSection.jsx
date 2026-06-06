import { Section } from "../components/Section";
import { useEffect, useState, useRef } from "react";

import "./LoopSection.scss"

export function LoopSection() {

    const section = useRef(null);
    const picture = useRef(null);

    const [positionX, setPositionX] = useState();
    const [positionY, setPositionY] = useState();
    const [display, setDisplay] = useState("none");

    useEffect(() => {

        function handleMove() {
            const rect = section.current.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            setDisplay("flex");
            setPositionX(`${x - 400 / 2}px`)
            setPositionY(`${y - 266 / 2 +500}px`)
        };

        function handleLeave() {
            setDisplay("none");
        };

        section.current.addEventListener("mousemove", handleMove);
        section.current.addEventListener("mouseleave", handleLeave);

    }, []);

    return (
        <div className="loopSection" ref={section}>
            <div className="loopSection__container" ref={picture}>
                <_text />
                <_text />
                <_text />
                <_text />
            </div>
            <div className="loopSection__imgContainer">
                <img className="loopSection__img" style={{ top: positionY, left: positionX, display: display}} src="./assets/pexels-philevenphotos-21314036.webp" alt="Boston" />
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