import { Color } from "globals/enums";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderLogo = styled.div`
  cursor: pointer;
  color: ${Color.White};
  background: ${Color.Blue};
  border-radius: 8px;
  padding-top: 8px;
  margin-left: 43px;
  height: 40px;
  width: 80px;
  text-align: center;
`;

export const HeaderLogoImg = styled.img`
  margin-left: 43px;
  height: 100%;
`;

export const HeaderLinks = styled.div`
  margin-right: 43px;
`;

export const HeaderLink = styled(Link)`
  color: ${Color.Black};
  margin-left: 44px;
  font-size: 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 80px;
  width: 100%;
  margin: 20px 0;
  container-type: inline-size;
  z-index: 10;

  @container(max-width: 360px) {
    ${HeaderLinks} {
      display: none;
    }

    ${HeaderLogo} {
      margin-left: 25px;
    }

    ${HeaderLogoImg} {
      margin-left: 25px;
      height: 65px;
    }
  }
`;
