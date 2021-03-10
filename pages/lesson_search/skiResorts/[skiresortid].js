import React from "react"
import Layout from "../../../components/common/Layout"
import SearchLessonList from "../../../components/lessonSearch/skiResorts/SearchLessonList"
import Container from "@material-ui/core/Container"

export default function SkiResortId() {
  return (
    <>
      <Layout>
    <Container maxwidth="1g">
        <SearchLessonList />
    </Container>
      </Layout>
    </>
  )
}
