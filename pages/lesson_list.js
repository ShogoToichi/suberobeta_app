import Link from "next/link";
import Layout from "../components/Layout";
import LessonList from "../components/LessonList";
import Lesson from "../components/Lesson";

export default () =>(
  <Layout>
    <LessonList/>
    <Lesson lessonid="8" name="beginner lesson" place="saitama uni" time="one hour" text="let's enjoy snowboard with me!" price="2000yen"/>
  </Layout>
);