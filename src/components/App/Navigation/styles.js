import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { devices } from "utils/devices";
import { Badge } from "reactstrap";

export const Menu = styled.div`
  height: calc(100vh - 82px);
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuItemIcon = styled.div`
  width: 30px;
  font-size: 23px;
`;

export const MenuItem = styled(NavLink).attrs({
  activeClassName: "active"
})`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 12px 35px;
  color: ${props => props.theme.colors.menuText};
  font-size: 18px;
  transition: all 0.4s ease-out;

  &:hover {
    color: #38c6da;
    background-color: ${props => props.theme.colors.line};
    text-decoration: none;
    cursor: pointer;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 4px;
    height: 0;
    background-color: #38c6da;
  }

  &.active {
    color: #38c6da;

    &:before {
      height: 100%;
    }

    ${MenuItemIcon} {
      color: #38c6da;
    }
  }

  ${MenuItemIcon} {
    margin-left: 0;
    color: ${props => props.theme.colors.menuIcon};
  }

  @media only screen and ${devices.desktop} {
    padding: 12px 25px;
  }

  @media only screen and ${devices.smallphone} {
    padding: 5px 20px;
  }
`;

export const MenuItemSpan = styled.div`
  margin-left: 26px;

  @media only screen and ${devices.desktop} {
    margin-left: 13px;
  }
`;

export const QualityBadge = styled(Badge)`
  && {
    position: absolute;
    right: 0;
    margin-right: 31px;
    padding: 7px 20px;
    background-color: #38c6da;
    border-radius: 999px;
  }
`;
