import { Button } from "@material-ui/core";
import { Information } from "components";
import { ListItemType } from "components/types";
import { findPopulatedItem } from "pages/utils/findPopulatedItems";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { StateType } from "store/slices/types";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  margin: 20px 0;
`;

const selector = (state: StateType) => ({
  categories: state.categories,
});

const fields = [
  {
    name: "name",
  },
];

const ViewCategory = () => {
  const { categories } = useSelector(selector);
  const location = useLocation();
  const history = useHistory();

  const itemId = useMemo(() => {
    return location?.pathname.split("/")[3];
  }, [location]);

  const categoryItem = findPopulatedItem(categories, itemId);

  return (
    <Root>
      <Information fields={fields} item={categoryItem as ListItemType} />
      <StyledButton
        variant="outlined"
        color="primary"
        onClick={() => history.push("/Categories")}
      >
        Return to list
      </StyledButton>
    </Root>
  );
};

export default ViewCategory;
