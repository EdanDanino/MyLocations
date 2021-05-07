import React, { FunctionComponent, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedItem, setSelectedItem } from "store/slices/selectedItem";
import { StateType } from "store/slices/types";
import styled, { css, keyframes } from "styled-components";
import { ITheme } from "Theme";
import { TileTypes } from "./types";

const shakeAnimation = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  20% { transform: translate(-1px, -2px) rotate(-1deg); }
  40% { transform: translate(-3px, 0px) rotate(1deg); }
  60% { transform: translate(3px, 2px) rotate(0deg); }
  80% { transform: translate(1px, -1px) rotate(1deg); }
  100% { transform: translate(-1px, 2px) rotate(-1deg); }
`;

const Wrapper = styled.div<{ isSelected: boolean; isShaked: boolean }>`
  background: ${({ theme }: { theme: ITheme }) => theme.colors.primary};
  width: 200px;
  color: ${({ theme }: { theme: ITheme }) => theme.colors.white};
  font-size: 5px;
  border-radius: 3px;
  box-shadow: ${({
    isSelected,
    theme,
  }: {
    isSelected: boolean;
    theme: ITheme;
  }) => (isSelected ? `0px 0px 20px ${theme.colors.selected}` : "none")};
  transition: 0.8s all ease-in-out;
  animation: ${({ isShaked }) =>
    isShaked
      ? css`
          ${shakeAnimation} 0.8s
        `
      : "none"};
`;

const TileHeader = styled.div`
  padding: 15px 20px 40px;
  height: 50px;
`;
const Title = styled.div`
  text-align: center;
  font-weight: 200;
  font-size: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const WhiteLine = styled.div`
  height: 2px;
  margin: 0;
  display: block;
  background: ${({ theme }: { theme: ITheme }) => theme.colors.white};
`;

const TileFooter = styled.div`
  display: flex;
  width: 200px;
  height: 50px;
  text-align: center;
  background: ${({ theme }: { theme: ITheme }) => theme.colors.shadeOnTop};
  border-radius: 0 0 3px 3px;
`;

const ProgressBar = styled.div`
  display: block;
  background: ${({ theme }: { theme: ITheme }) => theme.colors.white};
  width: 150px;
  height: 1px;
`;

const selector = (state: StateType) => ({
  selectedItem: state.selectedItem,
});

const Tiles: FunctionComponent<TileTypes> = ({ id, title, children }) => {
  const [isShaked, SetIsShaked] = useState(false);
  const { selectedItem } = useSelector(selector);
  const dispatch = useDispatch();

  const shakeComponent = () => {
    SetIsShaked(true);
    setTimeout(() => {
      SetIsShaked(false);
    }, 1000);
  };

  const isStateEqualToItem = useMemo(() => {
    return selectedItem?.id === id;
  }, [selectedItem, id]);

  return (
    <Wrapper
      key={id}
      isSelected={isStateEqualToItem}
      isShaked={isShaked}
      onClick={() => {
        if (!isStateEqualToItem) {
          shakeComponent();
          dispatch(setSelectedItem({ id: id }));
        } else {
          dispatch(clearSelectedItem());
        }
      }}
    >
      <TileHeader>
        <Title title={title}>{title}</Title>
      </TileHeader>
      <WhiteLine>
        <ProgressBar />
      </WhiteLine>
      <TileFooter>{children}</TileFooter>
    </Wrapper>
  );
};

export default Tiles;
