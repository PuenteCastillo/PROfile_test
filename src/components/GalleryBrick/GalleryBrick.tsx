import TextFieldFactory from "helpers/TextFieldFactory";
import {
  GalleryBrickWrapper,
  GalleryBrickContent,
  GalleryBrickTitle,
  GalleryBrickSubtitle,
  GalleryBrickImages,
  GalleryBrickImageWrapper,
  GalleryBrickImage,
  GalleryBrickImagePreview,
} from "./styles";
import { GalleryBrickProps } from "./types";

const GalleryBrick = ({
  background,
  title,
  subTitle,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  imageSix,
  imageSeven,
}: GalleryBrickProps) => {
  return (
    <GalleryBrickWrapper>
      <GalleryBrickContent style={{ backgroundImage: `url(${background})` }}>
        <GalleryBrickTitle
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
        </GalleryBrickTitle>
        <GalleryBrickSubtitle
          style={{
            fontFamily: subTitle.fontFamily,
            fontWeight: subTitle.fontWeight,
            fontStyle: subTitle.fontStyle,
            fontSize: subTitle.fontSize,
            textTransform: TextFieldFactory.textTransform(subTitle.textTransform),
            textDecoration: subTitle.textDecoration,
            textAlign: TextFieldFactory.textAlign(subTitle.textAlign),
            color: subTitle.color
          }}
        >
          {subTitle.fieldValue}
        </GalleryBrickSubtitle>
        <GalleryBrickImages>
          <GalleryBrickImageWrapper>
            {imageOne ? (
              <GalleryBrickImage src={imageOne} />
            ) : (
              <GalleryBrickImagePreview>1</GalleryBrickImagePreview>
            )}
          </GalleryBrickImageWrapper>
          <GalleryBrickImageWrapper>
            {imageTwo ? (
              <GalleryBrickImage src={imageTwo} />
            ) : (
              <GalleryBrickImagePreview>2</GalleryBrickImagePreview>
            )}
          </GalleryBrickImageWrapper>
          <GalleryBrickImageWrapper>
            {imageThree ? (
              <GalleryBrickImage src={imageThree} />
            ) : (
              <GalleryBrickImagePreview>3</GalleryBrickImagePreview>
            )}
          </GalleryBrickImageWrapper>
          <GalleryBrickImageWrapper>
            {imageFour ? (
              <GalleryBrickImage src={imageFour} />
            ) : (
              <GalleryBrickImagePreview>4</GalleryBrickImagePreview>
            )}
          </GalleryBrickImageWrapper>
          <GalleryBrickImageWrapper>
            {imageFive ? (
              <GalleryBrickImage src={imageFive} />
            ) : (
              <GalleryBrickImagePreview>5</GalleryBrickImagePreview>
            )}
          </GalleryBrickImageWrapper>
          <GalleryBrickImageWrapper>
            {imageSix ? (
              <GalleryBrickImage src={imageSix} />
            ) : (
              <GalleryBrickImagePreview>6</GalleryBrickImagePreview>
            )}
          </GalleryBrickImageWrapper>
          <GalleryBrickImageWrapper>
            {imageSeven ? (
              <GalleryBrickImage src={imageSeven} />
            ) : (
              <GalleryBrickImagePreview>7</GalleryBrickImagePreview>
            )}
          </GalleryBrickImageWrapper>
        </GalleryBrickImages>
      </GalleryBrickContent>
    </GalleryBrickWrapper>
  );
};

export default GalleryBrick;
