import { Form } from "components";
import { v4 as uuid } from "uuid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addLocation } from "store/slices/location";
import { StateType } from "store/slices/types";
import styled from "styled-components";

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
        id: uuid(),
        ...data,
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
