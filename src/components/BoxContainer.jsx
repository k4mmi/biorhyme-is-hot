import "./BoxContainer.scss"
import { useState, useEffect, useRef } from "react";

export function BoxContainer({ children, name = "box_name", width = "100%", ref, hint = "the_hint", mobile = "show"}) {

    return (
        <section className={`boxContainer boxContainer-${mobile}`} style={{ width: width }}>
            <div className="boxContainer__windowDecoration" ref={ref}>
                <span className="boxContainer__name">
                    {name}
                </span>
                <div className="boxContainer__open">
                    <span className="boxContainer__openText">
                        Click to open
                    </span>
                </div>
            </div>
            <div className="boxContainer__content">
                <span className="boxContainer__hint">{hint}</span>
                {children}
            </div>
        </section>
    );
}