import Layout from "../components/normal/Layout";
import TopContents from "../components/toppage/TopContents";
import Footer from "../components/toppage/Footer";


export default () =>(
  <Layout header="トップページ" title="トップページ">
    <TopContents/>
    <Footer footer="copy right by subero corp."/>
  </Layout>
);