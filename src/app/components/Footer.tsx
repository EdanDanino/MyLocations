import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CategoryIcon from "@material-ui/icons/Category";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import React, { ChangeEvent, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ITheme } from "Theme";

const BottomPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50px;
  position: fixed;
  bottom: 0;
`;

const StyledBottomNavigation = styled(BottomNavigation)`
  width: 336px;
  border-radius: 10px 10px 0 0;
  border: 2px solid ${({ theme }: { theme: ITheme }) => theme.colors.secondary};
  height: 0;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }: { theme: ITheme }) => theme.colors.primary};
  padding-top: 0;
  width: 100%;
  height: 100%;
`;

const FooterContent = () => {
  const pathname = useLocation().pathname;
  const [value, setValue] = useState(pathname);

  const handleChange = (event: ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <StyledBottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        showLabel
        label="Categories"
        value="Categories"
        component={StyledLink}
        to="/Categories"
        icon={<CategoryIcon />}
      />
      <BottomNavigationAction
        showLabel
        label="Locations"
        value="Locations"
        component={StyledLink}
        to="/Locations"
        icon={<LocationOnIcon />}
      />
    </StyledBottomNavigation>
  );
};

const Footer = () => (
  <BottomPosition>
    <FooterContent />
  </BottomPosition>
);

export default Footer;
