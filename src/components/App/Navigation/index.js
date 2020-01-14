import React from "react";
import {
  Menu,
  MenuItem,
  MenuItemIcon,
  MenuItemSpan,
  QualityBadge
} from "./styles";
import SubMenu from "../Menu/SubMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faHome,
  faPuzzlePiece,
  faTh,
  faFileAlt,
  faChartPie,
  faCalendarAlt,
  faGlobeAsia,
  faFile,
  faAddressBook,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <>
      <Menu>
        <SubMenu title="Category 1">
          <MenuItem to="/dashboard">
            <MenuItemIcon>
              <FontAwesomeIcon icon={faTachometerAlt} />
            </MenuItemIcon>
            <MenuItemSpan>Dashboard</MenuItemSpan>
            <QualityBadge>2</QualityBadge>
          </MenuItem>
          <MenuItem to="/home">
            <MenuItemIcon>
              <FontAwesomeIcon icon={faHome} />
            </MenuItemIcon>
            <MenuItemSpan>Home</MenuItemSpan>
          </MenuItem>
          <MenuItem to="/user">
            <MenuItemIcon>
              <FontAwesomeIcon icon={faPuzzlePiece} />
            </MenuItemIcon>
            <MenuItemSpan>Widgets</MenuItemSpan>
          </MenuItem>
          <MenuItem to="/articles">
            <MenuItemIcon>
              <FontAwesomeIcon icon={faTh} />
            </MenuItemIcon>
            <MenuItemSpan>Articles</MenuItemSpan>
          </MenuItem>
          <MenuItem to="/forms">
            <MenuItemIcon>
              <FontAwesomeIcon icon={faFileAlt} />
            </MenuItemIcon>
            <MenuItemSpan>Forms</MenuItemSpan>
          </MenuItem>
          <MenuItem to="/charts">
            <MenuItemIcon>
              <FontAwesomeIcon icon={faChartPie} />
            </MenuItemIcon>
            <MenuItemSpan>Charts</MenuItemSpan>
          </MenuItem>
        </SubMenu>
        <SubMenu title="Category 2">
          <MenuItem to="/tables">
            <MenuItemIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </MenuItemIcon>
            <MenuItemSpan>Tables</MenuItemSpan>
          </MenuItem>
          <MenuItem to="/maps">
            <MenuItemIcon icon={faGlobeAsia}>
              <FontAwesomeIcon icon={faHome} />
            </MenuItemIcon>
            <MenuItemSpan>Maps</MenuItemSpan>
          </MenuItem>
          <MenuItem to="/pages">
            <MenuItemIcon>
              <FontAwesomeIcon icon={faFile} />
            </MenuItemIcon>
            <MenuItemSpan>Pages</MenuItemSpan>
          </MenuItem>
          <MenuItem to="/blog">
            <MenuItemIcon>
              <FontAwesomeIcon icon={faAddressBook} />
            </MenuItemIcon>
            <MenuItemSpan>Blog</MenuItemSpan>
          </MenuItem>
          <MenuItem to="/ecommerce">
            <MenuItemIcon>
              <FontAwesomeIcon icon={faDollarSign} />
            </MenuItemIcon>
            <MenuItemSpan>E-commerce</MenuItemSpan>
          </MenuItem>
        </SubMenu>
      </Menu>
    </>
  );
}

export default Navigation;
