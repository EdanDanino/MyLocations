import { Button } from "@material-ui/core";
import { Information } from "components";
import { ListItemType } from "components/types";
import { findPopulatedItem } from "pages/utils/findPopulatedItems";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { removeCategory } from "store/slices/category";
import { categoryStateType, StateType } from "store/slices/types";
import styled, { css } from "styled-components";

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
  categories: state.categories,
});

const ViewCategory = () => {
  const { categories } = useSelector(selector);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const itemId = useMemo(() => {
    return location?.pathname.split("/")[3];
  }, [location]);

  const categoryItem = findPopulatedItem(categories, itemId);

  console.log(categoryItem);

  return (
    <Root>
      <Information item={categoryItem as ListItemType} />
      <BtnWrapper>
        <StyledButton
          variant="outlined"
          color="primary"
          onClick={() => history.push("/Categories")}
        >
          Return to list
        </StyledButton>
        <StyledButton
          variant="outlined"
          color="secondary"
          onClick={() => {
            history.push("/Categories");
            dispatch(removeCategory(categoryItem as categoryStateType));
          }}
        >
          Delete
        </StyledButton>
      </BtnWrapper>
    </Root>
  );
};

export default ViewCategory;
