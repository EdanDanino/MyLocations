import { List, ListItem, ListItemText } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { FunctionComponent, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { removeCategory } from "store/slices/category";
import {
  categoryStateType,
  locationStateType,
  StateType,
} from "store/slices/types";
import styled from "styled-components";
import { navbarTypes } from "./types";
import _ from "lodash";
import { removeLocation } from "store/slices/location";

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
  state: state,
});

const Navbar: FunctionComponent<navbarTypes> = ({ navLinks }) => {
  const classes = useStyles();
  const pathname = useLocation().pathname;
  const { selectedItem, state } = useSelector(selector);
  const dispatch = useDispatch();
  const { title, navDisplayFlex } = classes;

  const route = useMemo(() => {
    return pathname.split("/")[1];
  }, [pathname]);

  type stateKey = keyof typeof state;

  const onRemove = useCallback(() => {
    const stateIterator = route.toLocaleLowerCase() as stateKey;
    const findRecord = _.find(state[stateIterator], (o: { id: string }) => {
      return o.id === selectedItem.id;
    });
    if (route === "Categories") {
      if (findRecord) {
        dispatch(removeCategory(findRecord as categoryStateType));
      } else {
        console.log("UXish Error");
      }
    } else {
      if (findRecord) {
        dispatch(removeLocation(findRecord as locationStateType));
      } else {
        console.log("UXish Error");
      }
    }
  }, [dispatch, route, selectedItem.id, state]);

  const defaultNavLinks = useMemo(
    () => [
      {
        title: `Add`,
      },
      {
        title: `Remove`,
        onClick: onRemove,
      },
      {
        title: `Edit`,
      },
    ],
    [onRemove]
  );

  const filteredNavs = useMemo(() => {
    if (!selectedItem.id) {
      if (navLinks) {
        return navLinks.filter((nl) => nl.title === "Add");
      } else {
        return defaultNavLinks.filter((nl) => nl.title === "Add");
      }
    } else {
      if (navLinks) {
        return navLinks.filter((nl) => nl.title !== "Add");
      } else {
        return defaultNavLinks.filter((nl) => nl.title !== "Add");
      }
    }
  }, [defaultNavLinks, navLinks, selectedItem.id]);

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
              filteredNavs.map(({ title, onClick }) => {
                return (
                  <StyledLink
                    key={title}
                    to={`/${pathname.split("/")[1]}/${title}`}
                    onClick={onClick}
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
