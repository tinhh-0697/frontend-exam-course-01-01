import styled from "styled-components";

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  height: 26px;
  border-radius: 15px;
  cursor: pointer;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBoxSpan = styled.span`
  margin-right: 6px;
  margin-left: 24px;
`;

export const Switch = styled.div`
  position: relative;
`;

export const CheckBox = styled.input`
  opacity: 0;
  height: 26px;
  border-radius: 15px;
  z-index: 1;

  &:checked + ${CheckBoxLabel} {
    background: #38c6da;

    &:after {
      display: block;
      position: absolute;
      right: 0;
      left: auto;
      border-radius: 50%;
      margin-left: 21px;
      transition: 0.2s;
    }
  };

  &:checked ${CheckBoxSpan} {
    margin-right: 24px;
    margin-left: 6px;
  }
`;
