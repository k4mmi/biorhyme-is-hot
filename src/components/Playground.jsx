import "./Playground.scss"
import { useEffect, useState, useRef } from "react";
import { PlaygroundBox } from "./PlaygroundBox";

export function Playground() {

    return (
        <div className="playground" id="playgroundContainer">
            <PlaygroundBox design="2">U</PlaygroundBox>
            <PlaygroundBox design="1">F</PlaygroundBox>
            <PlaygroundBox design="2">t</PlaygroundBox>
            <PlaygroundBox design="1">M</PlaygroundBox>
            <PlaygroundBox design="2">b</PlaygroundBox>
            <PlaygroundBox design="1">k</PlaygroundBox>
        </div>
    );
}