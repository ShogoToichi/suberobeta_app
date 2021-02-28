import React from "react";

export default function Img(props){

    const radius = props.size*1/2;
    
    const img={
            height:`${props.size}px`,
            width:`${props.size}px`,
            borderRadius:`${radius}px`,
            position:"absolute",
            top:"155px",
            left:"4px",
        }
    
    return(
        <img src={props.src} size={props.size} style={img}></img>
    );

}