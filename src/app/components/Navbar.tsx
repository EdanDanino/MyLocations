import { List, ListItem, ListItemText } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { FunctionComponent, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { StateType } from "store/slices/types";
import styled from "styled-components";
import { navbarTypes } from "./types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    navDisplayFlex: {
      display: `flex`,
      justifyContent: `space-between`,
    },
  })
);

const Root = styled.div`
  width: 100%;
  flex-grow: 1;
`;

const StyledLink = styled(Link)`
  background: transparent;
  border: none;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
`;

const selector = (state: StateType) => ({
  selectedItem: state.selectedItem,
});

const Navbar: FunctionComponent<navbarTypes> = ({ navLinks }) => {
  const classes = useStyles();
  const pathname = useLocation().pathname;
  const { selectedItem } = useSelector(selector);
  const { title, navDisplayFlex } = classes;

  const filteredNavs = useMemo(() => {
    if (!selectedItem) {
      return navLinks.filter((nl) => nl.title === "Add");
    } else {
      return navLinks.filter((nl) => nl.title !== "Add");
    }
  }, [navLinks, selectedItem]);

  console.log(navLinks.filter((nl) => nl.title === "Add"));

  return (
    <Root>
      <AppBar position="static">
        <Toolbar>
          <Typography className={title} variant="h6" noWrap>
            MyLocations
          </Typography>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={navDisplayFlex}
          >
            {pathname !== "/" &&
              filteredNavs.map(({ title }) => {
                return (
                  <StyledLink
                    key={title}
                    to={`/${pathname.split("/")[1]}/${title}`}
                  >
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  </StyledLink>
                );
              })}
          </List>
        </Toolbar>
      </AppBar>
    </Root>
  );
};

export default Navbar;
