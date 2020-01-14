import styled from "styled-components";
import { Container as ContainerC } from "reactstrap";
import { devices } from "../../utils/devices";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.background};
`;

export const Container = styled(ContainerC)`
  display: block;
  height: 100vh;

  @media only screen and ${devices.tablet} {
    && {
      padding: 0;
    }
  }
`;

export const Main = styled.div`
  width: calc(100% - 350px);
  float: right;

  @media only screen and ${devices.desktop} {
    width: calc(100% - 250px);
  }

  @media only screen and ${devices.tablet} {
    width: 100%;
  }
`;

export const Content = styled.div`
  margin: 30px;

  @media only screen and ${devices.tablet} {
    margin: 10px;
  }
`;
