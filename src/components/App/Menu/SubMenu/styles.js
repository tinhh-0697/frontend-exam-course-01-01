import styled from 'styled-components';

export const SubMenuWrap = styled.div`
  margin-top: 50px;
`;

export const SubMenuText = styled.div`
  width: 100%;
  padding: 0 35px 21px;
  color: #bcbfc4;
  border-bottom: 1px solid ${props => props.theme.colors.line};
  font-size: 18px;
  font-family:   Rubik;
  text-transform: uppercase;
`;

export const MenuItems = styled.ul`
  padding: 0;
`;
