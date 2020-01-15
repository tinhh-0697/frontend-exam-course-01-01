import styled from "styled-components";
import { Input as InputC } from "reactstrap";
import { PRIMARY_WHITE } from "constants/colors";

export const Input = styled(InputC)`
  && {
    color: ${PRIMARY_WHITE};
    background: ${props => props.theme.colors.inputBackground};
    border: 1px solid ${props => props.theme.colors.line};
    transition: all .4s ease-in-out;

    &:focus {
      color: ${PRIMARY_WHITE};
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
