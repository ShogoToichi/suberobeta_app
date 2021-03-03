import React from "react"
import Img from "../../normal_parts/Img"

export default function Chat(props) {
  const userImg = {
    display: "inline-block",
    position: "absolute",
    top: "50px",
    left: "10px"
  }

  const username = {
    display: "inline-block",
    width: "200px",
    padding: "0px 0px 5px 5px",
    margin: "20px 0px 2px 60px",
    fontSize: "22px"
  }
  const style = {
    // border:"solid 1px #DDD",
    backgroundColor: "#E0E0E0",
    borderRadius: "7px",
    height: "40px",
    verticalAlign: "middle",
    padding: "10px 20px 0px 20px",
    fontSize: "20px",
    display: "inline-block",
    marginBottom: "10px",
    marginLeft: "68px"
  }
  const ImgDiv = {
    display: "inline-block",
    width: "30px",
    position: "absolute",
    top: "14px",
    left: "10px"
  }
  const chatdiv = {
    position: "relative"
  }

  return (
    <div style={chatdiv}>
      <div style={ImgDiv}>
        <Img src={props.imageurl} size="45" />
      </div>
      <p style={username}>{props.username}</p>
      <br></br>
      <div style={style}>{props.text}</div>
      <br />
    </div>
  )
}
