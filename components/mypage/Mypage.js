import MyLessonList from "./MyLessonList"
import React from "react"
// import MyBuyLessonList from "./MyBuyLessonList"
import MyProfile from "./MyProfile"
import MyMessageList from "./MyMessageList"

const Mypage = () => (
  <>
    <MyProfile />
    <MyLessonList />
    <MyMessageList />
    {/* <MyBuyLessonList /> */}
  </>
)

export default Mypage
