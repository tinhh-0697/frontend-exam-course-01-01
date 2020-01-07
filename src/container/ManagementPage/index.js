import React from "react";
import styled from "styled-components";
import Topbar from "components/Topbar/index";

import UserTable from "components/UserTable";
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

function ManagementPage() {
  return (
    <Container>
      <Sidebar />
      <Main>
        <Topbar />
        <Content>
          <UserTable />
        </Content>
      </Main>
    </Container>
  );
}

export default ManagementPage;
