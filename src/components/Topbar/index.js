import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Dropdown } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCog } from "@fortawesome/free-solid-svg-icons";

import { logOutAction } from "actions/authActions";
import { toggleThemeAction } from "actions/themeActions";
import { setThemeLocal } from "../../utils/theme";
import {
  TopbarWrap,
  Search,
  SearchIcon,
  SearchInput,
  Account,
  AccountName,
  CogButton,
  DropdownWrap,
  LogoutButton,
  DropItem
} from "./styles";
import { Switch, CheckBox, CheckBoxLabel } from "components/Switch";

function Topbar() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const onToggleMenu = () => setDropdownOpen(prevState => !prevState);
  const onLogout = () => dispatch(logOutAction());
  const onToggleTheme = () => {
    if (theme === "light") {
      setThemeLocal("dark");
    } else {
      setThemeLocal("light");
    }
    dispatch(toggleThemeAction());
  };

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
        <Dropdown isOpen={dropdownOpen} toggle={onToggleMenu}>
          <CogButton>
            <FontAwesomeIcon icon={faCog} />
          </CogButton>
          <DropdownWrap right>
            <DropItem>
              <LogoutButton onClick={onLogout} tag="a">
                Logout
              </LogoutButton>
            </DropItem>
            <DropItem toggle={false}>
              <Switch>
                <CheckBox
                  id="checkbox"
                  type="checkbox"
                  checked={theme === "dark" ? true : false}
                  onChange={onToggleTheme}
                />
                <CheckBoxLabel htmlFor="checkbox" />
              </Switch>
            </DropItem>
          </DropdownWrap>
        </Dropdown>
      </Account>
    </TopbarWrap>
  );
}

export default Topbar;
