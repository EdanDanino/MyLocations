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
    <h1>Location</h1>
  </Root>
);

export default Dashboard;
