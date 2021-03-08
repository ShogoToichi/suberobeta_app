import Layout from "../components/common/Layout"
import SearchTest from "../components/searchTest2/SearchTest"
import AddData from "../components/searchTest2/AddData"

const IndexPage = () => (
  <Layout header="トップページ" title="Top Page.">
    <div style={{textAlign:"center"}}>
    <div style={{textAlign:"center",width:"600px",display:"inline-block"}}>
    <SearchTest />
    <AddData/>
    </div>
    </div>
  </Layout>
)

export default IndexPage
