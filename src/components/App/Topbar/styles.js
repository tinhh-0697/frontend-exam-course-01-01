import styled from "styled-components";
import { Button, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { devices } from "utils/devices";
import { PRIMARY_GREY } from "constants/colors";

export const TopbarWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 82px;
  padding: 0 30px;
  background: ${props => props.theme.colors.contentBackground};

  @media only screen and ${devices.smallphone} {
    flex-wrap: wrap;
    height: auto;
    padding: 20px 30px;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;

  @media only screen and ${devices.smallphone} {
    width: 100%;
    justify-content: stretch;
  }
`;

export const SearchIcon = styled.div`
  margin-right: 28px;
  color: #b8b8b8;
  font-size: 24px;
  font-weight: 3;
`;

export const SearchInput = styled.input`
  color: #b5b5b5;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 300;
  outline: none;
`;

export const Account = styled.div`
  display: flex;
  align-items: center;

  @media only screen and ${devices.smallphone} {
    width: 100%;
    justify-content: space-between;
  }
`;

export const AccountName = styled.div`
  margin-right: 19px;
  color: #5a5a5a;
  font-size: 20px;
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
    color: #d5d8db;
    background: none;
    border: none;
    font-size: 30px;
    transition: all .4s ease-out;

    &:hover {
      color: #d5d8db;
      background: none;
    }

    &:focus {
      color: #d5d8db;
      background: none;
      box-shadow: none;
    }

    &:active {
      background: none!important;
      box-shadow: none!important;
    }
  }
`;

export const LogoutButton = styled(Button)`
  && {
    color: #a0a0a0;
    background: none;
    border: none;

    &:hover {
      color: #FFFFFF;
      background: none;
    }
  }
`;

export const Burger = styled.div`
  display: none;
  margin-left: 20px;
  color: ${PRIMARY_GREY};
  font-size: 25px;
  cursor: pointer;

  @media only screen and ${devices.tablet} {
    display: block;
  }
`;
