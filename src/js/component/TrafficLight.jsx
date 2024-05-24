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
    const changeColor = () => {
        if (color === "red") {
            SetColor("green");
        } else if (color === "green") {
            SetColor("yellow");
        } else {
            SetColor("red");
        }
    };
    return (
        <div className="container d-flex mt-2">
            <div>
                <div className="baseTrafficLigth"></div>
                <div className="trafficLigth">
                    <div className={`red ${color === "red" ? "luz" : ""}`} onClick={() => handleClick("red")}></div>
                    <div className={`yellow ${color === "yellow" ? "luz" : ""}`} onClick={() => handleClick("yellow")}></div>
                    <div className={`green ${color === "green" ? "luz" : ""}`} onClick={() => handleClick("green")}></div>
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center">
                <button onClick={handleTurnOff}>Apagar la luz</button>
                <button onClick={changeColor}> Cambiar de Color</button>
            </div>
        </div>
    );

};
export default TrafficLight;
