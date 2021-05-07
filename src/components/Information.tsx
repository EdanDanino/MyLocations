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
  min-height: 400px;
`;

const Container = styled.div`
  border: 2px solid ${({ theme }: { theme: ITheme }) => theme.colors.lightGrey};
  padding: 20px 50px;
  border-radius: 5px;
  min-height: 200px;
  min-width: 200px;
  box-shadow: 1px 1px 4px
    ${({ theme }: { theme: ITheme }) => theme.colors.shadow};
  margin: 30px 0;
`;

const FieldWrapper = styled.div`
  padding: 5px 0;
  letter-spacing: 1px;
`;

const BlueLine = styled.div`
  height: 2px;
  margin: 0;
  display: block;
  background: ${({ theme }: { theme: ITheme }) => theme.colors.primary};
`;

const ItemWrapper = styled.div`
  margin-top: 20px;
`;

const Information: FunctionComponent<InformationTypes> = ({ item }) => {
  const ObjectKeys = Object.keys(item);

  return (
    <Wrapper>
      <Container>
        <h3>{item.name}</h3>
        {ObjectKeys.map((key: keyof typeof item | string) => {
          return (
            <ItemWrapper>
              <FieldWrapper>{`${key} : ${
                item[key as keyof typeof item]
              }`}</FieldWrapper>
              <BlueLine />
            </ItemWrapper>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default Information;
