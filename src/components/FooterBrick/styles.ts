import { Color } from "globals/enums";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterBrickCopyright = styled.div`
  font-size: 17px;
  font-family: "Open Sans Bold";
  color: ${Color.White};
`;

export const FooterBrickLink = styled(Link)`
  color: ${Color.Gray8};
  margin-left: 44px;
  font-size: 16px;
  font-family: "Open Sans";
`;

export const FooterBrickContainer = styled.div`
  background: ${Color.Gray10};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 112px;
  width: 100%;
  padding: 0 160px;
`;

export const FooterBrickWrapper = styled.div`
  container-type: inline-size;

  @container (max-width: 1100px) {
    ${FooterBrickContainer} {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 112px;
      padding: 0;
    }

    ${FooterBrickLink} {
      margin-left: 25px;
      font-size: 14px;
    }

    ${FooterBrickCopyright} {
      font-size: 15px;
    }
  }
`;
