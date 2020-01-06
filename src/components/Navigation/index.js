import React from "react";
import styled from "styled-components";
import SubMenu from "../Menu/SubMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faHome,
  faPuzzlePiece,
  faTh,
  faFileAlt,
  faChartPie
} from "@fortawesome/free-solid-svg-icons";

const Menu = styled.div``;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 35px;
  font-size: 18px;
  color: ${props => props.active ? '#38C6DA' : '#757d89'};
  margin: 0;

  &:hover {
    background-color: #eaeced;
    cursor: pointer;
  }

  &:before {
    content: '';
    width: 4px;
    background-color: #38C6DA;
  }
`;

const MenuItemSpan = styled.div`
  margin-left: 26px;
`;

const MenuItemIcon = styled.div`
  width: 30px;
  font-size: 23px;
  color: #D5D8DB;
`;

function Navigation() {
  return (
    <>
      <Menu>
        <SubMenu title="Category 1">
          <MenuItem>
            <MenuItemIcon><FontAwesomeIcon icon={faTachometerAlt} /></MenuItemIcon>
            <MenuItemSpan>Dashboard</MenuItemSpan>
          </MenuItem>
          <MenuItem active>
            <MenuItemIcon><FontAwesomeIcon icon={faHome} /></MenuItemIcon>
            <MenuItemSpan>Home</MenuItemSpan>
          </MenuItem>
          <MenuItem>
            <MenuItemIcon><FontAwesomeIcon icon={faPuzzlePiece} /></MenuItemIcon>
            <MenuItemSpan>Widgets</MenuItemSpan>
          </MenuItem>
          <MenuItem>
            <MenuItemIcon><FontAwesomeIcon icon={faTh} /></MenuItemIcon>
            <MenuItemSpan>Articles</MenuItemSpan>
          </MenuItem>
          <MenuItem>
            <MenuItemIcon><FontAwesomeIcon icon={faFileAlt} /></MenuItemIcon>
            <MenuItemSpan>Forms</MenuItemSpan>
          </MenuItem>
          <MenuItem>
            <MenuItemIcon><FontAwesomeIcon icon={faChartPie} /></MenuItemIcon>
            <MenuItemSpan>Charts</MenuItemSpan>
          </MenuItem>
        </SubMenu>
        <SubMenu title="Category 2">
          <MenuItem>
            <MenuItemIcon><FontAwesomeIcon icon={faTachometerAlt} /></MenuItemIcon>
            <MenuItemSpan>Dashboard</MenuItemSpan>
          </MenuItem>
          <MenuItem>
            <MenuItemIcon><FontAwesomeIcon icon={faHome} /></MenuItemIcon>
            <MenuItemSpan>Home</MenuItemSpan>
          </MenuItem>
          <MenuItem>
            <MenuItemIcon><FontAwesomeIcon icon={faPuzzlePiece} /></MenuItemIcon>
            <MenuItemSpan>Widgets</MenuItemSpan>
          </MenuItem>
          <MenuItem>
            <MenuItemIcon><FontAwesomeIcon icon={faTh} /></MenuItemIcon>
            <MenuItemSpan>Articles</MenuItemSpan>
          </MenuItem>
          <MenuItem>
            <MenuItemIcon><FontAwesomeIcon icon={faFileAlt} /></MenuItemIcon>
            <MenuItemSpan>Forms</MenuItemSpan>
          </MenuItem>
          <MenuItem>
            <MenuItemIcon><FontAwesomeIcon icon={faChartPie} /></MenuItemIcon>
            <MenuItemSpan>Charts</MenuItemSpan>
          </MenuItem>
        </SubMenu>
      </Menu>
    </>
  );
}

export default Navigation;
