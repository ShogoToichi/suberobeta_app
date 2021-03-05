import Layout from "../components/common/Layout";
import LessonAdd from "../components/lessonadd/LessonAdd";
import Container from "@material-ui/core/Container";

const LessonAddPage = () => (
  <Layout>
    <Container maxWidth="lg">
      <LessonAdd />
    </Container>
  </Layout>
)

export default LessonAddPage
