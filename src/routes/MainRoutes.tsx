import React from "react";
import { Route, Routes } from "react-router-dom";
import { shoes } from "../assets/utils/shoes";
import { MainNavigate } from "../components/main";
import { ShoeItem } from "../components/shoeItem";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainNavigate />} />
      {shoes.map((item, index) => (
        <Route
          key={index}
          path={item.path}
          element={
            <ShoeItem title={item.name} price={item.price} image={item.image} />
          }
        />
      ))}
    </Routes>
  );
};

export default MainRoutes;
