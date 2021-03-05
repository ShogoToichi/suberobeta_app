import React from "react"

export default function Img(props) {
  let radius = (props.size * 1) / 2

  const img = {
    height: `${props.size}px`,
    width: `${props.size}px`,
    borderRadius: `${radius}px`,
    display: "inline-block"
  }

  return <img src={props.src} style={img}></img>
}
