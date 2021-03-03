import Layout from "../components/normal/Layout";
import TopContents from "../components/toppage/TopContents";
import Footer from "../components/toppage/Footer";
import Container from "@material-ui/core/Container";

export default () => (
  <Layout header="トップページ" title="トップページ">
    <Container maxWidth="lg">
      <TopContents />
    </Container>
    <Footer footer="copy right by subero corp." />
  </Layout>
);
