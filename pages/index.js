import Layout from "../components/common/Layout"
import Test from "../components/commonParts/Img"
import Grid from "@material-ui/core/Grid"

const IndexPage = () => (
  <Layout header="トップページ" title="Top Page.">
    <Test src="../static/snowboard.jpg" size="100" />
  </Layout>
)

export default IndexPage
