import { Section } from "../components/Section";
import { SymbolBox } from "../components/SymbolBox";
import { animate, createScope, splitText, stagger, utils, onScroll } from "animejs";
import { SymbolSection } from "../components/SymbolSection";
import { useEffect, useState, useRef } from "react";
import "./ShowcaseSection.scss"

export function ShowcaseSection() {

    const [symbol, setSymbol] = useState("a");

    const root = useRef(null);
    const scope = useRef(null);

    useEffect(() => {

        scope.current = createScope({ root }).add(self => {


            const $symbols = document.getElementsByClassName("symbolBox");


            Object.values($symbols).forEach((symbol) => {

                function changeValue() {
                    setSymbol(symbol.innerHTML)
                    // console.log(symbol.innerHTML);
                }

                symbol.addEventListener("mouseenter", changeValue);
                symbol.addEventListener("click", changeValue);
            });

            const $showcaseSectionWidth = document.getElementById("showcaseSectionWidth");
            const $showcaseSectionWeight = document.getElementById("showcaseSectionWeight");
            const $theSymbol = document.getElementById("theSymbol");

            function styleUpdate() {
                $theSymbol.style.fontStretch = `${$showcaseSectionWidth.value}%`;
                $theSymbol.style.fontWeight = $showcaseSectionWeight.value;
            }

            $showcaseSectionWidth.addEventListener('input', styleUpdate);
            $showcaseSectionWeight.addEventListener('input', styleUpdate);
        });

        return () => scope.current.revert()

    }, []);

    return (
        <Section className="showcaseSection" ref={root} sidePadding={0}>

            <div className="showcaseSection__wrapper showcaseSection__wrapper-symbolBoxes">

                <SymbolSection name="Letters">
                    <SymbolBox>a</SymbolBox>
                    <SymbolBox>b</SymbolBox>
                    <SymbolBox>c</SymbolBox>
                    <SymbolBox>d</SymbolBox>
                    <SymbolBox>e</SymbolBox>
                    <SymbolBox>f</SymbolBox>
                    <SymbolBox>g</SymbolBox>
                    <SymbolBox>h</SymbolBox>
                    <SymbolBox>i</SymbolBox>
                    <SymbolBox>j</SymbolBox>
                    <SymbolBox>k</SymbolBox>
                    <SymbolBox>l</SymbolBox>
                    <SymbolBox>m</SymbolBox>
                    <SymbolBox>n</SymbolBox>
                    <SymbolBox>o</SymbolBox>
                    <SymbolBox>p</SymbolBox>
                    <SymbolBox>q</SymbolBox>
                    <SymbolBox>r</SymbolBox>
                    <SymbolBox>s</SymbolBox>
                    <SymbolBox>t</SymbolBox>
                    <SymbolBox>u</SymbolBox>
                    <SymbolBox>v</SymbolBox>
                    <SymbolBox>w</SymbolBox>
                    <SymbolBox>x</SymbolBox>
                    <SymbolBox>y</SymbolBox>
                    <SymbolBox>z</SymbolBox>
                </SymbolSection>

                <SymbolSection name="Numbers">
                    <SymbolBox>0</SymbolBox>
                    <SymbolBox>1</SymbolBox>
                    <SymbolBox>2</SymbolBox>
                    <SymbolBox>3</SymbolBox>
                    <SymbolBox>4</SymbolBox>
                    <SymbolBox>5</SymbolBox>
                    <SymbolBox>6</SymbolBox>
                    <SymbolBox>7</SymbolBox>
                    <SymbolBox>8</SymbolBox>
                    <SymbolBox>9</SymbolBox>
                    <SymbolBox>½</SymbolBox>
                    <SymbolBox>¼</SymbolBox>
                </SymbolSection>

                <SymbolSection name="Emojis">
                    <SymbolBox>😊</SymbolBox>
                    <SymbolBox>😲</SymbolBox>
                    <SymbolBox>😨</SymbolBox>
                    <SymbolBox>😐</SymbolBox>
                    <SymbolBox>😞</SymbolBox>
                    <SymbolBox>😡</SymbolBox>
                    <SymbolBox>😠</SymbolBox>
                </SymbolSection>

                <SymbolSection name="Brackets">
                    <SymbolBox>&#123;</SymbolBox>
                    <SymbolBox>&#125;</SymbolBox>
                    {/* <SymbolBox>&#60;</SymbolBox>
                    <SymbolBox>&#62;</SymbolBox> */}
                    <SymbolBox>&#40;</SymbolBox>
                    <SymbolBox>&#41;</SymbolBox>
                    <SymbolBox>&#91;</SymbolBox>
                    <SymbolBox>&#93;</SymbolBox>
                </SymbolSection>

                <SymbolSection name="Other">
                    <SymbolBox>ß</SymbolBox>
                    <SymbolBox>#</SymbolBox>
                    {/* <SymbolBox>&</SymbolBox> */}
                    <SymbolBox>@</SymbolBox>
                    <SymbolBox>$</SymbolBox>
                    <SymbolBox>€</SymbolBox>
                    <SymbolBox>§</SymbolBox>
                    <SymbolBox>¶</SymbolBox>
                    {/* <SymbolBox>ø</SymbolBox> */}
                    <SymbolBox>%</SymbolBox>
                    <SymbolBox>+</SymbolBox>
                    <SymbolBox>-</SymbolBox>
                    <SymbolBox>&#215;</SymbolBox>
                    <SymbolBox>÷</SymbolBox>
                    <SymbolBox>.</SymbolBox>
                    <SymbolBox>!</SymbolBox>
                    <SymbolBox>?</SymbolBox>
                    <SymbolBox>,</SymbolBox>
                    <SymbolBox>©</SymbolBox>
                    <SymbolBox>®</SymbolBox>
                    <SymbolBox>~</SymbolBox>
                    <SymbolBox>“</SymbolBox>
                    <SymbolBox>”</SymbolBox>
                    <SymbolBox>∞</SymbolBox>

                </SymbolSection>

            </div>

            <div className="showcaseSection__wrapper showcaseSection__wrapper-symbol">
                <span className="showcaseSection__theSymbol" id="theSymbol">{symbol}</span>

                <div className="showcaseSection__fullInput">
                    <span className="showcaseSection__start">100</span>
                    <input className="showcaseSection__input" id="showcaseSectionWidth" type="range" min="100" max="125" defaultValue="100" step={0.01} />
                    <span className="showcaseSection__end aboutSection__end-weight">125</span>
                </div>
                <div className="showcaseSection__fullInput">
                    <span className="showcaseSection__start ">200</span>
                    <input className="showcaseSection__input" id="showcaseSectionWeight" type="range" min="200" max="900" defaultValue="500" step={0.01} />
                    <span className="showcaseSection__end">900</span>
                </div>
            </div>

        </Section>
    );
}