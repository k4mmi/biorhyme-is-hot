import "./Fun.scss"
import { useEffect, useState, useRef } from "react";

export function Fun() {

    const [symbol1, setSymbol1] = useState(6);
    const [symbol2, setSymbol2] = useState(9);

    const symbol1Element = useRef(null);
    const symbol2Element = useRef(null);

    useEffect(() => {
        
        function symbol1Function() {
            if (symbol1Element.current.innerHTML == "9") {
                setSymbol1(0);
            } else {
                setSymbol1(Number(symbol1Element.current.innerHTML) + 1);
            }
        }

        symbol1Element.current.addEventListener("click", symbol1Function);
        
        function symbol2Function() {
            if (symbol2Element.current.innerHTML == "9") {
                setSymbol2(0);
            } else {
                setSymbol2(Number(symbol2Element.current.innerHTML) + 1);
            }
        }
        
        symbol2Element.current.addEventListener("click", symbol2Function);

    }, []);

    return (
        <div className="fun">
            <div className="fun__animation">
                <div className="fun__ball"></div>
                <div className="fun__top">
                    <div className="fun__stick"></div>
                    <div className="fun__symbol1" ref={symbol1Element}>{symbol1}</div>
                    <div className="fun__symbol2" ref={symbol2Element}>{symbol2}</div>
                </div>
            </div>
        </div>
    );
}