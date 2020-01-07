import React, { useEffect } from "react";
// import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import {
  loginAction,
  enterEmailAction,
  enterPasswordAction
} from "actions/authActions";

const WrapLogin = styled.div`
  width: 420px;
  background: #f1f3f5;
  margin: 30px auto 0;
`;

const FormWrap = styled.div`
  background: #fff;
`;

const Title = styled.h2`
  font-size: 45px;
  color: #676767;
  text-align: center;
`;

const LogginButton = styled(Button)`
  background-color: #38c6da;
  width: 100%;
  height: 35px;
  padding: 0 20px;
`;

const ErrorLabel = styled.div`
  padding: 8px 15px;
  margin-bottom: 16px;
  background-color: #fff1f0;
  border: 1px solid #ffa39e;
`

function LoginPage() {
  // const { register, handleSubmit, watch, errors } = useForm()
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    dispatch(loginAction({ email, password }));
  };
  const onEnterEmail = e => dispatch(enterEmailAction(e.target.value));
  const onEnterPassword = e => dispatch(enterPasswordAction(e.target.value));

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const email = useSelector(state => state.auth.email);
  const password = useSelector(state => state.auth.password);
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(push('/cms'))
    }
  }, [dispatch, isAuthenticated])

  return (
    <Container>
      <WrapLogin>
        <FormWrap>
          <Title>Login</Title>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                defaultValue={email}
                onChange={onEnterEmail}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                defaultValue={password}
                onChange={onEnterPassword}
              />
            </FormGroup>
            <div>{error ? <ErrorLabel>{error}</ErrorLabel> : ""}</div>
            <LogginButton type="submit" color="primary" disabled={loading}>
              Login
            </LogginButton>
          </Form>
        </FormWrap>
      </WrapLogin>
    </Container>
  );
}

export default LoginPage;
