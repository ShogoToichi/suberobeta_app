import Link from "next/link";
import Layout from "../components/Layout";
import TopContents from "../components/TopContents";
import Fire from "../components/Fire";
import Redux from "../components/Redux";

export default () =>(
  <Layout header="トップページ" title="Top page.">
    <TopContents/>
    <Redux/>
  </Layout>
);