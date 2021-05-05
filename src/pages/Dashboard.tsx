import { Title } from "components";
import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Dashboard = () => (
  <Root>
    <Title text="Locations" />
  </Root>
);

export default Dashboard;
