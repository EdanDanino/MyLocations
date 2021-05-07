import { Form } from "components";
import { findPopulatedItem } from "pages/utils/findPopulatedItems";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { updateCategory } from "store/slices/category";
import { categoryStateType, StateType } from "store/slices/types";
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

const fields = [
  {
    name: "name",
  },
];

const EditCategory = () => {
  const { categories } = useSelector(selector);
  const location = useLocation();
  const history = useHistory();

  const dispatch = useDispatch();

  const itemId = useMemo(() => {
    return location?.pathname.split("/")[3];
  }, [location]);

  const categoryItem = findPopulatedItem(categories, itemId);

  const onSubmitEditCategory = (data: any) => {
    const newCategoryWithUpdates = { ...categoryItem, ...data };
    dispatch(updateCategory(newCategoryWithUpdates));
    history.push("/Categories");
  };

  return (
    <Root>
      <Form
        fields={fields}
        onSubmit={onSubmitEditCategory}
        initialValues={categoryItem as categoryStateType}
      />
    </Root>
  );
};

export default EditCategory;
