import { Section } from "../components/Section";
import { BoxContainer } from "../components/BoxContainer";
import "./BoxesSection.scss"
import { Fun } from "../components/Fun";
import { Playground } from "../components/Playground";
import { useState, useEffect, useRef } from "react";
import { Inspect } from "../components/Inspect";

export function BoxesSection() {

    const closed = "66px";
    const opened = "100%";

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const [width1, setWidth1] = useState(opened);
    const [width2, setWidth2] = useState(closed);
    const [width3, setWidth3] = useState(closed);

    useEffect(() => {

        const $window = root.current;

        function openClose1() {
            setWidth1(opened);
            setWidth2(closed);
            setWidth3(closed);
        }

        function openClose2() {
            setWidth1(closed);
            setWidth2(opened);
            setWidth3(closed);
        }

        function openClose3() {
            setWidth1(closed);
            setWidth2(closed);
            setWidth3(opened);
        }

        ref1.current.addEventListener("click", openClose1);
        ref2.current.addEventListener("click", openClose2);
        ref3.current.addEventListener("click", openClose3);

    }, []);

    return (
        <Section className="boxesSection">
            <BoxContainer ref={ref1} width={width1} name="Fun" hint="Click on the number to change it."><Fun /></BoxContainer>
            <BoxContainer ref={ref2} width={width2} name="Playground" hint="You can move the boxes."><Playground /></BoxContainer>
            <BoxContainer ref={ref3} width={width3} name="Inspect" hint="Click to change text." mobile="hide"><Inspect /></BoxContainer>
        </Section>
    );
}