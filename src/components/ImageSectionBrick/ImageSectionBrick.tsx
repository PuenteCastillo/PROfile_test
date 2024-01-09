import PersonImage from "assets/person-circle.svg";
import { ImageSectionBrickProps } from "./types";
import {
  ImageSectionBrickWrapper,
  ImageSectionBrickContent,
  ImageSectionBrickTitle,
  ImageSectionBrickImages,
  ImageSectionBrickImageContainer,
  ImageSectionBrickImageWrapper,
  ImageSectionBrickImage,
  ImageSectionBrickImageTitle,
  ImageSectionBrickImageSubTitle,
} from "./styles";
import TextFieldFactory from "helpers/TextFieldFactory";

const ImageSectionBrick = ({
  title,
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
}: ImageSectionBrickProps) => {
  return (
    <ImageSectionBrickWrapper>
      <ImageSectionBrickContent style={{ backgroundImage: `url(${background})` }}>
        <ImageSectionBrickTitle
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
        </ImageSectionBrickTitle>
        <ImageSectionBrickImages>
          <ImageSectionBrickImageContainer>
            <ImageSectionBrickImageWrapper>
              <ImageSectionBrickImage
                isRounded={isRounded}
                src={imageOne || PersonImage}
              />
            </ImageSectionBrickImageWrapper>
            <ImageSectionBrickImageTitle>{imageOneTitle.fieldValue}</ImageSectionBrickImageTitle>
            <ImageSectionBrickImageSubTitle>
              {imageOneSubTitle.fieldValue}
            </ImageSectionBrickImageSubTitle>
          </ImageSectionBrickImageContainer>
          <ImageSectionBrickImageContainer>
            <ImageSectionBrickImageWrapper>
              <ImageSectionBrickImage
                isRounded={isRounded}
                src={imageTwo || PersonImage}
              />
            </ImageSectionBrickImageWrapper>
            <ImageSectionBrickImageTitle>{imageTwoTitle.fieldValue}</ImageSectionBrickImageTitle>
            <ImageSectionBrickImageSubTitle>
              {imageTwoSubTitle.fieldValue}
            </ImageSectionBrickImageSubTitle>
          </ImageSectionBrickImageContainer>
          <ImageSectionBrickImageContainer>
            <ImageSectionBrickImageWrapper>
              <ImageSectionBrickImage
                isRounded={isRounded}
                src={imageThree || PersonImage}
              />
            </ImageSectionBrickImageWrapper>
            <ImageSectionBrickImageTitle>{imageThreeTitle.fieldValue}</ImageSectionBrickImageTitle>
            <ImageSectionBrickImageSubTitle>
              {imageThreeSubTitle.fieldValue}
            </ImageSectionBrickImageSubTitle>
          </ImageSectionBrickImageContainer>
          <ImageSectionBrickImageContainer>
            <ImageSectionBrickImageWrapper>
              <ImageSectionBrickImage
                isRounded={isRounded}
                src={imageFour || PersonImage}
              />
            </ImageSectionBrickImageWrapper>
            <ImageSectionBrickImageTitle>{imageFourTitle.fieldValue}</ImageSectionBrickImageTitle>
            <ImageSectionBrickImageSubTitle>
              {imageFourSubTitle.fieldValue}
            </ImageSectionBrickImageSubTitle>
          </ImageSectionBrickImageContainer>
        </ImageSectionBrickImages>
      </ImageSectionBrickContent>
    </ImageSectionBrickWrapper>
  );
};

export default ImageSectionBrick;
