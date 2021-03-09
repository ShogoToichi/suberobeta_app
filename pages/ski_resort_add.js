import Layout from "../components/common/Layout"
import SearchTest from "../components/searchTest/SearchTest"
import AddData from "../components/searchTest/AddData"

const IndexPage = () => (
  <Layout header="トップページ" title="Top Page.">
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          textAlign: "center",
          width: "600px",
          display: "inline-block",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            width: "600px",
            zIndex: "8",
            textAlign: "center"
          }}
        >
          <SearchTest />
        </div>
        <div style={{ position: "absolute", top: "180px", zIndex: "1" }}>
          <AddData />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

