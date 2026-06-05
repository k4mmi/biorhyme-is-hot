import "./Inspect.scss"
import { useEffect, useState, useRef } from "react";

export function Inspect() {

    let [text, setText] = useState(undefined);
    let [width, setWidth] = useState(undefined);
    let [weight, setWeight] = useState(undefined);
    const element = useRef(null);

    const texts = [
        "nya",
        "cat",
        "UTB",
        "FMK",
        "dog",
        "abc",
        "xyz",
        "www",
        "???",
        "!!!",
        "jáj",
        "{$}",
        "Why",
        "UwU",
        "zZZ",
        "WTF",
        "wow",
        "huh",
        "OMG",
        "XDD",
        ":DD",
        ":))",
        "sus",
        "123",
        "345",
        "678",
        "/xp",
        "OwO",
        "git",
        "css",
        "😊😊",
        "😲😲",
    ];

    useEffect(() => {

        function handleClick() {
            setText(texts[Math.floor(Math.random() * texts.length)])
            setWeight(Math.floor(Math.random() * 700) + 200)
        };

        element.current.addEventListener("click", handleClick);

    }, []);

    return (
        <div className="inspect" ref={element}>
            <InspectContainer zoom="1.5" design="2" text={text} width={width} weight={weight} />
            <InspectContainer design="1" text={text} />
        </div>
    );
}

function InspectContainer({ zoom = 1, design = 1, text = "abc", width = 100, weight = 500 }) {

    const element = useRef(null);

    const [maskPosition, setMaskPosition] = useState("1 center");

    useEffect(() => {

        function handleMove() {
            // console.log("nya");
            const rect = element.current.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            setMaskPosition(`calc(${x}px - 100vw) calc(${y}px - 100vw)`);
        };

        function handleLeave() {
            setMaskPosition(`0 0`);
        };

        element.current.addEventListener("mousemove", handleMove);

        element.current.addEventListener("mouseleave", handleLeave);

    }, []);

    return (
        <div className={`inspect__container inspect__container-${design}`} style={{ scale: zoom, maskPosition: maskPosition }} ref={element}>
            <span className={`inspect__text inspect__text-${design}`} style={{ fontWeight: weight, fontStretch: width }}>
                {text}
            </span>
        </div>
    );
}