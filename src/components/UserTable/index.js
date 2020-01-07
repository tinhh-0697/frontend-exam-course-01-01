import React from "react";
import styled from "styled-components";
import { Table, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

const AddButton = styled(Button)`
 && {
  display: flex;
  justify-content: center;
  width: 157px;
  height: 51px;
  background: #38c6da;
  border: none;
 }
`;

const AddButtonText = styled.div`
  color: #fff;
  margin-right: 15px;
`;

const AddButtonIcon = styled.div``;

// const Table = styled.div`
//   background: #fff;
// `;
const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 45px 20px 36px;
`;

const TableTitle = styled.h4`
  font-size: 20px;
  color: #555;
`;

const TableContent = styled.div``;

const TableWrap = styled.div`
  background: #fff;
  border-radius: 8px;
`;

const CustomeTable = styled(Table)`
 && {
  table-layout: fixed;

  thead > tr {
    border-bottom: 1px solid #eaeced;
  }
  tr {
    &:nth-child(even) {
      background-color: #f1f3f5;
    }
  }
  th {
    padding: 24px 19px;
    font-size: 17px;
    color: #555;
    border: none;

    &:first-child {
      width: 1px;
      white-space: nowrap;
    }
  }
  td{
    padding: 26px 19px;
    border: none;
    vertical-align: middle;
  }
 }
`;

const EditButton = styled(Button)`
  && {
    font-size: 15px;
    padding: 6px 28px;
    background-color: #6AD36E;
    color: #fff;
    border: 0;
  }
`;

const DeleteButton = styled(EditButton)`
  && {
    background-color: #FB5867;
    margin-left: 11px;
  }
`;

function UserTable() {
  return (
    <TableWrap>
      <TableHead>
        <TableTitle>Articles</TableTitle>
        <AddButton>
          <AddButtonText>Add new</AddButtonText>
          <AddButtonIcon>
            <FontAwesomeIcon icon={faPlus} />
          </AddButtonIcon>
        </AddButton>
      </TableHead>
      <TableContent>
        <CustomeTable>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Views</th>
              <th>Status</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Creating Remarkable Poster...</td>
              <td>2,567</td>
              <td><FontAwesomeIcon icon={faCheck}/></td>
              <td>
                <EditButton>Edit</EditButton>
                <DeleteButton>Delete</DeleteButton>
              </td>
            </tr>
          </tbody>
        </CustomeTable>
      </TableContent>
    </TableWrap>
  );
}

export default UserTable;
