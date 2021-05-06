import React from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { reduxStore } from "store";
import { clearSelectedItem } from "store/slices/selectedItem";
import styled from "styled-components";
import AppRouter from "./AppRouter";
import { Footer, Navbar } from "./components";

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Page = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  const dispatch = useDispatch();
  const navLinks = [
    {
      title: `Add`,
    },
    {
      title: `Remove`,
    },
    {
      title: `Edit`,
    },
  ];
  dispatch(clearSelectedItem());
  return (
    <>
      <Provider store={reduxStore.store}>
        <PersistGate loading={null} persistor={reduxStore.persistor}>
          <BrowserRouter>
            <Root>
              <Navbar navLinks={navLinks} />
              <Page>
                <AppRouter />
              </Page>
              <Footer />
            </Root>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
