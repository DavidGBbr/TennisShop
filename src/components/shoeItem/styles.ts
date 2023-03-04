import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

  @media (max-width: 900px) {
    flex-direction: row;
    width: calc(80% - 80px);
  }

  @media (max-width: 600px) {
    width: calc(100% - 40px);
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
  line-height: 90%;
  margin: 0px;

  @media (max-width: 900px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }

  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

export const TextValue = styled.h2`
  margin: 0px;
  font-size: 36px;
  font-weight: lighter;
  color: #00d864;
  max-width: 100%;

  @media (max-width: 600px) {
    font-size: 28px;
  }

  @media (max-width: 400px) {
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
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #2561b9;
  }

  @media (max-width: 900px) {
    font-size: 16px;
  }

  @media (max-width: 700px) {
    padding: 10px;
    font-size: 12px;
  }
`;
