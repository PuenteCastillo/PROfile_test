import {
  HeroBrickWrapper,
  HeroBrickContent,
  HeroBrickTitle,
  HeroBrickSubTitle,
} from "./styles";

const HeroBrick = ({
  background = "",
  backgroundColor = "",
  title,
  subTitle
}: HeroBrickProps) => {
  return (
    <HeroBrickWrapper titleSize={0} subTitleSize={0}>
      <HeroBrickContent
        titleSize={title.fontSize}
        subTitleSize={subTitle.fontSize}
        style={{ backgroundImage: `url(${background})`, backgroundColor: backgroundColor }}
      >
        <HeroBrickTitle
          titleSize={title.fontSize}
          titleLineHeight={title.lineHeight}
          style={{
            fontFamily: title.fontFamily,
          }}
          titleFontWeight={title.fontWeight}
          titleFontStyle={title.fontStyle}
          titleTextDecoration={title.textDecoration}
          titleTextTransform={title.textTransform}
          titleTextAlign={title.textAlign}
          titleColor={title.color}
        >
          {title.fieldValue}
        </HeroBrickTitle>
        <HeroBrickSubTitle
          subTitleSize={subTitle.fontSize}
          subTitleLineHeight={subTitle.lineHeight}
          style={{
            fontFamily: subTitle.fontFamily,
          }}
          subTitleFontWeight={subTitle.fontWeight}
          subTitleFontStyle={subTitle.fontStyle}
          subTitleTextDecoration={subTitle.textDecoration}
          subTitleTextTransform={subTitle.textTransform}
          subTitleTextAlign={subTitle.textAlign}
          subTitleColor={subTitle.color}
        >
          {subTitle.fieldValue}
        </HeroBrickSubTitle>
      </HeroBrickContent>
    </HeroBrickWrapper>
  );
};

export default HeroBrick;
