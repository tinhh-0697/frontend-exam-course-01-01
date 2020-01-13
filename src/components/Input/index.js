import styled from "styled-components";
import { Input as InputC } from "reactstrap";

export const Input = styled(InputC)`
  && {
    background: ${props => props.theme.colors.inputBackground};
    border: 1px solid ${props => props.theme.colors.line};

    &:focus {
      background: none;
      border: none;
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
