import { Button } from "@material-ui/core";
import { Title } from "components";
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
    <Title text="NOT FOUND" />
    <Link to="/">
      <Button variant="outlined" color="primary">
        RETURN TO DASHBOARD
      </Button>
    </Link>
  </Root>
);

export default NotFound;
