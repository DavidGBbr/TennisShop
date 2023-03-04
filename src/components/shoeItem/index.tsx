import React from "react";
import ReturnBtn from "../returnBtn";
import {
  BuyBtn,
  CardContent,
  CardItem,
  Container,
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
    <Container>
      <CardItem>
        <ImageItem src={image} alt="imagem" />
        <CardContent>
          <Title>{title}</Title>

          <TextValue>{price}</TextValue>
          <BuyBtn>Comprar</BuyBtn>
        </CardContent>
      </CardItem>
      <ReturnBtn />
    </Container>
  );
};
