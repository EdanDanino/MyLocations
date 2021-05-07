import { IconDefinition, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { categoryStateType, locationStateType } from "store/slices/types";
import { ITheme } from "Theme";
export type ThemedType = {
  theme: ITheme;
};
export type TileTypes = {
  id: string;
  title: string;
};

export type Disableable = {
  disabled?: boolean;
};

export type TitleTypes = {
  color?: string;
  text: string;
};

export type IconTypes = {
  icon: IconDefinition;
  color: string;
  size?: SizeProp;
  disabled?: boolean;
  onClick?: () => void;
};

export interface IconCssTypes extends ThemedType {
  color: string;
  disabled?: boolean;
}
export type ListItemType = locationStateType | categoryStateType;

export type ListTypes = {
  itemsArray: Array<ListItemType>;
};

export type FieldsType = {
  name: string;
  label?: string;
  type?: string;
  inputType?: string;
  onChange?: () => void;
  isFieldASelect?: Boolean;
  options?: categoryStateType[];
};

export type InformationTypes = {
  item: ListItemType;
};

export interface FormTypes {
  onSubmit: (data: {}) => void;
  fields: FieldsType[];
  initialValues?: ListItemType;
  buttonText?: string;
}
