import Layout from "../components/normal/Layout";
import LessonList from "../components/lessonlist/LessonList";
import Container from "@material-ui/core/Container";

export default () => (
  <Layout>
    <Container maxWidth="lg">
      <LessonList />
    </Container>
  </Layout>
);
