import React, { useState } from "react";
import styled from "styled-components";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCog } from "@fortawesome/free-solid-svg-icons";

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

const CogButton = styled.button`
  font-size: 30px;
  color: #d5d8db;
`;

function Topbar() {
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
          <DropdownToggle><FontAwesomeIcon icon={faCog} /></DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Account>
    </TopbarWrap>
  );
}

export default Topbar;
