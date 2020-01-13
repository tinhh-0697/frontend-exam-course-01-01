import styled from "styled-components";
import { Button, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export const TopbarWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 82px;
  background: ${props => props.theme.colors.contentBackground};
  padding: 0 30px;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.div`
  margin-right: 28px;
  color: #b8b8b8;
  font-size: 24px;
  font-weight: 3;
`;

export const SearchInput = styled.input`
  color: #b5b5b5;
  font-size: 18px;
  font-weight: 300;
  border: none;
  outline: none;
`;

export const Account = styled.div`
  display: flex;
  align-items: center;
`;

export const AccountName = styled.div`
  margin-right: 19px;
  font-size: 20px;
  color: #5a5a5a;
`;

export const DropdownWrap = styled(DropdownMenu)`
  && {
    background: ${props => props.theme.colors.dropDownBackground};
  }
`;

export const DropItem = styled(DropdownItem)`
  && {
    &:hover {
      background-color: ${props => props.theme.colors.itemHover};
    }
  }
`;

export const CogButton = styled(DropdownToggle)`
  && {
    background: none;
    font-size: 30px;
    color: #d5d8db;
    border: none;

    &:hover {
      background: none;
      color: #d5d8db;
    }

    &:focus {
      background: none;
      color: #d5d8db;
      box-shadow: none;
    }

    &:active {
      background: none;
    }
  }
`;

export const LogoutButton = styled(Button)`
  && {
    background: none;
    border: none;
    color: #a0a0a0;

    &:hover {
      background: none;
      color: #d4d4d4;
    }
  }
`;
