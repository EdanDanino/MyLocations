import { Button } from "@material-ui/core";
import { findPopulatedItem } from "pages/utils/findPopulatedItems";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { locationStateType, StateType } from "store/slices/types";
import styled, { css } from "styled-components";
import { Information } from "components";
import { removeLocation } from "store/slices/location";

const WrapperCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Root = styled.div`
  ${WrapperCss}
  flex-direction: column;
`;

const BtnWrapper = styled.div`
  ${WrapperCss}
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;
const StyledButton = styled(Button)`
  margin: 20px 0;
`;

const selector = (state: StateType) => ({
  locations: state.locations,
});

const ViewLocation = () => {
  const { locations } = useSelector(selector);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const itemId = useMemo(() => {
    return location?.pathname.split("/")[3];
  }, [location]);

  const locationItem = findPopulatedItem(
    locations,
    itemId
  ) as locationStateType;

  return (
    <Root>
      <Information item={locationItem} />
      <BtnWrapper>
        <StyledButton
          variant="outlined"
          color="primary"
          onClick={() => history.push("/Locations")}
        >
          Return to list
        </StyledButton>
        <StyledButton
          variant="outlined"
          color="secondary"
          onClick={() => {
            dispatch(removeLocation(locationItem));
            history.push("/Categories");
          }}
        >
          Delete
        </StyledButton>
      </BtnWrapper>
    </Root>
  );
};

export default ViewLocation;
