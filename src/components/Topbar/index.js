import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCog } from "@fortawesome/free-solid-svg-icons";

import { logOutAction } from "actions/authActions";

const TopbarWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 82px;
  background: #fff;
  padding: 0 30px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.div`
  margin-right: 28px;
  color: #b8b8b8;
  font-size: 24px;
  font-weight: 3;
`;

const SearchInput = styled.input`
  color: #b5b5b5;
  font-size: 18px;
  font-weight: 300;
  border: none;
  outline: none;
`;

const Account = styled.div`
  display: flex;
  align-items: center;
`;

const AccountName = styled.div`
  margin-right: 19px;
  font-size: 20px;
  color: #5a5a5a;
`;

const CogButton = styled(DropdownToggle)`
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

const LogoutButton = styled(Button)`
  && {
    background: none;
    border: none;
    color: #A0A0A0;

    &:hover {
      background: none;
      color: #D4D4D4;
    }
  }
`;

function Topbar() {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logOutAction());

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <TopbarWrap>
      <Search>
        <SearchIcon>
          <FontAwesomeIcon icon={faSearch} />
        </SearchIcon>
        <SearchInput placeholder="Search now ..." />
      </Search>
      <Account>
        <AccountName>Katie Reed</AccountName>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <CogButton>
            <FontAwesomeIcon icon={faCog} />
          </CogButton>
          <DropdownMenu right>
            <DropdownItem>
              <LogoutButton onClick={onLogout} tag="a">Logout</LogoutButton>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Account>
    </TopbarWrap>
  );
}

export default Topbar;
