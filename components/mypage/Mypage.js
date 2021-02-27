import MyLessonList from "./MyLessonList";
import React from "react";
import MyBuyLessonList from "./MyBuyLessonList"
import MyProfile from "./MyProfile";

export default function Mypage (){
  return(
    <div>
      <MyProfile/>
      <MyLessonList/>
      <MyBuyLessonList/>
    </div>
  );
}