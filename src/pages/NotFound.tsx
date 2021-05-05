import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NotFound = () => (
  <Root>
    <h1>"NOT FOUND" </h1>
    <Link to="/">
      <Button variant="outlined" color="primary">
        RETURN TO DASHBOARD
      </Button>
    </Link>
  </Root>
);

export default NotFound;
