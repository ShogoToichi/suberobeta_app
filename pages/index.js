import Layout from "../components/Layout";
import TopContents from "../components/TopContents";
import Account from "../components/Account";

export default () =>(
  <Layout header="トップページ" title="Top page.">
    <Account/>
    <TopContents/>
  </Layout>
);