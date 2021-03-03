import Layout from "../components/normal/Layout";
import TopContents from "../components/toppage/TopContents";
import Footer from "../components/toppage/Footer";
import Grid from "@material-ui/core/Grid";

export default () => (
  <Layout header="トップページ" title="トップページ">
    <Grid container justify="center">
      <Grid item xs={12}>
        <TopContents />
      </Grid>
    </Grid>
    <Footer footer="copy right by subero corp." />
  </Layout>
);
