import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CategoryIcon from "@material-ui/icons/Category";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import React, { ChangeEvent, useMemo, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
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
  width: 500px;
  background-color: ${({ theme }: { theme: ITheme }) =>
    theme.colors.darkGrey}!important;
  border-radius: 10px 10px 0 0;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }: { theme: ITheme }) => theme.colors.primary};
  padding-top: 0;
  width: 100%;
  height: 100%;
`;

const FooterContent = () => {
  const pathname = useLocation().pathname;
  // const history = useHistory();
  const [value, setValue] = useState(pathname);

  const handleChange = (event: ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  // const route = useMemo(() => {
  //   return pathname.split("/")[1];
  // }, [pathname]);

  return (
    <StyledBottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Categories"
        value="Categories"
        component={StyledLink}
        to="/Categories"
        icon={<CategoryIcon />}
      />
      <BottomNavigationAction
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
