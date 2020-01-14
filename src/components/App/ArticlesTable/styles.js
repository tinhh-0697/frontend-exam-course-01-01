import styled from "styled-components";
import { Table, Button } from "reactstrap";
import { PRIMARY_GREEN, PRIMARY_RED } from "constants/colors";

export const AddButton = styled(Button)`
  && {
    display: flex;
    justify-content: center;
    width: 157px;
    height: 51px;
    background: #38c6da;
    border: none;
  }
`;

export const AddButtonText = styled.div`
  margin-right: 15px;
  color: #fff;
`;

export const AddButtonIcon = styled.div``;

export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 45px 20px 36px;
`;

export const TableTitle = styled.h4`
  color: ${props => props.theme.colors.tableTitle};
  font-size: 20px;
`;

export const TableContent = styled.div``;

export const TableWrap = styled.div`
  background: ${props => props.theme.colors.contentBackground};
  border: 1px solid ${props => props.theme.colors.line};
  border-radius: 5px;
`;

export const CustomeTable = styled(Table)`
  && {
    table-layout: fixed;

    thead > tr {
      border-bottom: 1px solid ${props => props.theme.colors.line};
    }

    tr {
      &:nth-child(even) {
        background-color: ${props => props.theme.colors.rowTableBackground};
      }
    }

    th {
      padding: 24px 19px;
      color: ${props => props.theme.colors.tableHead};
      border: none;
      font-size: 17px;

      &:first-child {
        width: 1px;
        white-space: nowrap;
      }

      &:nth-child(2) {
        width: 40%;
      }

      &:nth-child(3) {
        width: auto;
      }

      &:nth-child(4) {
        width: auto;
        text-align: center;
      }

      &:nth-child(5) {
        width: 230px;
      }
    }

    td {
      padding: 26px 19px;
      color: ${props => props.theme.colors.articleName};
      border: none;
      vertical-align: middle;

      &:nth-child(2) {
        color: ${props => props.theme.colors.articleName};
      }

      &:nth-child(3) {
        color: ${props => props.theme.colors.articleView};
      }

      &:nth-child(4) {
        text-align: center;
      }
    }
  }
`;

export const EditButton = styled(Button)`
  && {
    background-color: ${PRIMARY_GREEN};
    padding: 6px 28px;
    color: #fff;
    border: 0;
    font-size: 15px;
  }
`;

export const DeleteButton = styled(EditButton)`
  && {
    background-color: ${PRIMARY_RED};
    margin-left: 11px;
  }
`;
