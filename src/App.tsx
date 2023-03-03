import React from "react";
import Header from "./components/header";
import { MainNavigate } from "./components/main";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <Header />
      <MainRoutes />
      <MainNavigate />
    </>
  );
};

export default App;
