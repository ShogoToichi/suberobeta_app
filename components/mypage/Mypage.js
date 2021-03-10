import MyLessonList from "./MyLessonList"
import React from "react"
import MyProfile from "./MyProfile"
import MyMessageList from "./MyMessageList"
import Grid from "@material-ui/core/Grid"

const Mypage = () => (
  <Grid container deraction="row" justify="center">
    <Grid item xs={10} md={9} lg={7}>
      <MyProfile />
    </Grid>
    <Grid item xs={10} md={9} lg={7}>
      <MyLessonList />
    </Grid>
    <Grid item xs={10} md={9} lg={7}>
      <MyMessageList />
    </Grid>
  </Grid>
)

export default Mypage
