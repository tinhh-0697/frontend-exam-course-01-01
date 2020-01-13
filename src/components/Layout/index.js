import React from "react";
import styled from "styled-components";
import Topbar from "components/Topbar/index";
import Sidebar from "components/Sidebar";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

const Container = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.background};
  height: 100vh;
`;

const Main = styled.div`
  width: 100%;
`;

const Content = styled.div`
  margin: 30px;
`;

function Layout({ children }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return (
      <ClipLoader
        // css={override}
        size={150}
        color={"#123abc"}
      />
    );
  }

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
