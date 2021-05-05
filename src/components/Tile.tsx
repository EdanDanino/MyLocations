import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ITheme } from "Theme";
import { TileTypes } from "./types";

const Wrapper = styled.div`
  background: ${({ theme }: { theme: ITheme }) => theme.colors.primary};
  width: 200px;
  color: ${({ theme }: { theme: ITheme }) => theme.colors.white};
  font-size: 5px;
  border-radius: 3px;
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
const Tiles: FunctionComponent<TileTypes> = ({ id, title, children }) => {
  return (
    <Wrapper key={id}>
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
