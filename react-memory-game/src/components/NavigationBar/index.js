import React from "react";
// import MessageText from '../MessageText'
import "./style.css";


function NavigationBar(props) {
    return (
        <div>
            <ul className="nav nav-justified">
            <li className="nav-item">
            <h1 href="/">Clicky Game!</h1>
                    </li>
                <li className="nav-item">
                        <h1>{props.message}</h1>
                    </li>
                {/* <MessageText
                    message={props.message}
                    score={props.score}
                    topScore={props.topScore}
                /> */}
                    
                    <li className="nav-item">
                        <h1>{props.score} | {props.topScore}</h1>
                    </li>
                </ul>
        </div>
    );
}

export default NavigationBar;