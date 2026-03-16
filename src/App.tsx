import React from "react";
import { Provider } from "react-redux";
import { store } from "./App/Redux/Store";
import Index from "./App/routes/Index";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;
