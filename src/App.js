import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./container/LoginPage";
import NotFound from "./container/NotFound";

function App() {
  return (
    <>
      <Router>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/cms">
          <LoginPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Router>
    </>
  );
}

export default App;
