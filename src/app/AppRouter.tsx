import styled from "styled-components";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Dashboard, Locations, Categories, NotFound } from "../pages";

const RouterWrapper = styled.div`
  margin-bottom: 50px;
`;
const tempComp = () => {
  return <div>temp</div>;
};

const AppRouter = () => (
  <RouterWrapper>
    <Switch>
      <Route path="/Categories" exact component={Categories} />
      <Route path="/Categories/Add" exact component={tempComp} />
      {/* <Route path="/Categories/Edit/:id" component={tempComp} /> */}
      <Route path="/Locations" exact component={Locations} />
      <Route path="/Locations/Add" exact component={tempComp} />
      {/* <Route path="/Locations/Edit/:id" component={tempComp} /> */}
      <Route path="/" component={Dashboard} exact />
      <Route component={NotFound} />
    </Switch>
    <Redirect to="/" />
  </RouterWrapper>
);

export default AppRouter;
