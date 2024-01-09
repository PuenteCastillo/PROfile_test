import styled from "styled-components";
import { Col as Column } from "antd";
import { Color } from "globals/enums";

export const AboutBrickContent = styled.div`
  display: flex;
  padding: 80px 160px;
  background-size: cover;
  background-position: center;
`;

export const AboutBrickColumn = styled.div`
  width: 50%;

  &:first-child {
    padding-right: 30px;
  }
`;

export const AboutBrickTitle = styled.p`
  font-size: 52px;
  margin-bottom: 40px;
`;

export const AboutBrickBody = styled.p`
  color: ${Color.Gray10};
  font-family: "Open Sans";
  font-size: 14px;
  margin-bottom: 100px;
`;

export const AboutBrickStats = styled.div`
  display: flex;
  flex-flow: wrap;
  background: ${Color.White}a3 0% 0% no-repeat padding-box;
  border: 10px solid ${Color.White};
  height: 156px;
  width: 100%;
`;

export const AboutBrickStat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25%;
`;

export const AboutBrickStatTitle = styled.p`
  color: ${Color.Gray8};
  font-family: "Open Sans";
  font-size: 11px;
  margin-bottom: 7px;
`;

export const AboutBrickStatData = styled.p`
  color: ${Color.DarkBlue};
  font-family: "PT Serif Bold";
  font-size: 2vw;
  line-height: 40px;
  margin: 0;
`;

export const AboutBrickWrapper = styled.div`
  container-type: inline-size;

  @container (max-width: 1200px) {
    ${AboutBrickContent} {
      flex-direction: column;
      padding: 40px 30px;
    }

    ${AboutBrickColumn} {
      width: 100%;

      &:first-child {
        padding-right: 0;
      }
    }

    ${AboutBrickTitle} {
      font-size: 30px;
      line-height: 30px;
      margin-bottom: 40px;
    }

    ${AboutBrickBody} {
      margin-bottom: 30px;
    }

    ${AboutBrickStats} {
      height: auto;
      margin-bottom: 30px;
    }

    ${AboutBrickStat} {
      width: 50%;
    }

    ${AboutBrickStatTitle} {
      font-size: 14px;
      font-weight: 600;
      margin: 0;
    }

    ${AboutBrickStatData} {
      font-size: 48px;
      margin-bottom: 30px;
    }
  }
`;

export const AboutBrickImageContainer = styled.div`
  position: relative;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export const AboutBrickImage = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 10px solid ${Color.White};
`;

export const AboutBrickImagePreview = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Color.White};
  border: 10px solid ${Color.White};
  color: ${Color.DarkerBlue};
  font-weight: bold;
  font-size: 5vw;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Col = styled(Column)`
  &:nth-child(3) {
    div::after {
      padding-bottom: 50%;
    }
  }
`;
