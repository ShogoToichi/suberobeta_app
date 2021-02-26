import Link from "next/link";
import Layout from "../components/Layout";
import TopContents from "../componentsUi/ToppageUi";
import Lesson from "../components/Lesson";


export default () =>(
  <Layout header="トップページ" title="トップページ">
    <TopContents/>
  </Layout>
);