import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "reactstrap";
import { logOutAction } from "../../actions/authActions";


function ManagementPage() {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logOutAction());

  return (
    <Container fluid>

    </Container>
  );
}

export default ManagementPage;
