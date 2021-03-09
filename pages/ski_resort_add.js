import Layout from "../components/common/Layout"
import AddData from "../components/skiResortAdd/SkiResortAdd"

const IndexPage = () => (
  <Layout header="トップページ" title="Top Page.">
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          textAlign: "center",
          width: "580px",
          display: "inline-block",
          marginBottom:"100px",
        }}
      >
          <AddData />
      </div>
    </div>
  </Layout>
)

export default IndexPage

