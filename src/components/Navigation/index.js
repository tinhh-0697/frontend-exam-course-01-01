import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import SubMenu from "../Menu/SubMenu";
import { Badge } from 'reactstrap';
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

const MenuItemIcon = styled.div`
  width: 30px;
  font-size: 23px;
`;

const MenuItem = styled(NavLink).attrs({
  activeClassName: 'active'
})`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 12px 35px;
  transition: all .4s ease-out;
  color: #757d89;
  font-size: 18px;

  &:hover {
    color: #38C6DA;
    background-color: #eaeced;
    text-decoration: none;
    cursor: pointer;
  }

  &:before {
    position: absolute;
    content: '';
    width: 4px;
    height: 0;
    background-color: #38C6DA;
  }

  &.active {
    padding: 12px 0;
    color: #38C6DA;

    &:before {
      height: 100%;
    }

    ${MenuItemIcon} {
      margin-left: 35px;
      color: #38C6DA;
    }
  }

  ${MenuItemIcon} {
    margin-left: 0;
    color: #D5D8DB;
  }
`;

const MenuItemSpan = styled.div`
  margin-left: 26px;
`;

const QualityBadge = styled(Badge)`
  && {
    position: absolute;
    right: 0;
    margin-right: 31px;
    padding: 7px 20px;
    background-color: #38C6DA;
    border-radius: 999px;
  }
`;

function Navigation() {
  return (
    <>
      <Menu>
        <SubMenu title="Category 1">
          <MenuItem to='/dashboard'>
            <MenuItemIcon><FontAwesomeIcon icon={faTachometerAlt} /></MenuItemIcon>
            <MenuItemSpan>Dashboard</MenuItemSpan>
            <QualityBadge>2</QualityBadge>
          </MenuItem>
          <MenuItem to='/home'>
            <MenuItemIcon><FontAwesomeIcon icon={faHome} /></MenuItemIcon>
            <MenuItemSpan>Home</MenuItemSpan>
          </MenuItem>
          <MenuItem to='/user'>
            <MenuItemIcon><FontAwesomeIcon icon={faPuzzlePiece} /></MenuItemIcon>
            <MenuItemSpan>Widgets</MenuItemSpan>
          </MenuItem>
          <MenuItem to='/articles'>
            <MenuItemIcon><FontAwesomeIcon icon={faTh} /></MenuItemIcon>
            <MenuItemSpan>Articles</MenuItemSpan>
          </MenuItem>
          <MenuItem to='/forms'>
            <MenuItemIcon><FontAwesomeIcon icon={faFileAlt} /></MenuItemIcon>
            <MenuItemSpan>Forms</MenuItemSpan>
          </MenuItem>
          <MenuItem to='/charts'>
            <MenuItemIcon><FontAwesomeIcon icon={faChartPie} /></MenuItemIcon>
            <MenuItemSpan>Charts</MenuItemSpan>
          </MenuItem>
        </SubMenu>
      </Menu>
    </>
  );
}

export default Navigation;
