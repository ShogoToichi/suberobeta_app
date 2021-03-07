import { Color } from "../static/colors"
import React, { useContext } from "react"
import { height } from "@material-ui/system"

const Test = () => {
  const color = useContext(Color).colors

  const test1 = {
    backgroundColor: useContext(Color).colors.header,
    width: "120px",
    height: "30px",
    color: "white",
    margin: "20px",
    padding: "20px"
  }

  const test2 = {
    backgroundColor: color.Green,
    width: "120px",
    height: "30px",
    color: "white",
    margin: "20px",
    padding: "20px"
  }
  const test3 = {
    backgroundColor:"white",
    border:"solid #AFA 3pt",
    borderRadius:"10pt",
    height:"20px",
    width:"20px",
  }

  const div1 = {
    marginLeft:"70px",
    position:"relative",
  }

  return (
    <>
      <div style={test1}>bnbn hello youtube</div>

      <div style={test2}>こんにちは世界</div>
     
     
      <div className="loading_box">
      <div className="loading_circle"></div>
      <div className="loading_blank"></div>
      <span className="loading_text">Loading...</span>
      </div>
    </>
  )
}

export default Test
