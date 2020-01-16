import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Dropdown } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCog, faBars } from "@fortawesome/free-solid-svg-icons";

import { logOutAction } from "actions/authActions";
import { toggleThemeAction } from "actions/themeActions";
import { toggleSidebarAction } from "actions/sidebarActions";
import { setThemeLocal } from "utils/theme";
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
  DropItem,
  Burger
} from "./styles";
import {
  Switch,
  CheckBox,
  CheckBoxLabel,
  CheckBoxSpan
} from "components/Switch";

function Topbar() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);
  const user = useSelector(state => state.auth.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const onToggleSidebar = () => dispatch(toggleSidebarAction());
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
        <AccountName>{user.name}</AccountName>
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
                <CheckBoxLabel htmlFor="checkbox">
                  <CheckBoxSpan>{theme === "dark" ? "dark" : "light"}</CheckBoxSpan>
                </CheckBoxLabel>
              </Switch>
            </DropItem>
          </DropdownWrap>
        </Dropdown>
        <Burger onClick={onToggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </Burger>
      </Account>
    </TopbarWrap>
  );
}

export default Topbar;
