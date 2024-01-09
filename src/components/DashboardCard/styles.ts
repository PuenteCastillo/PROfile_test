import { Color } from "globals/enums";
import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 60px 60px;
  max-width: 650px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 0 6px ${Color.Black}29;
`;

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 370px;
  margin: auto;
  align-items: center;
  text-align: center;
`;

export const CardHeader = styled.h2`
  font-family: "Inter",serif;
  margin-top: 30px;
  margin-bottom: 0;
  font-size: 24px;
  font-weight: bold;
`;

export const CardDescription = styled.p`
  font-family: "Inter",serif;
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 18px;
`;

export const CardTip = styled.p`
  font-family: "Inter",serif;
  margin-top: 30px;
  margin-bottom: 0;
  font-size: 14px;
`;

export const CardButton = styled.button`
  cursor: pointer;
  margin-top: 30px;
  padding: 14px;
  border: 0;
  border-radius: 8px;
  background: ${Color.Blue};
  color: ${Color.White};
  font-size: 18px;
  font-weight: 600;
`;
