import styled from "styled-components";
import {
  Modal as ModalC,
  ModalHeader as ModalHeaderC,
  ModalFooter as ModalFooterC,
  Button as ButtonC
} from "reactstrap";

export const Modal = styled(ModalC)`
  .modal-content {
    background-color: ${props => props.theme.colors.modalBackground};
  }
`;

export const ModalHeader = styled(ModalHeaderC)`
  && {
    color: ${props => props.theme.colors.modalTitle};
    border-bottom: 1px solid ${props => props.theme.colors.line}
  }
`;

export const ModalFooter = styled(ModalFooterC)`
  && {
    border-top: 1px solid ${props => props.theme.colors.line}
  }
`;

export const AddButton = styled(ButtonC)`
  && {
    background-color: ${props => props.theme.colors.second};
    border: none;
  }
`;

export const CancelButton = styled(ButtonC)`
  && {
    border: none;
  }
`;
