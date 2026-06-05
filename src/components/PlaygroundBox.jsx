import "./PlaygroundBox.scss"
import { useEffect, useState, useRef } from "react";
import { animate, createScope, createDraggable } from "animejs";

export function PlaygroundBox({ children, design = "1" }) {

    const root = useRef(null);
    const scope = useRef(null);

    useEffect(() => {

        const $playgroundContainer = document.getElementById("playgroundContainer")

        scope.current = createScope({ root }).add(self => {

            createDraggable(root.current, {
                container: $playgroundContainer,
                containerFriction: .8,
                velocityMultiplier: .25,
            });

        });

        return () => scope.current.revert()

    }, []);

    return (
        <div className={`playgroundBox playgroundBox-${design}`} ref={root}>
            {children}
        </div>
    );
}