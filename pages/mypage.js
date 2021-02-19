import Link from "next/link";
import Layout from "../components/Layout";
import Mypage from "../components/MyLessonList";
import Account from "../components/Account";


export default () =>(
  <Layout>
    <Account/>
    <Mypage/>
  </Layout>
);