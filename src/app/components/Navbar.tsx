import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import _ from "lodash";
import React, { FunctionComponent, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { removeCategory } from "store/slices/category";
import { removeLocation } from "store/slices/location";
import { clearSelectedItem } from "store/slices/selectedItem";
import {
  categoryStateType,
  locationStateType,
  StateType,
} from "store/slices/types";
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

const StyledButton = styled(Button)`
  background: transparent;
  border: none;
  text-decoration: none;
  text-transform: uppercase;
  color: white !important;
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
  const history = useHistory();

  const { title, navDisplayFlex } = classes;

  const route = useMemo(() => {
    return pathname.split("/")[1];
  }, [pathname]);

  history.listen(() => {
    dispatch(clearSelectedItem());
  });

  type stateKey = keyof typeof state;

  const onEditorView = useCallback(
    (whatRoute) => {
      if (route === "Categories") {
        history.push(`/Categories/${whatRoute}/${selectedItem.id}`);
      } else {
        history.push(`/Locations/${whatRoute}/${selectedItem.id}`);
      }
    },
    [history, route, selectedItem.id]
  );

  const onRemove = useCallback(() => {
    const stateIterator = route.toLocaleLowerCase() as stateKey;
    const findRecord = _.find(state[stateIterator], (o: { id: string }) => {
      return o.id === selectedItem.id;
    });
    if (route === "Categories") {
      if (findRecord) {
        dispatch(removeCategory(findRecord as categoryStateType));
        dispatch(clearSelectedItem());
      }
    } else {
      if (findRecord) {
        dispatch(removeLocation(findRecord as locationStateType));
        dispatch(clearSelectedItem());
      }
    }
  }, [dispatch, route, selectedItem.id, state]);

  const onAdd = useCallback(() => {
    if (route === "Categories") {
      history.push(`/Categories/Add`);
    } else {
      history.push(`/Locations/Add`);
    }
  }, [history, route]);

  const defaultNavLinks = useMemo(
    () => [
      {
        title: `View`,
        onClick: () => onEditorView("View"),
      },
      {
        title: `Add`,
        onClick: onAdd,
      },
      {
        title: `Remove`,
        onClick: onRemove,
      },
      {
        title: `Edit`,
        onClick: () => onEditorView("Edit"),
      },
    ],
    [onAdd, onEditorView, onRemove]
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
              !pathname?.includes("View") &&
              !pathname?.includes("Edit") &&
              filteredNavs.map(({ title, onClick }) => {
                return (
                  <StyledButton key={title} onClick={onClick}>
                    <ListItem>
                      <ListItemText primary={title} />
                    </ListItem>
                  </StyledButton>
                );
              })}
          </List>
        </Toolbar>
      </AppBar>
    </Root>
  );
};

export default Navbar;
