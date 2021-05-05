import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { Dashboard, NotFound, Categories, Locations } from "pages";

const RouterWrapper = styled.div`
  margin-bottom: 50px;
`;

const AppRouter = () => (
  <RouterWrapper>
    <Switch>
      <Route path="/Categories" exact component={Categories} />
      <Route path="/Locations" exact component={Locations} />
      <Route path="/" component={Dashboard} exact />
      <Route component={NotFound} />
    </Switch>
    <Redirect to="/" />
  </RouterWrapper>
);

export default AppRouter;
