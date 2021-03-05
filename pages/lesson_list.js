import Layout from "../components/common/Layout";
import LessonList from "../components/lessonlist/LessonList";
import Container from "@material-ui/core/Container";

const LessonListPage = () => (
  <Layout>
    <Container maxWidth="lg">
      <LessonList />
    </Container>
  </Layout>
)
export default LessonListPage
