import React from "react";
import "./style.css";

function MessageText(props) {
    return (
        <div>
            <div className="float-right mx-auto">
            <h2>{props.score} | {props.topScore}</h2>
            </div>
            <div className="float-right mx-auto">
            <h1>{props.message}</h1>
            </div>
        </div>
    );
}

export default MessageText;