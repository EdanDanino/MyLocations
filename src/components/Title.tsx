import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ITheme } from "Theme";
import { TitleTypes } from "./types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  user-select: none;
`;
const H1 = styled.h1`
  display: block;
  font-size: 50px;
  font-weight: 200;
  line-height: 1.1;
  text-decoration: underline;
  color: ${({ theme }: { theme: ITheme }) => theme.colors.primary};
  z-index: ${({ theme }: { theme: ITheme }) => theme.zIndexs.aboveZero};
`;
const UnderLine = styled.span`
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
  color: ${({ color }) => color};
  cursor: default;
`;

const Title: FunctionComponent<TitleTypes> = ({ text, color = "black" }) => {
  return (
    <Wrapper>
      <H1>
        <UnderLine color={color}>{text}</UnderLine>
      </H1>
    </Wrapper>
  );
};

export default Title;
