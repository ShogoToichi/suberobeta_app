import Layout from "../components/common/Layout"
import SearchTest from "../components/searchTest2/SearchTest"
import AddData from "../components/searchTest2/AddData"
import zIndex from "@material-ui/core/styles/zIndex"
import { textAlign } from "@material-ui/system"
import { ArrowLeft } from "@material-ui/icons"

const IndexPage = () => (
  <Layout header="トップページ" title="Top Page.">
    <div style={{textAlign:"center"}}>
    <div style={{textAlign:"center",width:"600px",display:"inline-block", position:"relative"}}>
      <div style={{position:"absolute", top:"0px" ,width:"600px",zIndex:"8" ,textAlign:"center"}}>
    <SearchTest />
      </div>
    <div style={{position:"absolute" ,top:"180px" ,zIndex:"1"}}>
    <AddData/>
    </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
