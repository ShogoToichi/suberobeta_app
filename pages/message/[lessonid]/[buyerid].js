import React from "react"
import Message from "../../../components/message/Message"
import Layout from "../../../components/common/Layout"
import Container from "@material-ui/core/Container"


const message = () => (
  <Layout>
    <Container maxWidth="lg">
    <Message />
    </Container>
  </Layout>
)

export default message
