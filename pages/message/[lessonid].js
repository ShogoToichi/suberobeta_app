import React from "react"
import Message from "../../components/message/Message"
import MessageAdd from "../../components/message/MessageAdd"
import Layout from "../../components/common/Layout"

const message = () => (
  <Layout>
    <Message />
    <MessageAdd />
  </Layout>
)

export default message
