import styled from "styled-components";
import { Link } from "react-router-dom";
import { Color } from "globals/enums";

export const TemplateCardContainer = styled.div`
  position: relative;
  border-radius: 8px;
  box-shadow: 0 3px 6px ${Color.Black}29;
`;

export const TemplateCardBg = styled.img`
  border-radius: 8px;
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

export const TemplateCardName = styled.p`
  font-family: "Inter",serif;
  margin: 20px 0 0 0;
  font-size: 20px;
  text-align: center;
`;

export const TemplateCardHover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.96);
  opacity: 0;
  border-radius: 8px;
  transition: opacity 0.3s linear;
  padding: 44px;

  ${TemplateCardContainer}:hover & {
    opacity: 1;
  }
`;

export const TemplateCardType = styled.p`
  font-family: "Inter",serif;
  margin: 0;
  font-size: 17px;
  color: ${Color.Gray7};
`;

export const TemplateCardHeading = styled.h2`
  font-family: "Inter",serif;
  margin: 5px 0 10px 0;
  font-size: 34px;
  font-weight: bold;
`;

export const TemplateCardDescription = styled.p`
  font-family: "Inter",serif;
  margin: 0;
  font-size: 18px;
`;

export const TemplateCardPreviewLink = styled.a`
  display: block;
  margin-top: 10px;
  font-size: 18px;
  color: ${Color.Blue};
`;

export const TemplateCardCtaWrapper = styled.div`
  .ant-btn {
    font-weight: 600;
    margin-top: 20px;
  }

  .ant-btn-default {
    color: ${Color.Blue};
  }
`;
