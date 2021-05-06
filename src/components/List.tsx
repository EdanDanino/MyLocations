import React, { FunctionComponent, useMemo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { StateType } from "store/slices/types";
import styled from "styled-components";
import { Tile, Title } from "./";
import { ListItemType, ListTypes } from "./types";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 20px;
`;

const ItemWrapper = styled.div`
  margin: 0 20px 10px;
`;
const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const selector = (state: StateType) => ({
  selectedItem: state.selectedItem,
});

const List: FunctionComponent<ListTypes> = ({ itemsArray }) => {
  const location = useLocation();
  const { selectedItem } = useSelector(selector);

  const route = useMemo(() => {
    return location?.pathname.split("/")[1];
  }, [location]);

  return (
    <Root>
      <StyledTitle text={route} />
      <Container>
        {itemsArray?.map((item: ListItemType) => {
          return (
            <ItemWrapper key={item.id}>
              <Tile
                key={`${item.id}-key`}
                id={item.id}
                title={item.name}
                onClick={() => console.log("do Something")}
                onTryToSelectItem={() => item.id === selectedItem.id}
                // If this statement is true
                // it means the selected item slot is full! check store
              />
            </ItemWrapper>
          );
        })}
      </Container>
    </Root>
  );
};

export default List;
