import React from "react";
import {
  BuyBtn,
  CardContent,
  CardItem,
  ImageItem,
  TextValue,
  Title,
} from "./styles";

type Prop = {
  title: string;
  price: string;
  image: string;
};

export const ShoeItem = ({ title, price, image }: Prop) => {
  return (
    <CardItem>
      <ImageItem src={image} alt="imagem" />
      <CardContent>
        <Title>{title}</Title>

        <TextValue>{price}</TextValue>
        <BuyBtn>Comprar</BuyBtn>
      </CardContent>
    </CardItem>
  );
};
