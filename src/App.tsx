import React from "react";
import { Provider } from "react-redux";
import { store } from "./App/Redux/Store";
import AppEntry from "./App/UI/AppEntry";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppEntry />
    </Provider>
  );
};

export default App;
