import React from 'react';
import {
  SubMenuWrap,
  SubMenuText,
  MenuItems
} from "./styles";

function SubMenu({ children, title }) {
  return (
    <SubMenuWrap>
      <SubMenuText>{title}</SubMenuText>
      <MenuItems>{children}</MenuItems>
    </SubMenuWrap>
  );
}

export default SubMenu;
