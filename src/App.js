import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./container/LoginPage";
import ManagementPage from "./container/ManagementPage";
import NotFound from "./container/NotFound";

function App() {
  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/cms">
        <ManagementPage />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
