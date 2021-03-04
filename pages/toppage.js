import Layout from "../components/common/Layout"
import TopContents from "../components/topPage/TopContents"
import Footer from "../components/topPage/Footer"
import Grid from "@material-ui/core/Grid"

const TopPage = () => (
  <Layout header="トップページ" title="トップページ">
    <Grid container justify="center">
      <Grid item xs={12}>
        <TopContents />
      </Grid>
    </Grid>
    <Footer footer="copy right by subero corp." />
  </Layout>
)

export default TopPage
