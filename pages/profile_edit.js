import Link from "next/link";
import Layout from "../components/normal/Layout";
import ProfileEdit from "../components/profileedit/ProfileEdit";
import React from "react";
import Container from "@material-ui/core/Container";

export default () => (
  <Layout>
    <Container maxWidth="lg">
      <ProfileEdit />
    </Container>
  </Layout>
);
