import MyLessonList from "./MyLessonList";
import React from "react";
import MyBuyLessonList from "./MyBuyLessonList"

export default function Mypage (){
  return(
    <div>
      <MyLessonList/>
      <MyBuyLessonList/>
    </div>
  );
}