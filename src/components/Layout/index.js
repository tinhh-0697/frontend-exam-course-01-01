import React from "react";
import Topbar from "components/App/Topbar";
import Sidebar from "components/App/Sidebar";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { Wrapper, Container, Main, Content } from "./styles";

function Layout({ children }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return (
      <div>...</div>
      // <ClipLoader
      //   // css={override}
      //   size={150}
      //   color={"#123abc"}
      // />
    );
  }

  return (
    <Wrapper>
      <Container fluid>
        <Sidebar />
        <Main>
          <Topbar />
          <Content>{children}</Content>
        </Main>
      </Container>
    </Wrapper>
  );
}

export default Layout;
