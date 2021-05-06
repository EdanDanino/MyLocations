import styled from "styled-components";
import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Dashboard,
  Locations,
  Categories,
  NotFound,
  AddCategories,
  AddLocations,
} from "../pages";

const RouterWrapper = styled.div`
  margin-bottom: 50px;
`;

const AppRouter = () => (
  <RouterWrapper>
    <Switch>
      <Route path="/Categories" exact component={Categories} />
      <Route path="/Categories/Add" exact component={AddCategories} />
      {/* <Route path="/Categories/Edit/:id" component={tempComp} /> */}
      <Route path="/Locations" exact component={Locations} />
      <Route path="/Locations/Add" exact component={AddLocations} />
      {/* <Route path="/Locations/Edit/:id" component={tempComp} /> */}
      <Route path="/" component={Dashboard} exact />
      <Route component={NotFound} />
    </Switch>
  </RouterWrapper>
);

export default AppRouter;
