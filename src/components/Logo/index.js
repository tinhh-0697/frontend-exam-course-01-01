import React from "react";
import styled from "styled-components";

const LogoWrap = styled.div`
  background-color: #38c6da;
  height: 82px;
  color: #fff;
`;

const Logo = styled.h1`
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-left: 35px;
`;

const ShapeLogo = styled.div`
  position: relative;
  height: 52px;
  width: 52px;
  background-color: rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  box-shadow: inset 0px 1px 7px 5px rgba(255, 255, 255, 0.1);

  &:after {
    content: "";
    position: absolute;
    top: 32%;
    right: -20%;
    width: 20px;
    height: 20px;
    background: #fff;
    border: 3px solid #38c6da;
    border-radius: 999px;
  }
`;

const LogoText = styled.div`
  margin-left: 20px;
  font-size: 25px;
  text-transform: uppercase;
`;

function LogoC() {
  return (
    <LogoWrap>
      <Logo>
        <ShapeLogo />
        <LogoText>Orbita</LogoText>
      </Logo>
    </LogoWrap>
  );
}

export default LogoC;
