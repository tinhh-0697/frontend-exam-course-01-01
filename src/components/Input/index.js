import styled from "styled-components";
import { Input as InputC } from "reactstrap";

export const Input = styled(InputC)`
  && {
    color: ${props => props.theme.colors.inputColor};
    background: ${props => props.theme.colors.inputBackground};
    border: 1px solid ${props => props.theme.colors.line};
    transition: all .4s ease-in-out;

    &:focus {
      color: ${props => props.theme.colors.inputColor};
      background: none;
      border: 2px solid ${props => props.theme.colors.line};
      box-shadow: none;
    }
  }
`;

export const ErrorLabel = styled.div`
  margin: 12px 0;
  padding: 8px 15px;
  background-color: #fff1f0;
  border: 1px solid #ffa39e;
  font-size: 12px;
`;
