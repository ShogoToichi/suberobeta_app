import Layout from "../components/common/Layout";
import TopContents from "../components/toppage/TopContents";
import Footer from "../components/toppage/Footer";

const TopPage = () => (
  <Layout header="トップページ" title="トップページ">
      <TopContents />
    <Footer footer="copy right by subero corp." />
  </Layout>
)

export default TopPage
