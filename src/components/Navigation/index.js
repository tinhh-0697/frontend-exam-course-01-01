import React from "react";
import styled from "styled-components";
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

const MenuItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${props => props.active ? '12px 0' : '12px 35px'};
  font-size: 18px;
  color: ${props => props.active ? '#38C6DA' : '#757d89'};
  margin: 0;

  &:hover {
    background-color: #eaeced;
    cursor: pointer;
  }

  &:before {
    position: absolute;
    content: '';
    width: 4px;
    height: ${props => props.active ? '100%' : 0};
    background-color: #38C6DA;
  }

  ${MenuItemIcon} {
    color: ${props => props.active ? '#38C6DA' : '#D5D8DB'};
    margin-left: ${props => props.active ? '35px' : 0};
  }
`;

const MenuItemSpan = styled.div`
  margin-left: 26px;
`;

const QualityBadge = styled(Badge)`
  && {
    position: absolute;
    right: 0;
    background-color: #38C6DA;
    padding: 7px 20px;
    margin-right: 31px;
    border-radius: 999px;
  }
`;

function Navigation() {
  return (
    <>
      <Menu>
        <SubMenu title="Category 1">
          <MenuItem>
            <MenuItemIcon><FontAwesomeIcon icon={faTachometerAlt} /></MenuItemIcon>
            <MenuItemSpan>Dashboard</MenuItemSpan>
            <QualityBadge>2</QualityBadge>
          </MenuItem>
          <MenuItem>
            <MenuItemIcon><FontAwesomeIcon icon={faHome} /></MenuItemIcon>
            <MenuItemSpan>Home</MenuItemSpan>
          </MenuItem>
          <MenuItem>
            <MenuItemIcon><FontAwesomeIcon icon={faPuzzlePiece} /></MenuItemIcon>
            <MenuItemSpan>Widgets</MenuItemSpan>
          </MenuItem>
          <MenuItem active>
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
