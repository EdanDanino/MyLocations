import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ITheme } from "Theme";
import { InformationTypes } from "./types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const Container = styled.div`
  border: 2px solid ${({ theme }: { theme: ITheme }) => theme.colors.primary};
  padding: 20px 50px;
  border-radius: 5px;
  max-height: 70%;
  box-shadow: 2px 4px 3px
    ${({ theme }: { theme: ITheme }) => theme.colors.shadow};
  margin: auto;
`;

const Information: FunctionComponent<InformationTypes> = ({ fields, item }) => {
  return (
    <Wrapper>
      <Container>{/* <div>{item}</div> */} hi</Container>
    </Wrapper>
  );
};

export default Information;
