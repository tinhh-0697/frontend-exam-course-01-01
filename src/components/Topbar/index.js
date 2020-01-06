import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCog
} from "@fortawesome/free-solid-svg-icons";

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
  color: #B8B8B8;
`;

const SearchInput = styled.input`
  border: none;
  font-size: 18px;
  color: #B5B5B5;
`;

const Account = styled.div`
  display: flex;
  align-items: center;
`;

const AccountName = styled.div`
  margin-right: 19px;
  font-size: 20px;
  color: #5A5A5A;
`;

const AccountSetting = styled.span`
  font-size: 30px;
  color: #D5D8DB;
`;

const Option = styled.div``;

const OptionIcon = styled.div``;

function Topbar() {
  return (
    <TopbarWrap>
    <Search>
      <SearchIcon><FontAwesomeIcon icon={faSearch} /></SearchIcon>
      <SearchInput placeholder='Search now ...'/>
    </Search>
    <Account>
      <AccountName>Katie Reed</AccountName>
      <AccountSetting><FontAwesomeIcon icon={faCog} /></AccountSetting>
      {/* <Option>
        <OptionIcon />
        #option
      </Option> */}
    </Account>
  </TopbarWrap>
  )
}

export default Topbar;
