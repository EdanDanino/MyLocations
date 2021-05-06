import { Form } from "components";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addCategory } from "store/slices/category";
import styled from "styled-components";
import moment from "moment";
import _ from "lodash";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const fields = [
  {
    name: "name",
  },
];

const AddCategories = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data: any) => {
    dispatch(
      addCategory({ id: _.uniqueId(), ...data, addedDate: moment().toDate() })
    );
    history.push("/Categories");
  };
  return (
    <Root>
      <Form fields={fields} onSubmit={onSubmit} />
    </Root>
  );
};

export default AddCategories;
