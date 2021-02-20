import Link from "next/link";
import Layout from "../components/Layout";
import TopContents from "../components/TopContents";
import Fire from "../components/Fire";
import Redux from "../components/Redux";
import Account from "../components/Account";

export default () =>(
  <Layout header="トップページ" title="Top page.">
    <Account/>
    <TopContents/>
  </Layout>
);