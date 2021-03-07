//トップページのコンテンツ
import React from "react"
import Caption from "./parts/Caption"
import Description from "./parts/Descriotion"
import classNames from "classnames" // nodejs library that concatenates classes
import { makeStyles } from "@material-ui/core/styles"

const TopPage = () => (
  <>
    <Caption />
    <Description />
  </>
)

export default TopPage
