import styled from "styled-components";
import { devices } from "utils/devices";

export const SidebarWrap = styled.div`
  position: fixed;
  float: left;
  width: 350px;
  background: ${props => props.theme.colors.contentBackground};

  @media only screen and ${devices.desktop} {
    width: 250px;
  }

  @media only screen and ${devices.tablet} {
    top: 0;
    right: 0;
    left: auto;
    transition: transform .3s cubic-bezier(0, 0, 0.2, 1) 0ms;
    transform: ${props => props.visible ? "none" : "translate3d(250px, 0, 0)"};
    z-index: 1;
  }
`;
