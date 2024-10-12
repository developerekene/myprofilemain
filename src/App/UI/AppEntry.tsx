import React from "react";
import Index from "../Routes/Index";
import Footer from "./Components/Footer";
import { RiLoader2Fill } from "react-icons/ri";

const AppEntry: React.FunctionComponent = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  return (
    <>
      {loading === false ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20
            }}
          >
            <RiLoader2Fill style={{ color: "white" }} />
            <p style={{ fontSize: 18, color: "white", fontWeight: "600" }}>
              Loading...
            </p>
          </div>
        </div>
      ) : (
        <>
          <Index />
          <Footer />
        </>
      )}
    </>
  );
};

export default AppEntry;
