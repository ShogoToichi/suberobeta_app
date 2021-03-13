import Layout from "../../components/common/Layout"
import ProfileShow from "../../components/profileShow/ProfileShow"
import ProfileLessonList from "../../components/profileShow/ProfileLessonList"
import Grid from "@material-ui/core/Grid"

const LessonListPage = () => (
  <Layout>
    <Grid container deraction="row" justify="center">
      <Grid item xs={10} sm={8} lg={7}>
        <ProfileShow />
      </Grid>
      <Grid item xs={10} sm={8} lg={7}>
        <ProfileLessonList />
      </Grid>
    </Grid>
  </Layout>
)

export default LessonListPage
