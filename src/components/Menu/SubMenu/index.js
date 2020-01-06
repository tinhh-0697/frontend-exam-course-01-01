import React from 'react';
import styled from 'styled-components';

const SubMenuWrap = styled.div``;

const SubMenuText = styled.div`
  width: 100%;
  color: #bcbfc4;
  font-family: Rubik;
  font-size: 18px;
  text-transform: uppercase;
  border-bottom: 1px solid #eaeced;
  padding: 54px 35px 21px;
`;

const MenuItems = styled.ul`
  margin: 0;
  padding: 0;
`;

function SubMenu({ children, title }) {
  return (
    <SubMenuWrap>
      <SubMenuText>{title}</SubMenuText>
      <MenuItems>{children}</MenuItems>
    </SubMenuWrap>
  );
}

export default SubMenu;
