import {
  Button,
  FormControl,
  Input,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { FunctionComponent, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { categoryStateType } from "store/slices/types";
import styled, { css } from "styled-components";
import { ITheme } from "Theme";
import { FieldsType, FormTypes } from "./types";

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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const FieldsCss = css`
  margin: 20px 0;
`;
const StyledSelect = styled(Select)`
  ${FieldsCss}
`;

const StyledInpu = styled(Input)`
  ${FieldsCss}
`;
const Btn = styled(Button)`
  ${FieldsCss}
  x
`;

const Column = styled.div`
  display: flex;
  flex-direction: Column;
  justify-items: space-between;
`;

const Form: FunctionComponent<FormTypes> = ({
  fields,
  buttonText,
  onSubmit,
  initialValues,
}) => {
  const { handleSubmit, control } = useForm();
  const [selectArray, setSelectArray] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectArray(event.target.value as string[]);
  };

  const costumeOnSubmit = (data: any) => {
    if (fields.length > 3) {
      const auditData = selectArray.toString();
      data.category = auditData;
    }

    onSubmit(data);
  };

  type IntialValueKey = keyof typeof initialValues;

  return (
    <Container>
      <Column>
        <StyledForm onSubmit={handleSubmit(costumeOnSubmit)}>
          {fields?.map((f: FieldsType, idx: number) => {
            return (
              <Controller
                key={f.name}
                name={f.name}
                control={control}
                render={({ onChange, value }) =>
                  f.isFieldASelect ? (
                    <FormControl>
                      <StyledSelect
                        key={`${f.name}-key`}
                        value={selectArray}
                        name={`${f.name}-Select`}
                        multiple
                        onChange={handleChange}
                        defaultValue={f.options ? f?.options[0] : null}
                        id={`${f.name}-id`}
                        required
                      >
                        {f?.options?.length ? (
                          f?.options?.map((option: categoryStateType) => {
                            return (
                              <MenuItem
                                key={`${option.id}-key`}
                                id={option.id}
                                value={option.name}
                              >
                                {option.name}
                              </MenuItem>
                            );
                          })
                        ) : (
                          <MenuItem key={"noOption"} value={"No Option"}>
                            There are no options!
                          </MenuItem>
                        )}
                      </StyledSelect>
                    </FormControl>
                  ) : (
                    <StyledInpu
                      key={`${f.name}-${idx}`}
                      onChange={onChange}
                      defaultValue={
                        initialValues
                          ? initialValues[f?.name as IntialValueKey]
                          : null
                      }
                      value={value}
                      name={f.name}
                      required
                      placeholder={f.name}
                    />
                  )
                }
              />
            );
          })}
          <Wrapper>
            <Btn variant="outlined" color="primary" type="submit">
              {buttonText || initialValues ? "Edit" : "Add"}
            </Btn>
          </Wrapper>
        </StyledForm>
      </Column>
    </Container>
  );
};

export default Form;
