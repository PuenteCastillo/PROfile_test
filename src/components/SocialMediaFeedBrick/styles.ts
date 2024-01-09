import { Color } from "globals/enums";
import styled from "styled-components";
import { ReactComponent as TwitterIconSVG } from "assets/icons/twitter.svg";
import { ReactComponent as InstagramIconSVG } from "assets/icons/instagram.svg";
import { FeedHeaderProps, FeedSubTitleProps, FeedTitleProps } from "./types";

export const FeedWrapper = styled.div`
  max-width: 1920px;
  margin: auto;
  padding: 120px 30px 30px 30px;
  background: ${Color.Gray2};
`;

export const FeedTitle = styled.h1<FeedTitleProps>`
  margin: 0;
  font-size: ${({ titleSize }: { titleSize: number }): string =>
    titleSize + "px"};
  line-height: ${({ titleSize }: { titleSize: number }): string =>
    titleSize + "px"};
  color: ${Color.DarkBlue};
`;

export const FeedSubtitle = styled.p<FeedSubTitleProps>`
  margin: 30px 0 55px;
  font-family: "Open Sans Bold";
  font-size: ${({ subTitleSize }: { subTitleSize: number }): string =>
    subTitleSize + "px"};
  line-height: ${({ subTitleSize }: { subTitleSize: number }): string =>
    subTitleSize + "px"};
`;

export const FeedHeader = styled.div<FeedHeaderProps>`
  width: 100%;
  text-align: center;

  @container (max-width: 565px) {
    ${FeedTitle} {
      font-size: ${({ titleSize }: { titleSize: number }): string =>
        titleSize / 1.5 + "px"};
    }

    ${FeedSubtitle} {
      font-size: ${({ subTitleSize }: { subTitleSize: number }): string =>
        subTitleSize / 1.5 + "px"};
      font-family: "Open Sans";
      margin: 20px 0 30px;
    }
  }
`;

export const MediaColumn = styled.div`
  width: 45%;
  max-width: 100%;
  position: relative;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 30px;
`;

export const MediaContainer = styled.div`
  width: 100%;,
  border-radius: 5px;
  box-shadow: 0 1px 6px ${Color.Black}29;
  padding: 43px;
`;

export const MediaTitle = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const SocialNickname = styled.p`
  margin: 0 0 0 20px;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: bold;
  line-height: 1.4;
`;

export const TwitterIcon = styled(TwitterIconSVG)`
  fill: ${({ color }) => (color ? color : "black")};
  min-width: 26px;
  min-height: 22px;
`;

export const InstagramIcon = styled(InstagramIconSVG)`
  fill: ${({ color }) => (color ? color : "black")};
  width: 26px;
  height: 26px;
`;

export const TwitterContent = styled.div`
  padding-top: 45px;
  width: 100%;
`;

export const Tweet = styled.div`
  padding-left: 25px;
  display: flex;
`;

export const TweetText = styled.p`
  font-family: "Roboto";
  font-size: 15px;
  font-weight: normal;
  margin-left: 20px;
  margin-bottom: 0;
`;

export const Divider = styled.div`
  margin: 28px 0 28px;
  height: 1px;
  width: 100%;
  background-color: ${Color.Gray6};
`;

export const PicturesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 45px;
`;

export const InstagramPicture = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;

export const FeedContainer = styled.div`
  container-type: inline-size;

  @container (max-width: 767px) {
    ${FeedWrapper} {
      padding: 40px 30px 0;
    }
  }
`;

export const SocialsContainer = styled.div`
  container-type: inline-size;
  justify-content: center;
  display: flex;
  flex-flow: row wrap;

  @container (max-width: 767px) {
    ${MediaColumn} {
      display: block;
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }

  @container (max-width: 565px) {
    ${MediaContainer} {
      padding: 25px;
    }

    ${TwitterIcon} {
      width: 21px;
      height: 18px;
      min-width: 21px;
      min-height: 18px;
    }

    ${InstagramIcon} {
      min-width: 21px;
      min-height: 21px;
    }

    ${SocialNickname} {
      font-size: 15px;
    }

    ${TwitterContent} {
      padding-top: 24px;
    }

    ${Tweet} {
      padding-left: 8px;
    }

    ${TweetText} {
      font-size: 13px;
    }

    ${Divider} {
      margin: 16px 0 16px;
    }

    ${PicturesContainer} {
      margin-top: 20px;
      padding-left: 17px;
      padding-right: 17px;
      grid-gap: 10px;
    }

    ${InstagramPicture} {
      padding: 6px;
    }
  }
`;
