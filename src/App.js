import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./container/LoginPage";
import ManagementPage from "./container/ManagementPage";
import NotFound from "./container/NotFound";
import PrivateRoute from "./components/App/PrivateRoute";
import UserPage from "./container/UserPage";


import { ThemeProvider } from "styled-components";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";
import { setThemeAction } from 'actions/themeActions';
import { getThemeLocal, setThemeLocal } from "./utils/theme";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const onSetTheme = (theme) => dispatch(setThemeAction(theme));

  useEffect(() => {
    const localTheme = getThemeLocal();
    if (localTheme) {
      setThemeLocal(localTheme);
      onSetTheme(localTheme);
    } else {
      setThemeLocal('light');
      onSetTheme('light');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
