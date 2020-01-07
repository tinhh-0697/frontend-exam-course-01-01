import React from "react";
import styled from 'styled-components';

const LogoWrap = styled.div`
  background-color: #38c6da;
  height: 82px;
  color: #fff;
`;

const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function LogoC() {
  return (
    <LogoWrap>
      <Logo><img style={{ width: '150px'}} src={require('assets/logo')} alt=''/></Logo>
    </LogoWrap>
  );
}

export default LogoC;
