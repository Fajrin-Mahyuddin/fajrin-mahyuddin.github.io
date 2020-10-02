import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Dashboard, About } from "pages";

const Navigate = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigate;
