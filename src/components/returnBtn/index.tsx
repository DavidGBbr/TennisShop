import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./styles";

const ReturnBtn = () => {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate(-1);
  };
  return (
    <Button
      onClick={() => {
        handleBackBtn();
      }}
    >
      Voltar
    </Button>
  );
};

export default ReturnBtn;
