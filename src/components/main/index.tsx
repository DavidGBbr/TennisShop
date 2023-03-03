import React from "react";
import { useNavigate } from "react-router-dom";
import { shoes } from "../../assets/utils/shoes";
import { BtnNavigate } from "./styles";

export const MainNavigate = () => {
  const navigate = useNavigate();
  const handleNavigateBtn = (path: string) => {
    navigate(path);
  };
  return (
    <>
      {shoes.map((item, index) => (
        <BtnNavigate key={index} onClick={() => handleNavigateBtn(item.path)}>
          {item.name}
        </BtnNavigate>
      ))}
    </>
  );
};
