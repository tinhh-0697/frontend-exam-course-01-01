import React from 'react';
import styled from 'styled-components';

const SubMenuWrap = styled.div`

`;

const SubMenuText = styled.div`
  width: 100%;
  padding: 54px 35px 21px;
  font-family: Rubik;
  font-size: 18px;
  color: #bcbfc4;
  text-transform: uppercase;
  border-bottom: 1px solid #eaeced;
`;

const MenuItems = styled.ul`
  margin-top: 12px;
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
