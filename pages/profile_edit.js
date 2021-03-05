import Link from "next/link";
import Layout from "../components/common/Layout";
import ProfileEdit from "../components/profileedit/ProfileEdit";
import React from "react";
import Container from "@material-ui/core/Container";

const ProfileEditPage = () => (
  <Layout>
    <Container maxWidth="lg">
      <ProfileEdit />
    </Container>
  </Layout>
)

export default ProfileEditPage
