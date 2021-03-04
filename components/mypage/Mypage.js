import MyLessonList from "./MyLessonList"
import React from "react"
// import MyBuyLessonList from "./MyBuyLessonList"
import MyProfile from "./MyProfile"
import MyMessageList from "./MyMessageList"

export default function Mypage() {
  return (
    <div>
      <MyProfile />
      <MyLessonList />
      <MyMessageList />
      {/* <MyBuyLessonList /> */}
    </div>
  )
}
