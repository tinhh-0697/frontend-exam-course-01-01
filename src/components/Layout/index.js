import React from "react";
import styled from "styled-components";
import Topbar from "components/Topbar/index";
import Sidebar from "components/Sidebar";

const Container = styled.div`
  display: flex;
  background-color: #f1f3f5;
  height: 100vh;
`;

const Main = styled.div`
  width: 100%;
`;

const Content = styled.div`
  margin: 30px;
`;

function Layout({ children }) {
  return (
    <Container>
      <Sidebar />
      <Main>
        <Topbar />
        <Content>{children}</Content>
      </Main>
    </Container>
  );
}

export default Layout;
