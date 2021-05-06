import { Form } from "components";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addLocation } from "store/slices/location";
import styled from "styled-components";
import { StateType } from "store/slices/types";
import _ from "lodash";
import moment from "moment";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const selector = (state: StateType) => ({
  categories: state.categories,
});

const AddLocations = () => {
  const { categories } = useSelector(selector);

  const fields = [
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
  ];
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data: any) => {
    dispatch(
      addLocation({
        id: _.uniqueId(),
        ...data,
        addedDate: moment().toDate(),
      })
    );
    history.push("/Locations");
  };

  return (
    <Root>
      <Form fields={fields} onSubmit={onSubmit} />
    </Root>
  );
};

export default AddLocations;
