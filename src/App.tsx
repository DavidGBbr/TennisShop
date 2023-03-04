import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <Header />
      <MainRoutes />
      <Footer />
    </>
  );
};

export default App;
