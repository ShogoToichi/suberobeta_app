import React from "react";
import Message from "../../components/Message";
import MessageAdd from "../../components/MessageAdd";
import Layout from "../../components/Layout";
import Account from "../../components/Account";


export default function message(){
  return(
    <div>
      <Layout>
        <Account/>
        <Message/>
        <MessageAdd/>
      </Layout>
    </div>
  )
}