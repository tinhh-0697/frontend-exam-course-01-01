import React from "react";
import styled from 'styled-components';

const LogoWrap = styled.div`
  background-color: #38c6da;
  height: 82px;
  color: #fff;
`;

const Logo = styled.div``;

function LogoC() {
  return (
    <LogoWrap>
      <Logo>#logo</Logo>
    </LogoWrap>
  );
}

export default LogoC;
