import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { IconTypes, IconCssTypes } from "./types";

const StyledIcon = styled(FontAwesomeIcon)`
  margin: auto;
  color: ${({ color, disabled, theme }: IconCssTypes) =>
    disabled ? theme.colors.primary : color};
  padding: 5px;
`;

const Icon: FunctionComponent<IconTypes> = ({
  color,
  size = "1x",
  disabled,
  icon,
  onClick,
  ...rest // Mainly for style
}) => (
  <StyledIcon
    icon={icon}
    color={color}
    size={size}
    disabled={disabled}
    onClick={onClick}
    {...rest}
  ></StyledIcon>
);
export default Icon;
