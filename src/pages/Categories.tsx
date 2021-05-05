import { List } from "components";
import React from "react";
import { useSelector } from "react-redux";
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
const Categories = () => {
  const { categories } = useSelector(selector);

  return (
    <Root>
      <List itemsArray={categories} />
    </Root>
  );
};

export default Categories;
