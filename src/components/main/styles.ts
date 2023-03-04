import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  padding: 40px;
`;

export const BtnNavigate = styled.button`
  padding: 20px;
  width: 50%;
  background-color: #323232;
  color: #fff;
  text-align: left;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`;
