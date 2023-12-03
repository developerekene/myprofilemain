/* eslint-disable @typescript-eslint/no-unused-vars */
import { Animator, ScrollContainer, ScrollPage } from "react-scroll-motion";
import AppEntry from "./App/UI/AppEntry";

const App: React.FunctionComponent = () => {
  return (
    <ScrollContainer>
      {/* <ScrollPage page={0}> */}
      {/* <Animator children={undefined} animation={undefined}> */}
      <AppEntry />
      {/* </Animator> */}
      {/* </ScrollPage> */}
    </ScrollContainer>
  );
};

export default App;
