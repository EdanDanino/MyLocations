import { Form } from "components";
import { findPopulatedItem } from "pages/utils/findPopulatedItems";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { updateLocation } from "store/slices/location";
import { locationKey, locationStateType, StateType } from "store/slices/types";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const selector = (state: StateType) => ({
  locations: state.locations,
  categories: state.categories,
});

const EditLocation = () => {
  const { locations, categories } = useSelector(selector);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

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
        isFieldASelect: true,
        options: categories,
      },
    ],
    [categories]
  );

  const itemId = useMemo(() => {
    return location?.pathname.split("/")[3];
  }, [location]);

  const locationItem = findPopulatedItem(
    locations,
    itemId
  ) as locationStateType;

  const onSubmitEditLocation = (data: any) => {
    const newLocationWithUpdates = { ...data };
    if (locationItem) {
      Object.keys(locationItem).map((f) => {
        if (!newLocationWithUpdates[f]) {
          newLocationWithUpdates[f] = locationItem[
            f as locationKey
          ] as locationStateType;
        }
        return "";
      });
    }

    dispatch(updateLocation(newLocationWithUpdates));
    history.push("/locations");
  };

  return (
    <Root>
      <Form
        fields={fields}
        onSubmit={onSubmitEditLocation}
        initialValues={locationItem as locationStateType}
      />
    </Root>
  );
};

export default EditLocation;
