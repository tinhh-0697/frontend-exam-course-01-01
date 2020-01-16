import React from "react";
import Topbar from "components/App/Topbar";
import Sidebar from "components/App/Sidebar";
import { useSelector } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";
import { Wrapper, Container, Main, Content } from "./styles";
import { HoldingScreen } from "components/HoldingScreen";
import { PRIMARY } from "constants/colors";

function Layout({ children, theme }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Wrapper>
      <Container fluid>
        {!isAuthenticated ? (
          <HoldingScreen>
            <SyncLoader
              color={PRIMARY}
              size={10}
            />
          </HoldingScreen>
        ) : (
          <>
            <Sidebar />
            <Main>
              <Topbar />
              <Content>{children}</Content>
            </Main>
          </>
        )}
      </Container>
    </Wrapper>
  );
}

export default Layout;
