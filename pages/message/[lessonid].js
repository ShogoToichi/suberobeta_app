import React from "react";
import Message from "../../components/message/Message";
import MessageAdd from "../../components/message/MessageAdd";
import Layout from "../../components/normal/Layout";

export default function message() {
  return (
    <div>
      <Layout>
        <Message />
        <MessageAdd />
      </Layout>
    </div>
  );
}
