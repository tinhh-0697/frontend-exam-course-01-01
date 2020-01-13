import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { Form, FormGroup } from "reactstrap";
import {
  WrapLogin,
  FormWrap,
  Title,
  LogginButton
} from './styles';
import {
  loginAction,
  enterEmailAction,
  enterPasswordAction
} from "actions/authActions";
import { Input, ErrorLabel } from "../../components/Input";
import { Label } from "../../components/Label";

function LoginPage() {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = e => {
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
      dispatch(push("/articles"));
    }
  }, [dispatch, isAuthenticated]);

  return (
    <WrapLogin>
      <FormWrap>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label>Email</Label>
            <Input
              name="email"
              id="email"
              placeholder="Enter your email"
              autocomplete="off"
              defaultValue={email}
              onChange={onEnterEmail}
              innerRef={register({
                required: "Please enter your email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && <ErrorLabel>{errors.email.message}</ErrorLabel>}
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
              innerRef={register({
                required: "Please enter your password",
                minLength: {
                  value: 6,
                  message: "At least 6 characters"
                }
              })}
            />
            {errors.password && (
              <ErrorLabel>{errors.password.message}</ErrorLabel>
            )}
          </FormGroup>
          <div>{error ? <ErrorLabel>{error}</ErrorLabel> : ""}</div>
          <LogginButton type="submit" color="primary" disabled={loading}>
            Login
          </LogginButton>
        </Form>
      </FormWrap>
    </WrapLogin>
  );
}

export default LoginPage;
