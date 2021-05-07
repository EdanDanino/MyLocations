import { Button } from "@material-ui/core";
import { findPopulatedItem } from "pages/utils/findPopulatedItems";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { locationStateType, StateType } from "store/slices/types";
import styled from "styled-components";
import { Information } from "components";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const selector = (state: StateType) => ({
  locations: state.locations,
});

const ViewLocation = () => {
  const { locations } = useSelector(selector);
  const location = useLocation();
  const history = useHistory();

  const fields = useMemo(
    () => [
      {
        name: "name",
      },
      {
        name: "address",
      },
      {
        name: "lat",
      },
      {
        name: "lng",
      },
      {
        name: "category",
      },
    ],
    []
  );

  const itemId = useMemo(() => {
    return location?.pathname.split("/")[3];
  }, [location]);

  const locationItem = findPopulatedItem(
    locations,
    itemId
  ) as locationStateType;

  return (
    <Root>
      <Information fields={fields} item={locationItem} />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => history.push("/Locations")}
      >
        Return to list
      </Button>
    </Root>
  );
};

export default ViewLocation;
