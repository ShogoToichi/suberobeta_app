import { Color } from "../static/colors"
import React, { useContext } from "react"

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
    backgroundColor: color.anotherGreen,
    width: "120px",
    height: "30px",
    color: "white",
    margin: "20px",
    padding: "20px"
  }

  return (
    <>
      <div style={test1}>bnbn hello youtube</div>

      <div style={test2}>こんにちは世界</div>
    </>
  )
}

export default Test
