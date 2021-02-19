import Link from "next/link";
import Layout from "../components/Layout";
import LessonInfo from "../components/LessonInfo";
import Profile from "../components/Profile";


export default () =>(
  <Layout>
    <LessonList/>
    <Profile/>
  </Layout>
);