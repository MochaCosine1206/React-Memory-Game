import React from "react";
import "./style.css";


const ImageCard = props => {
    return (
        <div>
            <div 
            className="container" 
            key={props.id}
            onClick={()=> props.ifClicked(props.id, props.clicked)}>
            <img id={props.id} src={props.image} className="img-thumbnail shadow"/>
            </div>
        </div>
    );
}

export default ImageCard;


