import React from "react";
import styled from "styled-components";
import Navigation from "components/Navigation";
import Logo from "components/Logo";

const SidebarWrap = styled.div`
  min-width: 350px;
  background: #fff;
`;

function Sidebar() {

  return (
      <SidebarWrap>
        <Logo />
        <Navigation />
      </SidebarWrap>
  );
}

export default Sidebar;
