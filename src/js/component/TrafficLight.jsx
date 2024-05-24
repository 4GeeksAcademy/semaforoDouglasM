import React, { useState } from "react";
import "/workspaces/semaforoDouglasM/src/styles/index.css";


const TrafficLight = () => {

    const [color, SetColor] = useState("null");

    const handleClick = (colorClick) => {
        SetColor(colorClick);
    };
    const handleTurnOff = () => {
        SetColor(null);
    };
        return (
            <div className="container mt-2">
                <div className="baseTrafficLigth"></div>
                <div className="trafficLigth">
                    <div className={`red ${color === "red" ? "luz" : ""}`} onClick={() => handleClick("red")}></div>
                    <div className={`yellow ${color === "yellow" ? "luz" : ""}`} onClick={() => handleClick("yellow")}></div>
                    <div className={`green ${color === "green" ? "luz" : ""}`} onClick={() => handleClick("green")}></div>
                </div>
                <div>
                    <button onClick={handleTurnOff}>Apagar la luz</button>
                </div>
            </div>
        );

    };
    export default TrafficLight;
