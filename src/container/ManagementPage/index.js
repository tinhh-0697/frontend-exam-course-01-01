import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logOutAction } from "../../actions/authActions";
import { Table, Button } from "reactstrap";
import Navigation from "../../components/Navigation";
import Logo from "../../components/Logo";
import Topbar from "../../components/Topbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  background-color: #f1f3f5;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 350px;
  background: #fff;
`;

const Main = styled.div`
  width: 100%;
`;

const Content = styled.div`
  margin: 30px;
`;

const AddButton = styled(Button)`
  display: flex!important;
  justify-content: center;
  width: 157px;
  height: 51px;
  background: #38c6da!important;
  border: none!important;
`;

const AddButtonText = styled.div`
  color: #fff;
  margin-right: 15px;
`

const AddButtonIcon = styled.div`
`

// const Table = styled.div`
//   background: #fff;
// `;
const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const TableTitle = styled.h4`
  font-size: 20px;
  color: #555;
`;

const TableContent = styled.div``;

const TableWrap = styled.div`
  background: #fff;
  border-radius: 5px;
`;

const Tr = styled.tr`
  && {
    &:nth-child(even) {
      background-color: #F1F3F5;
    }
  }
`;

const Th = styled.th`
  && {
    padding: 25px 0;
    font-size: 17px;
    color: #555;
    border-top: 0;
    border-bottom: 1px solid #EAECED;
  }
`;

const Td = styled.td`
  && {
    margin: 12px 0;
    padding: 10px 0;
    border-bottom: 0;
  }
`;

function ManagementPage() {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logOutAction());

  return (
    <Container>
      <Sidebar>
        <Logo />
        <Navigation />
      </Sidebar>
      <Main>
        <Topbar />
        <Content>
          <TableWrap>
            <TableHead>
            <TableTitle>Articles</TableTitle>
            <AddButton>
              <AddButtonText>Add new</AddButtonText>
              <AddButtonIcon><FontAwesomeIcon icon={faPlus} /></AddButtonIcon>
            </AddButton>
            </TableHead>
            <TableContent>
              <Table>
                <thead>
                  <tr>
                    <Th>No.</Th>
                    <Th>Name</Th>
                    <Th>Views</Th>
                    <Th>Status</Th>
                    <Th>Options</Th>
                  </tr>
                </thead>
                <tbody>
                  <Tr>
                    <Td>1</Td>
                    <Td>Creating Remarkable Poster...</Td>
                    <Td>2,567</Td>
                    <Td>check</Td>
                    <Td>
                      <Button>Edit</Button>
                      <Button>Delete</Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>1</Td>
                    <Td>Creating Remarkable Poster...</Td>
                    <Td>2,567</Td>
                    <Td>check</Td>
                    <Td>
                      <Button>Edit</Button>
                      <Button>Delete</Button>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>1</Td>
                    <Td>Creating Remarkable Poster...</Td>
                    <Td>2,567</Td>
                    <Td>check</Td>
                    <Td>
                      <Button>Edit</Button>
                      <Button>Delete</Button>
                    </Td>
                  </Tr>
                </tbody>
              </Table>
            </TableContent>
          </TableWrap>
        </Content>
        <Button onClick={onLogout}>Logout</Button>
      </Main>
    </Container>
  );
}

export default ManagementPage;
