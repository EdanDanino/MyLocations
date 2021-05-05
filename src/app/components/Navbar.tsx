import { List, ListItem, ListItemText } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import {
  createStyles,
  fade,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { FunctionComponent, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
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
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
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

const Navbar: FunctionComponent<navbarTypes> = ({ navLinks }) => {
  const classes = useStyles();
  const location = useLocation();
  const route = useMemo(() => {
    return location?.pathname.split("/")[1];
  }, [location]);

  const { title, navDisplayFlex } = classes;

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
            {navLinks.map(({ title }) => {
              return (
                <StyledLink key={title} to={`${route}/${title}`}>
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
