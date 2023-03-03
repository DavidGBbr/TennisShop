import styled from "styled-components";

export const CardItem = styled.div`
  width: 40%;
  background-color: #f7f7f7;
  box-shadow: 2px 4px 12px rgb(0 0 0 / 19%);
  border-radius: 5%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 20px;
  margin: 50px auto;
  transition: 0.5s;

  &:hover {
    transform: scale(1.04);
  }

  @media (max-width: 900px) {
    flex-direction: row;
    width: calc(80% - 80px);
  }
`;

export const ImageItem = styled.img`
  width: 50%;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.h1`
  font-size: 22px;
  margin: 0px;

  @media (max-width: 900px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const TextValue = styled.h2`
  margin: 0px;
  font-size: 36px;
  font-weight: lighter;
  color: #00d864;
  max-width: 100%;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const BuyBtn = styled.button`
  border: none;
  background-color: #3483fa;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin: 0 auto;
  width: 100%;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;

  @media (max-width: 900px) {
    font-size: 16px;
  }

  @media (max-width: 700px) {
    padding: 10px;
    font-size: 12px;
  }
`;
