import Layout from "../../components/common/Layout"
import LessonInfo from "../../components/lessoninfo/LessonInfo"
import Container from "@material-ui/core/Container";

const LessonListPage = () => (
  <Layout>
    <Container maxWidth="lg">
    <LessonInfo />
    </Container>
  </Layout>
)

export default LessonListPage
