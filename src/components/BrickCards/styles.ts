import { Color } from "globals/enums";
import styled from "styled-components";

export const BrickCardsWrapper = styled.div`
  padding-right: 40px;
  padding-top: 80px;
`;

export const BrickImage = styled.img`
  cursor: pointer;
  max-width: 100%;
`;

export const BrickImageWrapper = styled.div`
  display: inline-block;
  position: relative;
  margin-bottom: 8px;

  &:hover {
    outline: 3px solid ${Color.Blue};
    border-radius: 8px;
    cursor: pointer;
    // transform: scale(1.03);
  }
`;

export const UseThisBrick = styled.div`
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  height: 36px;
  line-height: 36px;
  padding: 0 0.5rem;
  display: none;
  position: absolute;
  text-align: center;
  background-color: ${Color.White};
  font-size: 1rem;
  outline: 3px solid ${Color.Blue};
  border-radius: 8px;
  cursor: pointer;

  ${BrickImageWrapper}:hover & {
    display: block;
  }
`;
