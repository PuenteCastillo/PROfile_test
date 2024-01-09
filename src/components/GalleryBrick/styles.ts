import { Color } from "globals/enums";
import styled from "styled-components";

export const GalleryBrickContent = styled.div`
  padding: 80px 160px;
  background-size: cover;
  background-position: center;
`;

export const GalleryBrickTitle = styled.p`
  color: ${Color.DarkBlue};
  font-family: "PT Serif Bold";
  font-size: 66px;
  text-align: center;
  margin-bottom: 22px;
`;

export const GalleryBrickSubtitle = styled.p`
  color: ${Color.Gray10};
  font-family: "Open Sans Bold";
  font-size: 21px;
  text-align: center;
  margin-bottom: 89px;
`;

export const GalleryBrickImages = styled.div`
  position: relative;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export const GalleryBrickImageWrapper = styled.div`
  position: absolute;
  padding: 15px;

  &:nth-child(1) {
    top: 0;
    left: 0;
    height: 50%;
    width: 60%;
  }

  &:nth-child(2) {
    top: 0;
    left: 60%;
    height: 25%;
    width: 40%;
  }

  &:nth-child(3) {
    top: 50%;
    left: 0;
    height: 20%;
    width: 30%;
  }

  &:nth-child(4) {
    top: 50%;
    left: 30%;
    height: 20%;
    width: 30%;
  }

  &:nth-child(5) {
    top: 25%;
    left: 60%;
    height: 45%;
    width: 40%;
  }

  &:nth-child(6) {
    top: 70%;
    left: 0;
    height: 30%;
    width: 30%;
  }

  &:nth-child(7) {
    top: 70%;
    left: 30%;
    height: 30%;
    width: 70%;
  }
`;

export const GalleryBrickImage = styled.img`
  border: 10px solid ${Color.White};
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const GalleryBrickImagePreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Color.White};
  color: ${Color.DarkerBlue};
  font-weight: bold;
  font-size: 5vw;
  height: 100%;
  width: 100%;
`;

export const GalleryBrickWrapper = styled.div`
  container-type: inline-size;

  @container (max-width: 1200px) {
    ${GalleryBrickContent} {
      padding: 40px 30px;
    }

    ${GalleryBrickTitle} {
      font-size: 30px;
      line-height: 30px;
      margin-bottom: 20px;
    }

    ${GalleryBrickSubtitle} {
      font-family: "Open Sans";
      font-size: 14px;
      margin-bottom: 40px;
    }

    ${GalleryBrickImageWrapper} {
      padding: 5px;
    }
  }

  @container (max-width: 700px) {
    ${GalleryBrickImagePreview} {
      font-size: 2.5vw;
    }

    ${GalleryBrickImages} {
      &:after {
        content: "";
        display: block;
        padding-bottom: 0%;
      }
    }

    ${GalleryBrickImageWrapper} {
      position: initial;
      padding: 5px;
      display: inline-block;

      &:nth-child(1) {
        height: 261px;
        width: 100%;
      }

      &:nth-child(2) {
        height: 134px;
        width: 50%;
      }

      &:nth-child(3) {
        height: 134px;
        width: 50%;
      }

      &:nth-child(4) {
        height: 255px;
        width: 100%;
      }

      &:nth-child(5) {
        height: 265px;
        width: 50%;
      }

      &:nth-child(6) {
        height: 265px;
        width: 50%;
      }

      &:nth-child(7) {
        height: 261px;
        width: 100%;
      }
    }
  }
`;
