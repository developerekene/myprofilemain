import React from "react";
import { Provider } from "react-redux";
import { store } from "./App/Redux/Store";
import AppEntry from "./App/UI/AppEntry";
import ParticlesBackground from "./App/UI/Components/ParticlesBackground";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ParticlesBackground />
      <AppEntry />
    </Provider>
  );
};

export default App;
