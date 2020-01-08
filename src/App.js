import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./container/LoginPage";
import ManagementPage from "./container/ManagementPage";
import NotFound from "./container/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import Layout from './components/Layout';

function App() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Layout>
        <PrivateRoute path="/cms" component={ManagementPage} />
      </Layout>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
