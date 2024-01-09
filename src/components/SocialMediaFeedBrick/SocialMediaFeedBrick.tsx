import { Color } from "globals/enums";
import { SocialMediaFeedBrickProps } from "./types";
import {
  FeedContainer,
  FeedWrapper,
  FeedHeader,
  FeedTitle,
  FeedSubtitle,
  SocialsContainer,
  MediaColumn,
  MediaContainer,
  MediaTitle,
  SocialNickname,
  TwitterContent,
  TwitterIcon,
  Tweet,
  TweetText,
  Divider,
  InstagramIcon,
  PicturesContainer,
  InstagramPicture,
} from "./styles";
import picture1 from "../../assets/inst-pic/1.png";
import picture2 from "../../assets/inst-pic/2.png";
import picture3 from "../../assets/inst-pic/3.png";
import picture4 from "../../assets/inst-pic/4.png";
import picture5 from "../../assets/inst-pic/5.png";
import picture6 from "../../assets/inst-pic/6.png";

const SocialMediaFeedBrick = ({
  title,
  subTitle,
}: SocialMediaFeedBrickProps) => {
  return (
    <FeedContainer>
      <FeedWrapper>
        <FeedHeader subTitleSize={subTitle.fontSize} titleSize={title.fontSize}>
          <FeedTitle titleSize={title.fontSize} style={{ fontFamily: title.fontFamily }}>
            {title.fieldValue}
          </FeedTitle>
          <FeedSubtitle subTitleSize={subTitle.fontSize}>
            {subTitle.fieldValue}
          </FeedSubtitle>
        </FeedHeader>
        <SocialsContainer>
          <MediaColumn>
            <MediaContainer>
              <MediaTitle>
                <TwitterIcon />
                <SocialNickname>@gregpalumbo</SocialNickname>
              </MediaTitle>
              <TwitterContent>
                <Tweet>
                  <TwitterIcon color={Color.DarkBlue} />
                  <TweetText>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem acc aperiam, eaque ipsa quae ab illo inventore
                    lorem ipsum dolor sit acc aperiam, eaque ipsa quae ab illo
                    inventore lorem ipsum dolor sit
                  </TweetText>
                </Tweet>
                <Divider />
                <Tweet>
                  <TwitterIcon color={Color.DarkBlue} />
                  <TweetText>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem acc aperiam, eaque ipsa quae ab illo inventore
                    lorem ipsum dolor sit acc aperiam, eaque ipsa quae ab illo
                    inventore lorem ipsum dolor sit
                  </TweetText>
                </Tweet>
              </TwitterContent>
            </MediaContainer>
          </MediaColumn>
          <MediaColumn>
            <MediaContainer>
              <MediaTitle>
                <InstagramIcon color={Color.Black} />
                <SocialNickname>@gregpalumbo</SocialNickname>
              </MediaTitle>
              <PicturesContainer>
                <InstagramPicture src={picture1} />
                <InstagramPicture src={picture2} />
                <InstagramPicture src={picture3} />
                <InstagramPicture src={picture4} />
                <InstagramPicture src={picture5} />
                <InstagramPicture src={picture6} />
              </PicturesContainer>
            </MediaContainer>
          </MediaColumn>
        </SocialsContainer>
      </FeedWrapper>
    </FeedContainer>
  );
};

export default SocialMediaFeedBrick;
