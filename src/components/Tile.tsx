import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { ITheme } from "Theme";
import { TileTypes } from "./types";

const Wrapper = styled.div<{ isSelected: boolean }>`
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
  background: ${({ theme }: { theme: ITheme }) => theme.colors.shadeOnTop};
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
const Tiles: FunctionComponent<TileTypes> = ({
  id,
  title,
  onTryToSelectItem,
  children,
}) => {
  const [isSelected, SetIsSelecte] = useState(false);
  return (
    <Wrapper
      key={id}
      isSelected={isSelected}
      onClick={() => {
        if (!onTryToSelectItem()) {
          SetIsSelecte(!isSelected);
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
