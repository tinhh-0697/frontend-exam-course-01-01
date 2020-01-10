import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import LoginPage from "./container/LoginPage";
import ManagementPage from "./container/ManagementPage";
import NotFound from "./container/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/Layout";
import UserPage from "./container/UserPage";

import { toggleThemeAction, setThemeAction } from 'actions/themeActions';

import { ThemeProvider } from "styled-components";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const onToggleTheme = () => dispatch(toggleThemeAction());
  const onSetTheme = (theme) => dispatch(setThemeAction(theme));


  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      window.localStorage.setItem('theme', localTheme);
      onSetTheme(localTheme);
    } else {
      // setMode('light');
    }
  }, [onSetTheme]);

  return (
    <ThemeProvider theme={themeMode}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Layout>
          <PrivateRoute path="/articles" component={ManagementPage} />
          <PrivateRoute path="/user" component={UserPage} />
        </Layout>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
