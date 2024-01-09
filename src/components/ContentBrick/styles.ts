import { Color } from "globals/enums";
import styled from "styled-components";

export const ContentBrickContent = styled.div`
  padding: 80px 160px;
  background-size: cover;
  background-position: center;
`;

export const ContentBrickTitle = styled.h2`
  color: ${Color.DarkBlue};
  font-family: "PT Serif Bold";
  text-align: left;
  margin-bottom: 20px;
  width: 100%;
`;

export const ContentBrickParagraphContainer = styled.div`

`;

export const ContentBrickParagraph = styled.p`

`;

export const ContentBrickImages = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 100%;
`;

export const ContentBrickImageContainer = styled.div`
  padding: 2vw;
  text-align: center;
  width: 25%;
`;

export const ContentBrickImageWrapper = styled.div`
  position: relative;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export const ContentBrickImage = styled.img`
  object-fit: cover;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ isRounded }: { isRounded: boolean }): string => {
    return isRounded ? "border: 8px solid #FFFFFF;  border-radius: 100%;" : "";
  }};
`;

export const ContentBrickImageTitle = styled.div`
  color: ${Color.DarkGreen};
  font-family: "Open Sans";
  font-size: 1.55vw;
  margin-top: 30px;
`;

export const ContentBrickImageSubTitle = styled.div`
  color: ${Color.Gray8};
  font-family: "Open Sans";
  font-size: 1.1vw;
`;

export const ContentBrickWrapper = styled.div`
  container-type: inline-size;

  @container (max-width: 1200px) {
    ${ContentBrickImageContainer} {
      padding: 1vw;
      width: 50%;
    }

    ${ContentBrickContent} {
      padding: 40px 30px;
    }

    ${ContentBrickImageTitle} {
      font-size: 22px;
    }

    ${ContentBrickImageSubTitle} {
      font-size: 16px;
    }

    ${ContentBrickTitle} {
    }
  }
`;
