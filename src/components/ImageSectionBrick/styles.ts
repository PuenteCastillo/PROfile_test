import { Color } from "globals/enums";
import styled from "styled-components";

export const ImageSectionBrickContent = styled.div`
  padding: 80px 160px;
  background-size: cover;
  background-position: center;
`;

export const ImageSectionBrickTitle = styled.h2`
  color: ${Color.DarkBlue};
  font-family: "PT Serif Bold";
  text-align: center;
  margin-bottom: 60px;
  width: 100%;
`;

export const ImageSectionBrickImages = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 100%;
`;

export const ImageSectionBrickImageContainer = styled.div`
  padding: 2vw;
  text-align: center;
  width: 25%;
`;

export const ImageSectionBrickImageWrapper = styled.div`
  position: relative;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export const ImageSectionBrickImage = styled.img`
  object-fit: cover;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ isRounded }: { isRounded: boolean }): string => {
    return isRounded ? "border: 8px solid #FFFFFF;  border-radius: 100%;" : "";
  }};
`;

export const ImageSectionBrickImageTitle = styled.div`
  color: ${Color.DarkGreen};
  font-family: "Open Sans";
  font-size: 1.55vw;
  margin-top: 30px;
`;

export const ImageSectionBrickImageSubTitle = styled.div`
  color: ${Color.Gray8};
  font-family: "Open Sans";
  font-size: 1.1vw;
`;

export const ImageSectionBrickWrapper = styled.div`
  container-type: inline-size;

  @container (max-width: 1200px) {
    ${ImageSectionBrickImageContainer} {
      padding: 1vw;
      width: 50%;
    }

    ${ImageSectionBrickContent} {
      padding: 40px 30px;
    }

    ${ImageSectionBrickImageTitle} {
      font-size: 22px;
    }

    ${ImageSectionBrickImageSubTitle} {
      font-size: 16px;
    }

    ${ImageSectionBrickTitle} {
    }
  }
`;
