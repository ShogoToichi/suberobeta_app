import Layout from "../components/normal/Layout";
import Mypage from "../components/mypage/Mypage";
import Container from "@material-ui/core/Container";

export default () => (
  <Layout>
    <Container maxWidth="lg">
      <Mypage />
    </Container>
  </Layout>
);
