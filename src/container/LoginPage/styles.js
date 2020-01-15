import styled from "styled-components";
import { Button } from "reactstrap";

export const WrapLogin = styled.div`
  background: ${props => props.theme.colors.background};
  height: 100vh;
  overflow: hidden;
`;

export const FormWrap = styled.div`
  width: 420px;
  margin: 30px auto 0;
  background: ${props => props.theme.colors.loginFormBackground};
  padding: 20px;
  border: 1px solid ${props => props.theme.colors.line};
`;

export const Title = styled.h2`
  font-size: 45px;
  color: ${props => props.theme.colors.loginFormTitle};
  text-align: center;
`;

export const LogginButton = styled(Button)`
  && {
    background-color: ${props => props.theme.colors.primary};
    width: 100%;
    height: 35px;
    padding: 0 20px;
    border: none;

    &:hover, &:active, &:focus {
      background-color: ${props => props.theme.colors.loginButtomHoverBackground}!important;
    }
  }
`;
