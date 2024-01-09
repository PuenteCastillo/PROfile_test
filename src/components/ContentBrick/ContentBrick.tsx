import PersonImage from "assets/person-circle.svg";
import { ContentBrickProps } from "./types";
import {
  ContentBrickWrapper,
  ContentBrickContent,
  ContentBrickTitle,
  ContentBrickImages,
  ContentBrickImageContainer,
  ContentBrickImageWrapper,
  ContentBrickImage,
  ContentBrickImageTitle,
  ContentBrickImageSubTitle,
  ContentBrickParagraphContainer,
  ContentBrickParagraph,
} from "./styles";
import TextFieldFactory from "helpers/TextFieldFactory";

const ContentBrick = ({
  title,
  body,
  background,
  isRounded,
  imageOneTitle,
  imageOneSubTitle,
  imageTwoTitle,
  imageTwoSubTitle,
  imageThreeTitle,
  imageThreeSubTitle,
  imageFourTitle,
  imageFourSubTitle,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
}: ContentBrickProps) => {
  return (
    <ContentBrickWrapper>
      <ContentBrickContent style={{ backgroundImage: `url(${background})` }}>
        <ContentBrickTitle
          style={{
            fontFamily: title.fontFamily,
            fontWeight: title.fontWeight,
            fontStyle: title.fontStyle,
            fontSize: title.fontSize,
            textTransform: TextFieldFactory.textTransform(title.textTransform),
            textDecoration: title.textDecoration,
            textAlign: TextFieldFactory.textAlign(title.textAlign),
            color: title.color
          }}
        >
          {title.fieldValue}
        </ContentBrickTitle>

        <ContentBrickParagraphContainer>
          <ContentBrickParagraph
            style={{
              fontFamily: body.fontFamily,
              fontWeight: body.fontWeight,
              fontStyle: body.fontStyle,
              fontSize: body.fontSize,
              textTransform: TextFieldFactory.textTransform(body.textTransform),
              textDecoration: body.textDecoration,
              textAlign: TextFieldFactory.textAlign(body.textAlign),
              color: body.color
            }}
          >
            {body.fieldValue}
          </ContentBrickParagraph>
        </ContentBrickParagraphContainer>
      </ContentBrickContent>
    </ContentBrickWrapper>
  );
};

export default ContentBrick;
